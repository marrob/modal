'use strict';
const modal = document.querySelector('.modal');

const sapnClose = document.querySelector('.span__close');
const btnOpen = document.querySelector('.button__open');
const btnOk = document.querySelector('.button__ok');
const btnCancel = document.querySelector('.button__cancel');
const modalBackground = document.querySelector('.modal__background');

let requiedToClose = false;

btnOpen.onclick = function() {
    modal.style.visibility = "visible";   
    modalBackground.classList.toggle('anim--rotate'); 
    btnOk.focus();
    console.log('start');
    requiedToClose = false;
}

sapnClose.onclick = function() {
    modalBackground.classList.toggle('anim--rotate');
    requiedToClose = true;
}
sapnClose.onkeypress =(e)=>{
    if (e.which == 32){
        console.log('space');
        modalBackground.classList.toggle('anim--rotate');
        requiedToClose = true;
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalBackground.classList.toggle('anim--rotate');
        requiedToClose = true;
    }
}

btnOk.onclick = function (){
    modalBackground.classList.toggle('anim--rotate');
    requiedToClose = true; 
}

btnCancel.onclick = function (){
    modalBackground.classList.toggle('anim--rotate');
    requiedToClose = true;
}

modalBackground.ontransitionend = function(){
    if(requiedToClose == true){
        modal.style.visibility = "hidden";
        requiedToClose = false;
    }
    modalBackground.background = 'red';
}