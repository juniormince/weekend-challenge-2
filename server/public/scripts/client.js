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
        type: '+'
    }
    console.log('thats numberwang', newAdd);
    $.ajax({
        method: 'POST',
        url: '/calculator',
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
        url: '/calculator'
    })
        .then(function (response) {
            console.log(response);
            $('#calculations').empty();
            response.forEach(MATHHHH => {
                $('#calculations').prepend(`<p> ${MATHHHH} ! ah, ha, haa</p>`);
            });
        });
}

function newSub() {
    console.log('subtraction button works');
    const newSub = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: '-'
    }
    console.log('thats numberwang', newSub);
    $.ajax({
        method: 'POST',
        url: '/calculator',
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
        url: '/calculator'
    })
        .then(function (response) {
            console.log(response);
            $('#calculations').empty();
            response.forEach(MATHHHH => {
                $('#calculations').prepend(`<p> ${MATHHHH} ! ah, ha, haa</p>`);
            });
        });
}

function newMult() {
    console.log('multiply button works');
    const newMult = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: '*'
    }
    console.log('thats numberwang', newMult);
    $.ajax({
        method: 'POST',
        url: '/calculator',
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
        url: '/calculator'
    })
        .then(function (response) {
            console.log(response);
            $('#calculations').empty();
            response.forEach(MATHHHH => {
                $('#calculations').prepend(`<p> ${MATHHHH} ! ah, ha, haa</p>`);
            });
        });
}

function newDivi() {
    console.log('divide button works');
    const newDivi = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: '/'
    }
    console.log('thats numberwang', newDivi);
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: newDivi
    })
        .then(function (response) {
            console.log(response);
            getAllDivis();
        });
}

function getAllDivis() {
    $.ajax({
        method: 'GET',
        url: '/calculator'
    })
        .then(function (response) {
            console.log(response);
            $('#calculations').empty();
            response.forEach(MATHHHH => {
                $('#calculations').prepend(`<p> ${MATHHHH} ! ah, ha, haa</p>`);
            });
        });
}


//refresh button
function empty() {
    console.log('empty button works');
    $('#calculations').empty();
    $('input').val('');
}













