const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const addCalcs = require('./modules/addition');
// const subCalcs = require('./modules/subtraction');
// const multCalcs = require('./modules/multiply');
// const divideCalcs = require('./modules/divide');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add-calcs', (req, res) => {
    console.log(addCalcs);
    res.send(addCalcs);
});

app.post('/addition', (req, res) => {
    console.log(req.body);
    addCalcs.push(req.body);
    res.sendStatus(200);
});


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
