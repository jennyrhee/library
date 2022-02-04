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

library.forEach(book => makeCard(book));