import { searchArticle } from "../api/data.js";
import { html } from '../lib.js';

const searchTemplate = (articles, onSearch, params = '') => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="test by article title" name="search" .value=${params}>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${articles.length == 0 ? html`
        <h3 class="no-articles">No matching articles</h3>` 
        : articles.map(articlePreview)}
            </div>
</section>
`;

const articlePreview = (article) => html`
<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`;


export async function searchPage(ctx) {
    const params = ctx.querystring.split('=')[1];
        
    let articles = [];

    if (params) {
        articles = await searchArticle(decodeURIComponent(params))
    }

    ctx.render(searchTemplate(articles, onSearch, params));

    function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get('search').trim();

        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search))
        }
    }

}
