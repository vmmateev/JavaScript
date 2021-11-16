//import { html, render } from '../node_modules/lit-html/lit-html.js';
import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showUpdate } from './update.js';
import { render } from './utility.js';



// main module:
// initialize modules with dependancies
// - rendering
// - communication between modules
// context arround the views = dependancy injection to other modules

const root = document.body;

const ctx = {
    update
};

update();

function update() {
    render([
        showCatalog(ctx),
        showCreate(ctx),
        showUpdate(ctx)
    ], root);
};





