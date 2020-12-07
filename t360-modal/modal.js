const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const firstFocusableElement = document.querySelector('.modal__close-button');

const openModalListener = () => {
    document
        .querySelector('.open-modal-button')
        .addEventListener('click', openModalHandler);
};

const openModalHandler = () => {
    // az add, remove esetében egyszerre több paramétert is megadhatok
    modal.classList.add('modal--show', 'modal--fade-in');
    body.classList.add('modal-opened');
    // nem a modalt helyezem focusba, hanem a benne lévő első focusable elemet.
    // Bár a modal div-re is működni fog, és minden rendben vele, de ez szebb, jobb
    // A valódi focusable elemek: input, select, textarea, a, button
    firstFocusableElement.focus();
};

const closeModalListener = () => {
    // A modalban lévő gombokra és az overlay rétegre kattintva is zórjuk be a modalt
    const elements = document.querySelectorAll('.modal__overlay, .modal button')
    elements.forEach(element => {
        element.addEventListener('click', closeModalHandler);
    })
};

const closeModalHandler = () => {
    modal.classList.add('modal--fade-out');
    modal.classList.remove('modal--fade-in');
    body.classList.remove('modal-opened');
    // Mivel a display-t nem lehet animálni, ezért kell a setTimeout
    // A setTimeout iőzítése ugyanannyi legyen, mint a CSS-ben az animációjé
    // Természetesen megoldható lett volna a feladat úgy is, hogy a display tulajdonságot nem módosítom,
    // ilyen esetben a setTimeout-t sem kellene, de ez is egy jó megoldás
    setTimeout(() => {
        modal.classList.remove('modal--show', 'modal--fade-out');
    }, 300)
}

openModalListener();
closeModalListener();

// Amit szép lenne megoldani: ne ugorjon ki a fókusz a modalból. 
// Ha az utolsó fókuszálható elemen vagyunk, tehát a modal__not-ok gombon, és nyomunk egy Tab - ot
// akkor ugorjon vissza a fókusz a firstFocusableElement-re
// Ha valakit érdekel egy akadálymentes megoldás:
// https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
// Egy másik trükkös megoldás:
// https://css-tricks.com/a-css-approach-to-trap-focus-inside-of-an-element/