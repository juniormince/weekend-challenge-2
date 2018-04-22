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
            response.forEach(function (additionyay) {
                $('#calculations').append(`<p> work pls?? ${additionyay.x} </p>`); //--doesn't work
            });
        });
    // $('#calculations').append(`<p> work pls??</p>`); //--works
}

function newSub() {
    console.log('subtraction button works');
    const newSub = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Subtract'
    }
    console.log('thats numberwang', newSub);
}

function getAllSubs() {
    $.ajax({
        method: 'GET',
        url: '/sub-calcs'
    })
        .then(function (response) {
            console.log(response);
            //move calculation functions to server side
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
}

function getAllMults() {
    $.ajax({
        method: 'GET',
        url: '/mult-calcs'
    })
        .then(function (response) {
            console.log(response);
            //move calculation functions to server side
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