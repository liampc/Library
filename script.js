const bookList = document.querySelector(".books")

let myLibrary = ["BOOK1", "book2", "book3"];

function Book(){

}


function addBooktoLibrary(book){
    this.book = book
    myLibrary.push(this.book)
}

addBooktoLibrary.prototype = Object.create(Book.prototype);

console.log(myLibrary);

function render(arr){
    for (let book of arr){
        let div = document.createElement("div");
        let text = document.createTextNode(book)
        div.appendChild(text);
        div.classList.add("book-card");
        document.querySelector(".books-section").appendChild(div)

    }
}

render(myLibrary)

