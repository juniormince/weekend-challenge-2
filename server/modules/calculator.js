//look at module intro's server and addinator
//attach const require('/addition') + other modules


// const addition = require('./modules/addition');
// const subtraction = require('./modules/subtraction');
// const multiply = require('./modules/multiply');
// const division = require('./modules/divide');




class Calculator {
    constructor() {
        this.x = '';
        this.y = '';
        this.type = '';
        this.history = [];
        this.result = '';
    }    
    doMath() {
        if (this.type == '+') {
            this.result = +this.x + +this.y;
        }
        else if (this.type = '-') {
            this.result = this.x - this.y;
        }
        else if (this.type = '*') {
            this.result = this.x * this.y;
        }
        else if (this.type = '/') {
            this.result = this.x / this.y;
        }
        this.history.push(`${this.x} ${this.type} ${this.y} = ${this.result}`);
    }
}

module.exports = Calculator;