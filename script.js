const inputTitle = document.querySelector("#input-title")
const inputAuthor = document.querySelector("#input-author")
const saveBtn = document.querySelector("#save-btn")
const selectStatus = document.querySelector("#status")


let myLibrary = [];

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
}

saveBtn.addEventListener("click", addBooktoLibrary)