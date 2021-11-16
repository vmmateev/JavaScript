const host = 'http://localhost:3030';

async function request(url, options) {

    try {
        const response = await fetch(host + url, options);
        if (response.ok != true) {
            if (response.status == 403) { //problem with login
                sessionStorage.removeItem('userData'); //for another relog of user because of invalid token
            }
            const error = await response.json(); //handle error
            throw new Error(error.message); //Catch error and throw so other functions can see it
        }

        if (response.status == 204) { // if no body return response
            return response;
        } else { // otherwise return json promise inside the response
            return response.json();
        }

    } catch (err) {
        alert(err.message); //Visualize error on the screen for the user
        throw err; //Catch error and throw so other functions can see
    }


}

function createOptions(method = 'get', data) { //Create options for the requests
    const options = {
        method, //type of method post get put delete
        headers: {} // object of headers
    };
    if (data != undefined) { // if there is body (data not empty)
        options.headers['Content-Type'] = 'application/json'; // adding content type header app json 
        options.body = JSON.stringify(data); // stringify body
    }

    const userData = JSON.parse(sessionStorage.getItem('userData')); //get token of logged user
    if (userData != null) { //if token exist 
        options.headers['X-Authorization'] = userData.token; // add token to headers in options
    }

    return options; //return object options
}

export async function get(url) {
    return request(url, createOptions)
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) { // del because of delete is keyword and no data
    return request(url, createOptions('delete'));
}

export async function login(email, password) { //login with email and password
    const result = await post('/users/login', { email, password });// If wrong password will see the alert throwed from request func
    const userData = { // returned from server
        email: result.email,
        id: result._id, // to check if user is an author of the post
        token: result.accessToken
    };

    sessionStorage.setItem('userData', JSON.stringify(userData)); // add whole object stringified to sessionStorage
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password }); // same as login except address
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout() {
    await get('/users/logout'); // await the get query and if its ok remove the user data tokens 
    sessionStorage.removeItem('userData');
}
