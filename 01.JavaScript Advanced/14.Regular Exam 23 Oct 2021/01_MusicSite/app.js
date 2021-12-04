window.addEventListener('load', solve);

function solve() {
    let genreElement = document.querySelector('#genre');
    let nameElement = document.querySelector('#name');
    let authorElement = document.querySelector('#author');
    let dateElement = document.querySelector('#date');

    let songsCollectionDivElement = document.querySelector('.all-hits-container');
    const savedSongsDiv = document.querySelector('.saved-container');

    const totalLikesDiv = document.querySelector('.likes');
    let likesPara = totalLikesDiv.querySelector('p'); //likesPara.textContent
    let likesCount = 0;
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSongs);

    // Addding songs function
    function addSongs(event) {
        event.preventDefault();

        if (genreElement.value == '' || nameElement.value == '' ||
            authorElement.value == '' || dateElement.value == '') {
            return;
        }

        let hitsInfoDiv = document.createElement('div');
        songsCollectionDivElement.appendChild(hitsInfoDiv);

        hitsInfoDiv.className = 'hits-info';
        hitsInfoDiv.innerHTML = `
        <img src="./static/img/img.png">
        <h2>Genre: ${genreElement.value}</h2>
        <h2>Name: ${nameElement.value}</h2>
        <h2>Author: ${authorElement.value}</h2>
        <h3>Date: ${dateElement.value}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>`;

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        const saveBtn = hitsInfoDiv.querySelector('.save-btn');
        saveBtn.addEventListener('click', saveSong);

        const likeBtn = hitsInfoDiv.querySelector('.like-btn');
        likeBtn.addEventListener('click', likeSong);

        const deleteBtn = hitsInfoDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteSong);
    };

    //SaveSong functionality
    function saveSong(event) {
        let songDiv = event.target.parentElement;
        event.target.nextElementSibling.remove(); //Like button
        event.target.remove(); // save button
        savedSongsDiv.appendChild(songDiv);
    }


    //Like functionality
    function likeSong(event) {
        event.target.disabled = true;
        likesCount += 1;
        likesPara.textContent = `Total Likes: ${likesCount}`;
    }

    //Delete functionality
    function deleteSong(event) {
        event.target.parentElement.remove();
    }

}