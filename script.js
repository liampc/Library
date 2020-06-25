


const bookList = document.querySelector(".books")

let myLibrary = [];

function Book(){
    
}

addBooktoLibrary.prototype = Object.create(Book.prototype);

function addBooktoLibrary(title,author,status){
    this.title = title,
    this.author = author,
    this.status = status
    myLibrary.push(title,author,status)
}



let newbook = new addBooktoLibrary("Harry Potter", "J.K Rowling", "Read");
let secBook = new addBooktoLibrary("Pride and Prejudice", "Jane Austed", "Read");


console.log(secBook.title);