const libraryContent = document.querySelector(".library-content");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  newBook();
});

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.page = pages;
  this.read = read;
}
const libro = new Book("libro", "maccio", 54, "READ");
const libro2 = new Book("librazz", "macciolo", 534, "READ");
let myLibrary = [libro, libro2];

console.log(libro, myLibrary[0].name);

function displayLibrary(library) {
  libraryContent.innerHTML = "";
  library.map((ele, i) => {
    for (prop in ele) {
      let p = document.createElement("p");
      libraryContent.appendChild(p);
      p.innerHTML = ele[prop];
    }
    let delButton = document.createElement("button");
    delButton.className = "delete-button";
    delButton.innerHTML = "Delete";
    delButton.setAttribute("counter", i);
    delButton.addEventListener("click", deleteBook.bind(this, i));
    libraryContent.appendChild(delButton);
  });
}

function newBook() {
  let newName = document.querySelector("#input-bookname").value;
  let newAuthor = document.querySelector("#input-author").value;
  let newPages = document.querySelector("#input-pages").value;
  //   let inputSelect = document.querySelector('#input-select');
  //   let newStatus = inputSelect.options[inputSelect.selectedIndex].text;
  let newStatus = document.querySelector("#input-select").value;
  const book = new Book(newName, newAuthor, newPages, newStatus);
  myLibrary.push(book);
  displayLibrary(myLibrary);
}

function deleteBook(num) {
  console.log("yo", num);
  myLibrary.splice(num, 1);
  displayLibrary(myLibrary);
}

displayLibrary(myLibrary);
