function fetchBooks() {
  //write fetch request to the Game of Thrones API
fetch("http://api.open-notify.org/astros.json")
.then(response => response.json())
.then(json => console.log(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(people => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${people.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

renderBooks();