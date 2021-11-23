import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/',
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    edit: '/data/catalog',
    delete: '/data/catalog',


}

export async function getAll() {
    return api.get(endpoints.all);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function getMyItems(userId) {
    return api.get(endpoints.myItems(userId));
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
}
export async function editItem(id, data) {
    return api.put(endpoints.edit + id, data);
}
export async function deleteItem(id) {
    return api.del(endpoints.delete, id);
}











// •	Register User (POST): http://localhost:3030/users/register
// •	Login User (POST): http://localhost:3030/users/login
// •	Logout User (GET): http://localhost:3030/users/logout

// •	Create Furniture (POST): http://localhost:3030/data/catalog
// •	All Furniture (GET): http://localhost:3030/data/catalog
// •	Furniture Details (GET): http://localhost:3030/data/catalog/:id
// •	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
// •	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
// •	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
