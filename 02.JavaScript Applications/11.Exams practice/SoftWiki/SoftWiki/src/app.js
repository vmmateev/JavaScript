import { logout } from './api/data.js';
import { html, render, page } from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';

import * as api from './api/api.js'
page(decorateContext);
page('/', homePage);
page('/create', createPage);
page('/details/:id', detailsPage);

updateUserNav();
page.start();

window.api = api;

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