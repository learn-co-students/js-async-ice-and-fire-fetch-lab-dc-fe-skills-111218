function fetchBooks() {
  //write fetch request to the Game of Thrones API
  //Find in Browser Console--All Houses in GoT; 5th book in series; 1031st character in series//
fetch('https://anapioficeandfire.com/api/books/')
.then(resp => resp.json())
  .then(json => renderBooks(json));

//var myRequest = new Request(input[, init]);
//var myMode = myRequest.mode;

fetch('https://anapioficeandfire.com/api/houses/')
  .then(resp => resp.json())
  .then(json => console.log(json));
  

fetch('https://anapioficeandfire.com/api/books/5')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  

fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(resp => resp.json())
  .then(json => fetchBooks(json));
  
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

