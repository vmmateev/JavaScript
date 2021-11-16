//initialization
// - find relevant section
import { e, showView } from './dom.js'
import { showCreate } from './create.js'
// - detach section
const section = document.getElementById('home-page');
const catalog = section.querySelector('card-deck.d-flex.justify-content-center'); // с точка се chainvat с интервали се влагат

section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});
catalog.addEventListener('click', (event) => {
    

})
section.remove();

// display logic
export function showHome() {
    showView(section);
    getMovies();
}

async function getMovies() {
    catalog.replaceChildren(e('p', {}, 'Loading...'));

    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();

    //Очаква поредица от елементи а не масив за това спред   
    catalog.replaceChildren(...data.map(createMovieCard)); 
}

//window.getMovies = getMovies;

function createMovieCard(movie) {
    const element = e('div', { className: 'card mb-4' });
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
    <div class="card-body">
   <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
   <a href="#">
       <button type="button" class="btn btn-info">Details</button>
   </a>
</div>`;

    return element;
}

/* <div class="card mb-4">
                        <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg"
                             alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Wonder Woman 1984</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div> */