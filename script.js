const bookList = document.querySelector(".books")

let myLibrary = [];

function Book(){

}


function addBooktoLibrary(book){
    this.book = book
    myLibrary.push(this.book)
}

addBooktoLibrary.prototype = Object.create(Book.prototype);

console.log(myLibrary);