import { getArticlesByCategory } from "../api/data.js";
import { html } from '../lib.js';

const homeTemplate = (csArticle, javaArticle, pythonArticle, jsArticle) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${jsArticle ? 
        html`
        <article>
            <h3>${jsArticle.title}</h3>
            <p>${jsArticle.content}</p>
            <a href="/details/${jsArticle._id}" class="btn details-btn">Details</a>
        </article>
        `
        :
        html`<h3 class="no-articles">No articles yet</h3>`
    }
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${csArticle ? 
        html`
        <article>
            <h3>${csArticle.title}</h3>
            <p>${csArticle.content}</p>
            <a href="/details/${csArticle._id}" class="btn details-btn">Details</a>
        </article>`
        :
        html`<h3 class="no-articles">No articles yet</h3>`
    }
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${javaArticle ? 
        html`
        <article>
            <h3>${javaArticle.title}</h3>
            <p>${javaArticle.content}</p>
            <a href="/details/${javaArticle._id}" class="btn details-btn">Details</a>
        </article>`
        :
        html`<h3 class="no-articles">No articles yet</h3>`
    }
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${pythonArticle ? 
        html`
        <article>
            <h3>${pythonArticle.title}</h3>
            <p>${pythonArticle.content}</p>
            <a href="/details/${pythonArticle._id}" class="btn details-btn">Details</a>
        </article>`
        :
        html`<h3 class="no-articles">No articles yet</h3>`
    }
    </section>
</section>`;

export async function homePage(ctx) {
    const articles = await getArticlesByCategory();//If empty csArticle.lenght return undefined
    
    const csArticle = articles.filter(x => x.category == 'C#')[0];
    const javaArticle = articles.filter(x => x.category == 'Java')[0];
    const pythonArticle = articles.filter(x => x.category == 'Python')[0];
    const jsArticle = articles.filter(x => x.category == 'JavaScript')[0];
    
    ctx.render(homeTemplate(csArticle, javaArticle, pythonArticle, jsArticle));
}