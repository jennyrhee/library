class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = Array.isArray(author) ? author.join(', ') : author;
    this.pages = pages + ' pages';
    this.hasRead = hasRead;
  }
}

class Display {
  form = document.getElementById('form');
  constructor(library) {
    this.library = library;
    (this.library.forEach(book => this.makeCard(book)));
    (this.form.addEventListener('submit', (e) => {
      e.preventDefault();
    
      let newBook = new Book(
        form.elements['title'].value,
        form.elements['author'].value,
        form.elements['pages'].value,
        form.elements['hasRead'].checked
      )
      this.makeCard(newBook);
      this.closeForm();
    }))
  }

  createReadBtn(book) {
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

  addRemoveBtn(card) {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'remove-btn');
    removeBtn.onclick = () => card.remove();
    card.append(removeBtn);
  
    return card;
  }

  makeCard(book) {
    const container = document.querySelector('.card-container');
    let card = document.createElement('div');
    card.classList.add('card');
  
    const props = ['title', 'author', 'pages', 'hasRead'];
    props.forEach(prop => {
      let div = prop === 'hasRead' ? this.createReadBtn(book) : document.createElement('div');
      if (prop !== 'hasRead') {
        div.classList.add(prop);
        div.textContent = book[prop];
      }
      card.append(div);
    });
    card = this.addRemoveBtn(card);
    container.appendChild(card);
  }

  openForm() {
    this.form.style.display = 'flex';
  }

  closeForm() {
    this.form.style.display = 'none';
    this.form.reset();
  }
}

let display = new Display([
  new Book('Project Hail Mary', 'Andy Weir', 496, false),
  new Book('Dune', 'Frank Herbert', 412, false),
  new Book('Barbarians at the Gate', ['Brian Burrough', 'John Helyar'], 592, true)
]);