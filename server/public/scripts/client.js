console.log('js czeck');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czeck');

    $('#mathAdd').on('click', newAdd);
    $('#mathSub').on('click', newSub);
    $('#mathMult').on('click', newMult);
    $('#mathDivi').on('click', newDivi);
}

function newAdd() {
    console.log('add button works');
    const newAdd = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Add'
    }
    console.log('thats numberwang', newAdd);
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

function newMult() {
    console.log('multiply button works');
    const newMult = {
        x: $('#first').val(),
        y: $('#second').val(),
        type: 'Multiply'
    }
    console.log('thats numberwang', newMult);
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

//for later-- .prepend adds to top of list on DOM 