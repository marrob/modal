// Get the modal
const modal = document.querySelector('.modal');

// Get the <span> element that closes the modal
const sapnClose = document.querySelector('.span__close');

// Get the button that opens the modal
const btnOpen = document.querySelector('.button__open');

// Get the Ok button
const btnOk = document.querySelector('.button__ok');

// Get the Ok button
const btnCancel = document.querySelector('.button__cancel');

const modalBackground = document.querySelector('.modal__background');

const btnAnim = document.querySelector('.button__anim');

const animated = document.querySelector('.modal__content');

// When the user clicks on <span> (x), close the modal
sapnClose.onclick = function() {
    modal.style.visibility = "hidden";
    modalBackground.classList.toggle('anim--rotate');

}
let requiedToClose = false;


// When the user clicks the button, open the modal 
btnOpen.onclick = function() {
    modal.style.visibility = "visible";   
    modalBackground.classList.toggle('anim--rotate'); 
    btnOk.focus();
    console.log('start');
    requiedToClose = false;
}

// When the user clicks anywhere outside of the modal, close it
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

btnAnim.onclick = function(){
    modalBackground.classList.toggle('anim--rotate');
}

modalBackground.ontransitionend = function(){
    if(requiedToClose == true)
    {
        modal.style.visibility = "hidden";
        requiedToClose = false;
    }
    console.log('animacio vege');
    modalBackground.background = 'red';
}