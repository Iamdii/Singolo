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



