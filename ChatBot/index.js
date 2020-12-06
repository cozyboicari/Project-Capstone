const express = require('express');
const app = express();

const dialogflowFulfillment = require('dialogflow-fulfillment');
const { db, bucket } = require('./config/FirebaseConfig');

let idCity = '';

app.get('/', (req, res) => {
    res.send('Chat bot!');
})

app.post('/', express.json(), (req, res) => {
    const agent = new dialogflowFulfillment.WebhookClient({
        request: req,
        response: res
    });

    //add agent
    async function chonThanhPho(agent) {
        try {
            let cities = await db.collection('countries').doc('vietnam').collection('cities').get();
            cities.docs.map(doc => {
                if(doc.data().name.toLowerCase() === agent.query.toLowerCase()) {
                    idCity = doc.id;
                    return;
                }
            })
        } catch(error) {
            console.log('[get id city] ', error);
        }

        const anwsers = [
            `Oh! bạn chọn thành phố ${agent.query}, bạn có muốn bot tư vấn về tour du lịch không?`,
            `Thành phố ${agent.query} là nơi rất thú vị để đi du lịch, vậy bạn muốn tư vấn tour du lịch ở ${agent.query} không?`
        ];

        const pick = Math.floor(Math.random() * anwsers.length);
        const response = anwsers[pick];
        agent.add(response); 
    }

    async function tuVanMuonTour(agent) {
        let tours = [];
        try {
            (await db.collection('tours').get()).docs.map(doc => {
                if(idCity === doc.data().cityID) {
                    const { id } = doc
                    const data = doc.data();
                    tours.push({
                        id,
                        ...data
                    })
                }
            });
        } catch (error) {
            console.log('[get tours] ', error);
        }
        const payload = {
            tours
        }
        agent.add('Các chuyến tham quan du lịch của bot chia sẻ cho bạn nạ!');
        agent.add(new dialogflowFulfillment.Payload(
            agent.UNSPECIFIED, 
            payload,
            {
                sendAsMessage: true,
                rawPayload: true
            }
        ));
    }

    // set intent
    let intent = new Map();
    intent.set('ITuVan - DiaDiemDuLich - Diadiem', chonThanhPho);
    intent.set('ITuVan - DiaDiemDuLich - Diadiem - Muon', tuVanMuonTour);

    // push len
    agent.handleRequest(intent);
});

app.listen(3000, () => console.log('Server is live at port 3000'));