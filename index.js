const myLibrary = [
  {
    title: "Alex Rider Point Blanc",
    image: "img/book-cover.jpg",
    author: "Anthony Horowitz",
    pages: 320,
    haveRead: true,
  },
  {
    title: "Alex Rider Point Blanc",
    image: "img/book-cover.jpg",
    author: "Anthony Horowitz",
    pages: 320,
    haveRead: false,
  },
  {
    title: "Alex Rider Point Blanc",
    image: "img/book-cover.jpg",
    author: "Anthony Horowitz",
    pages: 320,
    haveRead: true,
  },
];

function Book(author, title, pages, haveRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(author, title, pages, haveRead) {
  const newBook = new Book(author, title, pages, haveRead);
}

myLibrary.forEach((book) => {
  const bookContainer = document.createElement("div");
  bookContainer.className = "book";

  const bookTitle = document.createElement("h1");
  bookTitle.innerText = book.title;

  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.alt = "Image of book cover";
  bookImage.className = "book-image";

  const bookAuthor = document.createElement("div");
  bookAuthor.innerText = book.author;
  bookAuthor.className = "book-author";

  const bookPages = document.createElement("div");
  bookPages.innerText = book.pages;
  bookPages.className = "book-pages";

  const readButton = document.createElement("button");
  readButton.className = "read-button";
  if (book.haveRead) {
    readButton.innerText = "Read";
  } else {
    readButton.innerText = "Unread";
  }

  bookContainer.append(bookTitle, bookImage, bookAuthor, bookPages, readButton);

  const mainContainer = document.querySelector(".main-content");
  mainContainer.appendChild(bookContainer);
});
