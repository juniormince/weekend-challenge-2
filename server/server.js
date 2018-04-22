const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000; //add heroku port before deploying


//maybe move to calculator module??
const Calculator = require('./modules/calculator');

const calculate = new Calculator();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//calculator test run
app.get('/calculator', (req, res) => {
    console.log(calculate);
    res.send(calculate.history);
});

app.post('/calculator', (req, res) => {
    console.log(req.body);
    calculate.x = req.body.x;
    calculate.y = req.body.y;
    calculate.type = req.body.type;
    calculate.doMath();
    res.sendStatus(200);
});



//addition routes
// app.get('/add-calcs', (req, res) => {
//     console.log(addCalcs);
//     res.send(addCalcs);
// });

// app.post('/addition', (req, res) => {
//     console.log(req.body);
//     req.body.x + req.body.y
//     addCalcs.push(req.body);
//     res.sendStatus(200);
// });

//subtraction routes
// app.get('/sub-calcs', (req, res) => {
//     console.log(subCalcs);
//     res.send(subCalcs);
// });

// app.post('/subtract', (req, res) => {
//     console.log(req.body);
//     subCalcs.push(req.body);
//     res.sendStatus(200);
// });


//multiply routes
// app.get('/mult-calcs', (req, res) => {
//     console.log(multCalcs);
//     res.send(multCalcs);
// });

// app.post('/multiply', (req, res) => {
//     console.log(req.body);
//     multCalcs.push(req.body);
//     res.sendStatus(200);
// });

//division routes
// app.get('/divide-calcs', (req, res) => {
//     console.log(divideCalcs);
//     res.send(divideCalcs);
// });

// app.post('/divide', (req, res) => {
//     console.log(req.body);
//     divideCalcs.push(req.body);
//     res.sendStatus(200);
// });



//hEY!! listen!! 
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
