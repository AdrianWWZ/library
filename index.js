const myLibrary = [
  {
    title: "Alex Rider Point Blanc",
    image: "img/book-cover1.jpg",
    author: "Anthony Horowitz",
    pages: 320,
    haveRead: true,
  },
  {
    title: "Python Machine Learning",
    image: "img/book-cover2.jpg",
    author: "Sebastian Raschka",
    pages: 456,
    haveRead: false,
  },
];

function Book(title, image, author, pages, haveRead) {
  this.author = author;
  this.image = image;
  this.title = title;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(title, image, author, pages, haveRead) {
  const newBook = new Book(title, image, author, pages, haveRead);
  displayBook(newBook);
}

const displayBook = (book) => {
  const bookContainer = document.createElement("div");
  bookContainer.className = "book";

  const bookTitle = document.createElement("h1");
  bookTitle.innerText = book.title;

  const bookImage = document.createElement("img");
  if (book.image) {
    bookImage.src = book.image;
    bookImage.alt = "Image of book cover";
  }
  bookImage.className = "book-image";

  const bookAuthor = document.createElement("div");
  bookAuthor.innerText = `by ${book.author}`;
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
  readButton.addEventListener("click", () => {
    if (book.haveRead) {
      readButton.innerText = "Unread";
    } else {
      readButton.innerText = "Read";
    }
    book.haveRead = !book.haveRead;
  });

  bookContainer.append(bookTitle, bookImage, bookAuthor, bookPages, readButton);

  const mainContainer = document.querySelector(".main-content");
  mainContainer.appendChild(bookContainer);
};

const dialog = document.querySelector("dialog");
const showDialogButton = document.querySelector(".add-book");
const closeDialogButton = document.querySelector(".close-button");

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
  dialog.close();
  const inputTitle = document.querySelector("#title").value;
  document.querySelector("#title").value = "";
  const inputImage = document.querySelector("#image").value;
  document.querySelector("#image").value = "";
  const inputAuthor = document.querySelector("#author").value;
  document.querySelector("#author").value = "";
  const inputPages = document.querySelector("#pages").value;
  document.querySelector("#pages").value = "";
  const inputRead = document.querySelector("#haveRead").checked;
  document.querySelector("#haveRead").checked = false;
  addBookToLibrary(inputTitle, inputImage, inputAuthor, inputPages, inputRead);
});

myLibrary.forEach((book) => {
  displayBook(book);
});
