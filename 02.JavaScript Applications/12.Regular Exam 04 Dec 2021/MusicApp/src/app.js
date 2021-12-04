import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';


page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/search', searchPage);

const root = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('userCreate').style.display = 'inline-block';
        document.getElementById('logoutBtn').style.display = 'inline-block';

    } else {
        document.getElementById('login').style.display = 'inline-block';
        document.getElementById('register').style.display = 'inline-block';
        document.getElementById('userCreate').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
    }
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}