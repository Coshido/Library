const libraryContent = document.querySelector(".library-content");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  newBook();
});

class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }
  deleteBook(counter) {
    this.books.splice(counter, 1);
    this.displayLibrary();
  }
  displayLibrary() {
    libraryContent.innerHTML = "";
    this.books.map((ele, i) => {
      for (const key of Object.keys(ele)) {
        let p = document.createElement("p");
        libraryContent.appendChild(p);
        p.innerHTML = ele[key];
      }
      let delButton = document.createElement("button");
      delButton.className = "delete-button";
      delButton.innerHTML = "Delete";
      delButton.setAttribute("counter", i);
      delButton.addEventListener("click", this.deleteBook.bind(this, i));
      libraryContent.appendChild(delButton);
    });
  }
}

function newBook() {
  let newName = document.querySelector("#input-bookname").value;
  let newAuthor = document.querySelector("#input-author").value;
  let newPages = document.querySelector("#input-pages").value;
  let newStatus = document.querySelector("#input-select").value;
  const book = new Book(newName, newAuthor, newPages, newStatus);
  library.addBook(book);
  library.displayLibrary();
}

const libro = new Book("libro", "maccio", 54, "READ");
const libro2 = new Book("librazz", "macciolo", 534, "READ");
const library = new Library();
library.addBook(libro);
library.addBook(libro2);
library.displayLibrary();
console.log(library.books);
