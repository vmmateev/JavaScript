import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllIdeas() { //Get all ideas with querry string from the exercise
    return api.get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getById(id) { // get idea by ID
    return api.get('/data/ideas/' + id);
}

export async function createIdea(idea) { // Create Idea 
    return api.post('/data/ideas', idea);
}

export async function deleteById(id) { // delete Idea by ID
    return api.del('/data/ideas/' + id);
}