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

// When the user clicks on <span> (x), close the modal
sapnClose.onclick = function() {
    modal.style.visibility = "hidden";
    modalBackground.classList.remove('anim--rotate');
}

// When the user clicks the button, open the modal 
btnOpen.onclick = function() {
    modal.style.visibility = "visible";   
    modalBackground.classList.add('anim--rotate'); 
    btnOk.focus();

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
        modalBackground.classList.remove('anim--rotate');
    }
}

btnOk.onclick = function (){
    modalBackground.classList.remove('anim--rotate');
    modal.style.visibility = "hidden";
    
}

btnCancel.onclick = function (){
    modalBackground.classList.remove('anim--rotate');
    modal.style.visibility = "hidden";
}

btnAnim.onclick = function(){
    modalBackground.classList.add('anim--rotate');
    modal.style.visibility = "hidden";
}