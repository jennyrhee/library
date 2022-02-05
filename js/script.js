let library = [
  new Book('Project Hail Mary', 'Andy Weir', 496, false),
  new Book('Dune', 'Frank Herbert', 412, false)
];

function Book(title, author, pages, hasRead) {
  this.title = `"${title}"`;
  this.author = author;
  this.pages = pages + ' pages';
  this.hasRead = hasRead;
}

function makeCard(book) {
  const container = document.querySelector('.card-container');
  const card = document.createElement('div');
  card.classList.add('card');

  for (let prop in book) {
    let div = document.createElement('div');
    div.classList.add(prop);
    div.textContent = book[prop];
    card.append(div);
  }
  container.appendChild(card);
}

function openForm() {
  document.getElementById('form').style.display = 'flex';
}

function closeForm() {
  document.getElementById('form').style.display = 'none';
  document.getElementById('form').reset();
}

library.forEach(book => makeCard(book));

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let newBook = new Book(
    form.elements['title'].value,
    form.elements['author'].value,
    form.elements['pages'].value,
    form.elements['hasRead'].checked
  )
  makeCard(newBook);
  closeForm();
})