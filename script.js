const bookList = document.querySelector(".books")
const newBookBtn = document.querySelector("button");

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

function newBook(){
    let titleForm = document.createElement("input");
    let authorForm = document.createElement("input");
    let statusSelect = document.createElement("select");
    let optRead = document.createElement("option");
    let optToRead = document.createElement("option");
    

    setAttr(titleForm, {"name":"title-form", "placeholder": "Title"});
    setAttr(authorForm, {"name":"author-form", "placeholder": "Author"});
    setAttr(statusSelect, {"name": "status"});
    setAttr(optRead, {"value": "read"})
    setAttr(optToRead, {"value": "To-read"})
   
    optRead.text = "Read";
    optToRead.text = "To Read";
    statusSelect.options.add(optRead, 0);
    statusSelect.options.add(optToRead, 1);
   
    document.querySelector(".input-section").append(titleForm, authorForm, statusSelect);
    newBookBtn.removeEventListener("click", newBook)
}

function setAttr(elem, attrs){
    for (let prop in attrs){
        elem.setAttribute(prop,attrs[prop]);
    }
}


newBookBtn.addEventListener("click", newBook)

render(myLibrary)


