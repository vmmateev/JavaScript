function attachEvents() {
    console.log("TODO...");
}

attachEvents();

async function getLocationCode(name) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    const res = await fetch(url);
    const data = await res.json();

    const location = data.find(l => l.name == name);

    return location.code;
}

async function getCurrent(code) {

    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const res = await fetch(url);
    const data = await res.json();


    return data;
}

async function getUpcoming(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const res = await fetch(url);
    const data = await res.json();


    return data;
}