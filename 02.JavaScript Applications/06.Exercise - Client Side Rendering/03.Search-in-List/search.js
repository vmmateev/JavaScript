import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townNames } from './towns.js';

//start
//load and parse data
//call update
//add event listeners to search fueld

//update function :
// render template

//on search :
//read input value
//compare with town names and modify data
//update templates
// output result
//call update

//template:
// unsoret list or UL
//highlight elements based on search result


const listTemplate = (towns) => html`
<ul>
   ${towns.map(t => html`<li class=${t.match ? 'active' : '' }>${t.name}</li>`)}
</ul>`;

const towns = townNames.map(t => ({ name: t, match: false }))

const root = document.getElementById('towns');
const input = document.getElementById('searchText');
const output = document.getElementById('result');
document.querySelector('button').addEventListener('click', onSearch);
update();

function update() {
   render(listTemplate(towns), root);
}

function onSearch() {
   const match = input.value.trim().toLowerCase();
   let matches = 0;
   for (let town of towns) {
      if (match && town.name.toLocaleLowerCase().includes(match)) { // match Да се ползва като условие и ако е празен стринг да мине като false и да не се изпълни(Понеже празния стринг се съдържа във всички стрингове)
         town.match = true;
         matches++;
      } else {
         town.match = false;
      }
   }

   output.textContent = `${matches} matches found.`

   update();
}