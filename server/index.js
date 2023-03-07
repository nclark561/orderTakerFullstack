const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let allOrders = [];

app.post('/order', (req, res) => {
    allOrders.push(req.body);
    console.log(allOrders);
    res.status(200).send(allOrders);
})

app.put('/order/:edit', (req, res) => {
    for (let i = 0; i < allOrders.length; i++) {
        if (allOrders[i].id === req.body.id) {
            allOrders[i].name = req.body.name;
            allOrders[i].entree = req.body.entree;
            allOrders[i].side = req.body.side;
            allOrders[i].drink = req.body.drink;
            allOrders[i].togo = req.body.togo;
            allOrders[i].pickup = req.body.pickup;
            console.log(allOrders);
            res.status(200).send(allOrders);
            break;
        }
    }
})

app.listen(9001, () => console.log('server running on port 9001'));