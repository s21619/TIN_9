const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calculator', (req, res) => {
    let { first, second, oper } = req.body;
    first = Number(first);
    second = Number(second);
    calculator = 0
    switch (oper) {
        case '+': calculator = first + second; break;
        case '-': calculator = first - second; break;
        case '*': calculator = first * second; break;
        case '/': calculator = first / second; break;
        default: res.send(JSON.stringify({ 'Result': 'Not an arithmetic calculation'}))
    }
    res.send(JSON.stringify({ 'Result': calculator }));
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
});