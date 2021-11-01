window.addEventListener('DOMContentLoaded', start);

async function start() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    main.replaceChildren();

    recipes.map(createPreview).forEach(e => main.appendChild(e));
}

function createPreview(recipe) {
    const element = document.createElement('article');
    element.className = 'preview';
    element.innerHTML = `<div class="title">
        <h2>${recipe.name}</h2>
        </div>
        <div class="small">
        <img src="${recipe.img}">
        </div>`;

    element.addEventListener('click', () => {
        element.querySelector('h2').textContent = 'Loading...';
        togglePreview(recipe._id, element);
    })

    return element;
}

async function togglePreview(id, preview) {
    const recipe = await getRecipeById(id);
    const element = document.createElement('article');
    element.innerHTML
}

async function getRecipes() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    const res = await fetch(url);
    const data = res.json();

    return data;
}

async function getRecipesById(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    const res = await fetch(url);
    const data = res.json();

    return data;
}