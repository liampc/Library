const inputTitle = document.querySelector("#input-title")
const inputAuthor = document.querySelector("#input-author")
const saveBtn = document.querySelector("#save-btn")
const selectStatus = document.querySelector("#status")


let myLibrary = []

function Book(title,author,status){
    this.title = title,
    this.author = author,
    this.status = status
}


function addBooktoLibrary(){
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let status = selectStatus.options[selectStatus.selectedIndex].value
    let newBook = new Book(title,author,status)
    myLibrary.push(newBook)
    console.log(myLibrary)
    document.querySelector("form").reset();
}

let harry = new Book("Harry Potter", "J.K Rowling", "To-Read")
let harry2 = new Book("Harry Potter 2 ", "J.K Rowling", "To-Read")
myLibrary.push(harry, harry2)

function render(){
   let books = myLibrary.map(book => {
       return `${book.title} by ${book.author} status: ${book.status}`
   })
   console.log(books)
}

render();

saveBtn.addEventListener("click", addBooktoLibrary)