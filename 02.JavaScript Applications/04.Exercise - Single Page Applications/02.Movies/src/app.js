//create placeholder modules for every view - 1 file for each seection or more
//configure and test nav - event listeners on buttons
//implement modules
// - create async functions fro requests
// - implement DOM logic - visual



import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
};

document.querySelector('nav').addEventListener('click', (event) => {
    const view = views[event.target.id];
    if (typeof view == 'function') {
        event.preventDefault();
        view();
    }
});


//Novi klasove i data atributi moje da se dobavqt v html

//Order of views:
// - catalog - home view
// - login/register/logout
// - create
// - details view
// - likes
// - edit - Most complicated operation beacuse : 1. load movie for edit , 2.Fill fields with data , 3.Validate Data , 4.Async request + redirect
// - delete

// start app in home view
showHome();
