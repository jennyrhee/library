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

function createReadBtn(book) {
  const readBtn = document.createElement('button');
  readBtn.setAttribute('id', 'read-btn');
  if (book.hasRead) {
    readBtn.classList.add('has-read');
    readBtn.textContent = 'Read'
  } else {
    readBtn.textContent = 'Not Read';
  }
  readBtn.onclick = () => {
    readBtn.textContent = readBtn.textContent === 'Read' ? 'Not Read' : 'Read';
    readBtn.classList.toggle('has-read');
  }

  return readBtn;
}

function addRemoveBtn(card) {
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('id', 'remove-btn');
  removeBtn.onclick = () => card.remove();
  card.append(removeBtn);

  return card;
}

function makeCard(book) {
  const container = document.querySelector('.card-container');
  let card = document.createElement('div');
  card.classList.add('card');

  for (let prop in book) {
    let div = prop === 'hasRead' ? createReadBtn(book) : document.createElement('div');
    if (prop !== 'hasRead') {
      div.classList.add(prop);
      div.textContent = book[prop];
    }
    card.append(div);
  }
  card = addRemoveBtn(card);
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