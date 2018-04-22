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
}

function newSub() {
    console.log('subtraction button works');
}

function newMult() {
    console.log('multiply button works');
}

function newDivi() {
    console.log('divide button works');
}

//for later-- .prepend adds to top of list on DOM 