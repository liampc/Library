const inputTitle = document.querySelector("#input-title")
const inputAuthor = document.querySelector("#input-author")
const saveBtn = document.querySelector("#save-btn")


let myLibrary = [];

function Book(title,author,status){
    this.title = title,
    this.author = author,
    this.status = status
}



function addBooktoLibrary(){
    let newBook = new Book("Harry Potter","J.K Rowling", "Read")
    myLibrary.push(newBook)
    console.log(myLibrary)
}

addBooktoLibrary.prototype = Object.create(Book.prototype);

