const express = require('express');
const app = express();
const dialogflowFulfillment = require('dialogflow-fulfillment');

app.get('/', (req, res) => {
    res.send('Chat bot!');
})

app.post('/', express.json(), (req, res) => {
    const agent = new dialogflowFulfillment.WebhookClient({
        request: req,
        response: res
    });


    //add agent
    function muonTuVan(agent) {
        agent.add('Bạn muốn tư vấn !');
    }

    // set intent
    let intent = new Map();
    intent.set('ITuVan - DiaDiemDuLich - Diadiem - Muon', muonTuVan);

    // push len
    agent.handleRequest(intent);
});

app.listen(3000, () => console.log('Server is live at port 3000'));