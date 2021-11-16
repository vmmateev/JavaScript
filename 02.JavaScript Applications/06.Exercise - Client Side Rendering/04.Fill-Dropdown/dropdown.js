import { html, render } from './node_modules/lit-html/lit-html.js';


//start:
//add event listeners
//call getData

//getData:
//fetch and parse data 
//call update

//update
//render template

//add item
//read input
// make post request
//on success, call getData
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const root = document.querySelector('div');
document.querySelector('form').addEventListener('submit', addItem);
getData();


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    update(Object.values(data));
    //update();
}

const selectTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value=${i._id}>${i.text}</option>`)}
</select>`;

function update(items) {
    const result = selectTemplate(items);
    render(result, root);
}

async function addItem(ev) {
    ev.preventDefault();

    const text = document.getElementById('itemText').value;

    const item = {
        text
    };
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    if (res.ok) {
        getData();
    }
}