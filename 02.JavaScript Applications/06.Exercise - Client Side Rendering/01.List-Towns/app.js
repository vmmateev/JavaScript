//on submit :
// load and parse data 
//render template

//template: 
//ul with LI for each array item

import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');

const listTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const towns = document.getElementById('towns').value.split(',').map(t => t.trim()); // split by , and cut spaces 
    const result = listTemplate(towns);
    render(result, root); //Подаваме резултата и елемента в който искаме да го изобразим
});


