const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let allOrders = [];

app.post('/order', (req, res) => {
    allOrders.push(req.body);
    res.status(200).send('Order successfully recieved.');
    console.log(allOrders);
})

app.listen(9001, () => console.log('server running on port 9001'));