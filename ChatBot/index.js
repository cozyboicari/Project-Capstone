const express = require('express');
const app = express();

const dialogflowFulfillment = require('dialogflow-fulfillment');
const { db, bucket } = require('./config/FirebaseConfig');

let idCity = '';
let questions = {
    category: '',
    time: 0,
    price: 0
}

chuanHoaTenThanhPho = nameCity => {
    return nameCity.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

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
            const nameCity = chuanHoaTenThanhPho(agent.context.get('ituvan-diadiemdulich-diadiem-followup').parameters['ethanhpho.original']);

            await db.collection('countries').doc('vietnam')
            .collection('cities').where('name', '==', nameCity)
            .onSnapshot(doc => idCity = doc.docs[0].id);

            const anwsers = [
                `Oh! bạn chọn ${nameCity} làm điểm đến? Bạn có muốn bot giúp tìm vài chuyến đi du lịch phù hợp với bạn không? \n\nNếu bạn muốn thì gõ 'Đồng ý' để bot sẽ hỏi bạn 1 vài câu hỏi để đưa ra những tour phù hợp với bạn, bạn có thể gõ 'Không đồng ý' để bỏ qua nạ!`,
                `${nameCity} là nơi rất thú vị để đi du lịch, vậy bạn muốn bot tìm chuyến đi phù hợp với bạn không? \n\nNếu bạn muốn thì gõ 'Đồng ý' để bot sẽ hỏi bạn 1 vài câu hỏi để đưa ra những tour phù hợp với bạn, bạn có thể gõ 'Không đồng ý' để bỏ qua nạ!`
            ];
            
            const pick = await Math.floor(Math.random() * anwsers.length);
            const response = await anwsers[pick];
            
            agent.add(response); 

        } catch(error) {
            console.log('[get id city] ', error);
        }
    }

    

    function DongY_cau2(agent) {
        questions.category = agent.query;
        agent.add('2. Bạn muốn chuyến đi thời gian là bao nhiêu? (từ 1 đến 8 giờ, hãy nhập số!)?');
    }

    function DongY_cau3(agent) {
        questions.time = parseFloat(agent.query);
        agent.add('3. Giá tiền cao nhất của một chuyến đi bạn có thể chi trả? (mệnh giá $)');
    }

    function DongY_finish(agent) {
        questions.price = parseFloat(agent.query);
        agent.add(`Bot đã nhận đủ yêu cầu của bạn, hãy nhấn 'xác nhận' thông tin để bot hiển thị các chuyến đi cho bạn! `);
    }


    async function ListTour() {
        let tours = [];
        const { category, time, price } = questions;
        await db.collection('tours').where('cityID', '==', idCity).get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    const data = doc.data();
                    const { id } = doc;
                    if(category === data.category && time >= data.time && price >= data.price) {
                        tours.push({
                            id,
                            ...data             
                        });
                    }
                });
            });

        const payload = {
            tours
        }

        if(tours.length === 0) {
            agent.add('Opps... xin lỗi bạn :( chuyến đi phù hợp với bạn hiện tại không có, \nbạn có thể tìm kiếm chuyến đi khác!');
        } else {
            agent.add('Đây là các chuyến đi du lịch phù hợp với bạn để bạn có thể tham khảo nạ.');
            agent.add(new dialogflowFulfillment.Payload(
                agent.UNSPECIFIED, 
                payload,
                {
                    sendAsMessage: true,
                    rawPayload: true
                }
            ));
        } 
    }

    // set intent
    let intent = new Map();
    intent.set('IThanhPho', chonThanhPho);
    intent.set('ICau2', DongY_cau2);
    intent.set('ICau3', DongY_cau3);
    intent.set('ICauCuoi', DongY_finish);
    intent.set('IListTour', ListTour);

    // push len
    agent.handleRequest(intent);
});

app.listen(3000, () => console.log('Server is live at port 3000'));