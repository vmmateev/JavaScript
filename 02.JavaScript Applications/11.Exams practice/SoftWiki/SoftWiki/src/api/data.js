//Всичките заявки пишем тук


import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllArticles() { //catalog
    return api.get('/data/wiki?sortBy=_createdOn%20desc');
}
export async function getArticlesByCategory() { //homePage
    return api.get('/data/wiki?sortBy=_createdOn%20desc&distinct=category');
}

export async function getArticleById(id) { //details
    return api.get('/data/wiki/' + id);
}

export async function createArticle(book) {
    return api.post('/data/wiki', book);
}

export async function editArticle(id, article) {
    return api.put('/data/wiki/' + id, article);
}

export async function deleteArticle(id) {
    return api.del('/data/wiki/' + id)
}

export async function getMyBooks(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}


//SEARCH 
///data/wiki?where=title%20LIKE%20%22{query}%22
export async function searchBooks(query) {
    return api.get('/data/wiki?where=' + encodeURIComponent(`title LIKE "${query}"`));
}