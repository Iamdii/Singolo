/* Меню с переключением */

let navBar = document.getElementById('nav-bar');

navBar.querySelectorAll('a').forEach(el => el.addEventListener('click', function() {
    navBarCleaner();
    selectNavBarItem(this.id);
}));

function navBarCleaner() {
    navBar.querySelectorAll('a').forEach(el => el.classList.remove('selected-navbar-item')); 
}

function selectNavBarItem(itemId) {
    document.getElementById(itemId).classList.add('selected-navbar-item');
}

/* Активация экранов телефонов */

document.querySelector(".phone-horizontal").addEventListener('click', function() {
    hideDisplay(document.querySelector(".screen-h"));
});

document.querySelector(".phone-vertical").addEventListener('click', function() {
    hideDisplay(document.querySelector(".screen-v"));
});

const hideClass = 'hide-display';

function hideDisplay(element) {
    if(element.classList.contains(hideClass)) {
        element.classList.remove(hideClass);
    } else {
        element.classList.add(hideClass);
    }
}

/* Переключение табов, сдвиг изображений при переключении табов */

let portfolioButtons = document.getElementById('portfolio-navigation');

portfolioButtons.querySelectorAll('button').forEach(el => el.addEventListener('click', function() {
    portfolioButtonCleaner();
    selectPortfolioButton(this.id);

    shiftImg();
}));

function portfolioButtonCleaner() {
    portfolioButtons.querySelectorAll('button').forEach(el => el.classList.remove('selected-portfolio-button')); 
}

function selectPortfolioButton(itemId) {
    document.getElementById(itemId).classList.add('selected-portfolio-button');
}

function shiftImg() {
    let imgArray = Array.from(document.querySelector('.portfolio-images').querySelectorAll('.portfolio-img'));
    
    document.querySelector('.portfolio-images').innerHTML = '';

    imgArray.unshift(imgArray.pop());

    imgArray.forEach(function(item){
        document.querySelector('.portfolio-images').appendChild(item);
      });
}

/* Взаимодействие с картинками */

let portfolioImages = document.querySelector('.portfolio-images');

portfolioImages.querySelectorAll('img').forEach(el => el.addEventListener('click', function() {
    imageCleaner();
    selectImage(this.id);
}));

function imageCleaner() {
    portfolioImages.querySelectorAll('img').forEach(el => el.classList.remove('image-with-outline')); 
}

function selectImage(itemId) {
    document.getElementById(itemId).classList.add('image-with-outline');
}

 /* Работа с формой */

let getQuoteForm = document.querySelector('.quote-form');
    
getQuoteForm.addEventListener('click', function(event) {
        event.preventDefault();
 });

function submit() {
    console.log(document.querySelector('.input-subject').value);
}

/*------------------------------------------------------------------------------------------------------------------------------------*/


