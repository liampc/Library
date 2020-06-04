const bookList = document.querySelector(".books")

let myLibrary = [];

function Book(){

}


function addBooktoLibrary(book){
    book = prompt("Give me a book")
    myLibrary.push(book)
}

addBooktoLibrary.prototype = Object.create(Book.prototype);

console.log(myLibrary);