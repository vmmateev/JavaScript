import { deleteArticle, getArticleById } from "../api/data.js";
import { html } from '../lib.js';
import { getUserData } from "../util.js";

const detailsTemplate = (article, isOwner, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${article.title}</h1>
    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">
            ${isOwner ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${article._id}" class="btn edit">Edit</a>
            `
            : html`
            <a href="/" class="btn edit">Back</a>
            `}
        </div>
    </div>
</section>`;


export async function detailsPage(ctx) {
    const userData = getUserData();
    const article = await getArticleById(ctx.params.id);


    const isOwner = userData && userData.id == article._ownerId;

    ctx.render(detailsTemplate(article, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this article?');
        if (choice) {
            await deleteArticle(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}