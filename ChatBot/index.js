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
    function testPlayload(agent) {
        agent.add(new dialogflowFulfillment.Card({
            title: 'Tour du lịch',
            imageUrl: 'https://ae01.alicdn.com/kf/HTB1hw8iKFXXXXbQXpXXq6xXFXXXY/Kpop-bigbang-gd-g-dragon-mv-c-ng-m-t-ch-t-li-u-nhung-cao.jpg_q50.jpg',
            text: 'Tour du lịch cùng với phong le',
        }));
    }

    // set intent
    let intent = new Map();
    intent.set('testPayload', testPlayload);

    // push len
    agent.handleRequest(intent);
});

app.listen(3000, () => console.log('Server is live at port 3000'));