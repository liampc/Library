const bookList = document.querySelector(".books")
const newBookBtn = document.querySelector("button");
const titleForm = document.createElement("input");
const authorForm = document.createElement("input");
const statusSelect = document.createElement("select");
const optRead = document.createElement("option");
const optToRead = document.createElement("option");

let myLibrary = ["BOOK1", "book2", "book3"];

function Book(title,author,status){
    this.title = title,
    this.author = author,
    this.status = status
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


