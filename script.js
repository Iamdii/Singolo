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