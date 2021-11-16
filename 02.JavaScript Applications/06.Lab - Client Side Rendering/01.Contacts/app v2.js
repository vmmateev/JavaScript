import { html, render } from 'lit-html';
import { contacts } from "./contacts.js";
import { styleMap } from 'lit-html/directives/style-map'

//@click == onClick
const contactTemplate = (data, onDetails) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button class="detailsBtn" @click=${() => onDetails(data)}>${data.details ? 'Hide': 'Details'}</button>
        <div class="details" id=${data.id} style=${styleMap({display: data.details ? 'block' : 'none'})}>
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>
`;

start();

function start() {
    const container = document.getElementById('contacts');

    //render(contactTemplate(contacts[0]), container);
    render(contacts.map(contactTemplate), container);

    onRender();

    function onDetails(contact) {
        
        contact.details = !(contact.details); //if its truthy make it falsy if it flasy make it truty
        onRender();
    }

    function onRender() {
        render(contacts.map(c => contactTemplate(c, onDetails)), container);
    }
}
