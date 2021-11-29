import { html, render, page } from './lib.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';


page(decorateContext);
page('/', homePage);

updateUserNav();
page.start();


const root = document.getElementById('main-content');
document.getElementById('logoutLink').addEventListener('click', onLogout);



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block'
    }
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}