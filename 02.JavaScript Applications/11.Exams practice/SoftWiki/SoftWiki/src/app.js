import { logout } from './api/data.js';
import { html, render, page } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('main-content');

page(decorateContext);
page('/', homePage);
page('/index', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/search', searchPage);

updateUserNav();
page.start();



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