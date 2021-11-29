import { getAllArticles } from "../api/data.js";
import { html } from '../lib.js';

const homeTemplate = (cSArticle, javaArticle, pythonArticle, jsArticle) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${jsArticle.length==0 ? 
        html`<h3 class="no-articles">No articles yet</h3>`
        :html`
        <article>
            <h3>${jsArticle.title}</h3>
            <p>${jsArticle.content}</p>
            <a href="/data/wiki/${jsArticle._id}" class="btn details-btn">Details</a>
        </article>
        `}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${cSArticle.length==0 ? 
        html`<h3 class="no-articles">No articles yet</h3>`
        :html`
        <article>
            <h3>${cSArticle.title}</h3>
            <p>${cSArticle.content}</p>
            <a href="/data/wiki/${cSArticle._id}" class="btn details-btn">Details</a>
        </article>
        `}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${javaArticle.length==0 ? 
        html`<h3 class="no-articles">No articles yet</h3>`
        :html`
        <article>
            <h3>${javaArticle.title}</h3>
            <p>${javaArticle.content}</p>
            <a href="/data/wiki/${javaArticle._id}" class="btn details-btn">Details</a>
        </article>
        `}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${pythonArticle.length==0 ? 
        html`<h3 class="no-articles">No articles yet</h3>`
        :html`
        <article>
            <h3>${pythonArticle.title}</h3>
            <p>${pythonArticle.content}</p>
            <a href="/data/wiki/${pythonArticle._id}" class="btn details-btn">Details</a>
        </article>
        `}
    </section>
</section>`;


export async function homePage(ctx) {
    const articles = await getAllArticles();

    const cSArticle = articles.filter(x => x.category == 'C#')[0];
    const javaArticle = articles.filter(x => x.category == 'Java')[0];
    const pythonArticle = articles.filter(x => x.category == 'Python')[0];
    const jsArticle = articles.filter(x => x.category == 'JavaScript')[0];

    ctx.render(homeTemplate(cSArticle, javaArticle, pythonArticle, jsArticle));
}