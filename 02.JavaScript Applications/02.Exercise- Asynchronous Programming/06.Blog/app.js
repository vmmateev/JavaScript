function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();
async function displayPost() {
    // get slected value form list
    // load post 
    // load comments
    // render data
    const titelElement = document.getElementById('post-title');
    const bodyElement = document.getElementById('post-body');
    const ulElement = document.getElementById('post-comments');

    titelElement.textContent = 'Loading...';
    bodyElement.textContent = '';
    ulElement.replaceChildren();

    const selectedId = document.getElementById(`posts`).value;


    const [post, comments] = await Promise.all([getPostsById(selectedId), getCommentsByPostId(selectedId)]); //Опакова ги в един промис и ги изпълнява едновременно двете като всяка една от тях връща промис 

    // const post = await getPostsById(selectedId); // Връща промис когато няма await а ако има връща данните след като се изпълни промиса
    // const comments = await getCommentsByPostId(selectedId);

    titelElement.textContent = post.title;
    bodyElement.textContent = post.body;

    ulElement.replaceChildren();

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });

}


async function getAllPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const res = await fetch(url);
    const data = await res.json();
    //parse data and populate list

    const selectElement = document.getElementById(`posts`);
    selectElement.replaceChildren();
    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    });
}

async function getPostsById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/${postId}`;

    const rest = await fetch(url);
    const data = await rest.json();

    return data;
}

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(comment => comment.postId == postId);
    return comments;
}




// Posts - http://localhost:3030/jsonstore/blog/posts
// Comments - http://localhost:3030/jsonstore/blog/comments
