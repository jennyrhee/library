let library = [
  new Book('Project Hail Mary', 'Andy Weir', 496, false),
  new Book('Dune', 'Frank Herbert', 412, false)
];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}
