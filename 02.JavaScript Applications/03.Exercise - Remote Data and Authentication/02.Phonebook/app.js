function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    list.addEventListener('click', onDelete)
    loadContacts();
}
const list = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phontInput = document.getElementById('phone');

attachEvents();

async function onDelete(event) {
    const id = event.target.dataset.id; //Взима ид от бутона което е ид на контакта а ако е undefined пропускаме
    if (id != undefined) {
        await deleteContact(id);
        event.target.parentElement.remove();
    }
}

async function onCreate() {
    const person = personInput.value;
    const phone = personInput.value;
    const contact = { person, phone };
    const result = await createContact(contact); //За да взимаме ИД от сървъра при новосъздаден елемент

    list.appendChild(createItem(result));
}

async function loadContacts() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const res = await fetch(url);
    const data = await res.json();

    list.replaceChildren(...Object.values(data).map(createItem));
    //Object.values(data).map(createItem).forEach(i => list.appendChild(i));
}

function createItem(contact) {
    const liElement = document.createElement('li');

    liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id=${contact._id}>Delete</button>`;
    return liElement;
}

async function createContact(contact) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }
    const res = await fetch(url, options);
    const result = await res.json();

    return result;
}

async function deleteContact(id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;
    const options = {
        method: 'DELETE',
    };
    const res = await fetch(url, options);
    const result = await res.json();

    return result;
}