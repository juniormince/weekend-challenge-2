console.log('js czeck');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czeck');

    $('#mathAdd').on('click', newAdd);
    $('#mathSub').on('click', newSub);
    $('#mathMult').on('click', newMult);
    $('#mathDivi').on('click', newDivi);
    $('#clearButton').on('click', empty);
}

function newAdd() {
    console.log('add button works');
    const newAdd = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Add'
    }
    console.log('thats numberwang', newAdd);
    $.ajax({
        method: 'POST',
        url: '/addition',
        data: newAdd
    })
        .then(function (response) {
            console.log(response);
            getAllAdds();
        });
}


function getAllAdds() {
    $.ajax({
        method: 'GET',
        url: '/add-calcs'
    })
        .then(function (response) {
            console.log(response);
            //move calculation functions to server side
            let xNumber = Number($('#first').val());
            let yNumber = Number($('#second').val());
            let sum = xNumber + yNumber;
            $('#calculations').prepend(`<p> ${xNumber} + ${yNumber} = ${sum} </p>`);
        });
}

function newSub() {
    console.log('subtraction button works');
    const newSub = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Subtract'
    }
    console.log('thats numberwang', newSub);
    $.ajax({
        method: 'POST',
        url: '/subtract',
        data: newSub
    })
        .then(function (response) {
            console.log(response);
            getAllSubs();
        });
}

function getAllSubs() {
    $.ajax({
        method: 'GET',
        url: '/sub-calcs'
    })
        .then(function (response) {
            console.log(response);
            //move calculation functions to server side
            let xNumber = Number($('#first').val());
            let yNumber = Number($('#second').val());
            let sum = xNumber - yNumber;
            $('#calculations').prepend(`<p> ${xNumber} - ${yNumber} = ${sum} </p>`);
        });
}

function newMult() {
    console.log('multiply button works');
    const newMult = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Multiply'
    }
    console.log('thats numberwang', newMult);
    $.ajax({
        method: 'POST',
        url: '/multiply',
        data: newMult
    })
        .then(function (response) {
            console.log(response);
            getAllMults();
        });
}

function getAllMults() {
    $.ajax({
        method: 'GET',
        url: '/mult-calcs'
    })
        .then(function (response) {
            console.log(response);
            //move calculation functions to server side
            let xNumber = Number($('#first').val());
            let yNumber = Number($('#second').val());
            let sum = xNumber * yNumber;
            $('#calculations').prepend(`<p> ${xNumber} x ${yNumber} = ${sum} </p>`);
        });
}

function newDivi() {
    console.log('divide button works');
    const newDivi = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Divide'
    }
    console.log('thats numberwang', newDivi);
}

function getAllDivis() {
    $.ajax({
        method: 'GET',
        url: '/divide-calcs'
    })
        .then(function (response) {
            console.log(response);
            //move calculation functions to server side
        });
}

function empty() {
    console.log('empty button works');
    $('#calculations').empty();
}










//for later-- .prepend adds to top of list on DOM 