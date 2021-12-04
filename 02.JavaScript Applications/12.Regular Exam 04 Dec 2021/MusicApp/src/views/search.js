import { searchAlbums } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (albums, onSearch, params='') => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${params}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <!--Show after click Search button-->
    ${params.length == 0
        ? ''
        : html`
                <div class="search-result">
                <!--If there are no matches-->
                ${albums.length == 0 
                    ? html`<p class="no-result">No result.</p>`
                    : albums.map(albumPreview)}
                </div>`
    }
</section>`;

let userData = getUserData();

const albumPreview = (album) => html`
    <!--If have matches-->
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${userData 
                ? html`
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>`
                : ''}
        </div>
    </div>`;


export async function searchPage(ctx) {
    const params = ctx.querystring.split('=')[1];
    userData = getUserData(); //refresh user data

    let albums = [];
    
    if (params) {        
        albums = await searchAlbums(decodeURIComponent(params));
    }
    
    ctx.render(searchTemplate(albums, onSearch, params));

    function onSearch(event) {
        event.preventDefault();
                
        const search = document.getElementById('search-input').value;
        if (search) {                       
            ctx.page.redirect('/search?query=' + encodeURIComponent(search))
        } else {
            return alert('Search field is required');
        }
    }
}