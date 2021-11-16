import { html, render } from './node_modules/lit-html/lit-html.js';

import { cats as catData } from './catSeeder.js';

//template
//contains cat info 
//has toggle button - delegirane ili eventListener na vsqka kotka

//start
//parse imported data
//pass to template


/*
 <li>
<img src="./images/cat100.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
    <button class="showBtn">Show status code</button>
    <div class="status" style="display: none" id="100">
        <h4>Status Code: 100</h4>
        <p>Continue</p>
    </div>
</div>
</li>
*/


//// Delete / Add allCats DIV

// const catCard = (cat) => html`
// <li>
//     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
//     <div class="info">
//         <button @click=${() => toggleInfo(cat)} class="showBtn">${cat.info ? 'Show' : 'Hide'} status code</button>
//         ${cat.info ? html`<div class="status" id=${cat.id}>
//             <h4>Status Code: ${cat.statusCode}</h4>
//             <p>${cat.statusMessage}</p>
//         </div>`: null}
//     </div>
// </li>
// `;
// catData.forEach(c => c.info = true);
// function toggleInfo(cat) {
//     cat.info = !cat.info;
//     update();
// }

// const root = document.getElementById('allCats');
// update();
// function update() {
//     render(html`<ul>${catData.map(catCard)}</ul>`, root);
// }


//Hide and show info in the allcats div
const catCard = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`;

const root = document.getElementById('allCats');


render(html`<ul>${catData.map(catCard)}</ul>`, root);
// const cat = catCard(catData[0]);
// render(cat, root);


root.addEventListener('click', (ev) => {
    if (ev.target.tagName == 'BUTTON') {
        const element = ev.target.parentElement.querySelector('.status');
        if (element.style.display == 'none') { //toggle status
            element.style.display = 'block';
            ev.target.textContent = 'Hide status code';
        } else {
            element.style.display = 'none';
            ev.target.textContent = 'Show status code';
        }

    }
})
