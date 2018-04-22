const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000; //add heroku port before deploying

const addCalcs = require('./modules/addition');
const subCalcs = require('./modules/subtraction');
const multCalcs = require('./modules/multiply');
const divideCalcs = require('./modules/divide');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));



//addition routes
app.get('/add-calcs', (req, res) => {
    console.log(addCalcs);
    res.send(addCalcs);
});

app.post('/addition', (req, res) => {
    console.log(req.body);
    addCalcs.push(req.body);
    res.sendStatus(200);
});

//subtraction routes
app.get('/sub-calcs', (req, res) => {
    console.log(subCalcs);
    res.send(subCalcs);
});

app.post('/subtract', (req, res) => {
    console.log(req.body);
    subCalcs.push(req.body);
    res.sendStatus(200);
});


//multiply routes
app.get('/mult-calcs', (req, res) => {
    console.log(multCalcs);
    res.send(multCalcs);
});

app.post('/multiply', (req, res) => {
    console.log(req.body);
    multCalcs.push(req.body);
    res.sendStatus(200);
});

//division routes
app.get('/divide-calcs', (req, res) => {
    console.log(divideCalcs);
    res.send(divideCalcs);
});

app.post('/divide', (req, res) => {
    console.log(req.body);
    divideCalcs.push(req.body);
    res.sendStatus(200);
});



//hEY!! listen!! 
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
