import { html, render } from './node_modules/lit-html/lit-html.js';

//start:
//fetch and parse data
//add event listeners
//call update

// update:
//render template

//on search
//read input value
//compare input with all data fields
//mark matching items
//call update

//template
//display item data
//highlight item based on match


const studentRow = (student) => html`
<tr class=${student.match ? 'select'  : ''}>
   <td>${student.item.firstName} ${student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;

const url = 'http://localhost:3030/jsonstore/advanced/table';

const input = document.getElementById('searchField');
document.getElementById('searchBtn').addEventListener('click',onSearch);
let students;
start();

async function start() {

   const res = await fetch(url);
   const data = await res.json();
   students = Object.values(data).map(s=>({item:s,match:false})); //за да няма матч който не е стринг
   
   update();
}

function update() {
   render(students.map(studentRow), document.querySelector('tbody'));
}

function onSearch(){
   const value = input.value.trim().toLocaleLowerCase();

   for (let student of students) {
      student.match = Object.values(student.item).some(v => value && v.toLocaleLowerCase().includes(value));
   }
   update();
}