import { getAllCars, myListings } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const myListingsTemplate = (myListingsCars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        <!-- Display all records -->
        ${myListingsCars.length == 0 ?
        html`<p class="no-cars"> You haven't listed any cars yet.</p>`
            : myListingsCars.map(carListingTemplate)}
    </div>
</section>`;

const carListingTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export async function myListingsPage(ctx) {
    const userData = getUserData();
    const myListingsCars = await myListings(userData.id);

    ctx.render(myListingsTemplate(myListingsCars));
}