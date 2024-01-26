const mainEl = document.querySelector('.main');

const formEl = document.createElement('form');
formEl.classList.add('search');
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputValue = Object.fromEntries(new FormData(e.target));
    const response = await fetch(`
    https://api.github.com/users/${inputValue.name}
    `);
    
    if (response.ok) {
        const data = await response.json();
    } else {
        alert('user is not fined')
    }
})

const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name');


const searchButtonEl = document.createElement('button');
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = 'Search'

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

function createProEl() {
    const element = document.createElement('div');
    element.classList.add('profile');
    element.innerHTML = `
        <img class="search-image" src=${profileData.avatar_url}></img>
        <p class="search-text"><span>Name: </span>${profileData.name}</p>
        <p class="search-text"><span>City: </span>${profileData.location}</p>
        <p class="search-text"><span>Bio: </span>${profileData.bio}</p>
    `
    element.appendChild(createDeleteBtnEl())
    return element;
}

function createDeleteBtnEl() {
    const element = document.createElement('button');
    element.classList.add('delete-button');
    element.innerText = 'Delete';
    
}