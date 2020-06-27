const inputTitle = document.querySelector("#input-title")
const inputAuthor = document.querySelector("#input-author")
const saveBtn = document.querySelector("#save-btn")
const selectStatus = document.querySelector("#status")
const newBookBtn = document.querySelector("#new-btn")



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
    render()
    resetForms();
    setBookIndex()
}

function resetForms(){
    document.querySelector("form").reset();
    document.querySelector(".input-forms").classList.add("hidden")
}

let harry = new Book("Harry Potter", "J.K Rowling", "To-Read")
let harry2 = new Book("Harry Potter 2 ", "J.K Rowling", "Read")
myLibrary.push(harry, harry2)
render();

function render(){
   let books = myLibrary.map(book => {
       return `
       <li class="book-card">
                    <span> ${book.title} </span>
                    <span>${book.author}</span>
                    <button class="status-btn">${book.status}</button>
                    <button class="remove-btn"> x </button>
                </li>
       `
   }).join("")
   document.querySelector(".book-list").innerHTML = books
   setBookIndex();
}


function showForms(){
    document.querySelector(".input-forms").classList.remove("hidden")
}

function setBookIndex(){
   let books = document.querySelectorAll(".book-card")
   for (let i = 0; i < myLibrary.length; i++){
       books[i].setAttribute("data-index", i)
    }
    let section = document.querySelector(".main-section")
    section.onclick = function(event){
    let btn = event.target
    
    if (btn.className == "remove-btn"){
        removeBook(btn)
    }
   
    if (btn.className == "status-btn"){
        changeStatus(btn)
    }

    }
}



function removeBook(e){
    let card = e.closest(".book-card")
    let index = card.getAttribute("data-index")
    card.remove()
    myLibrary.splice(index,1);
    render();

}

function changeStatus(e){
    let card = e.closest(".book-card")
    let index = card.getAttribute("data-index")
    if (myLibrary[index].status == "Read"){
        myLibrary[index].status = "To-Read"
    }
    else {
        myLibrary[index].status = "Read"
    }
    render();
}



newBookBtn.addEventListener("click", showForms)
saveBtn.addEventListener("click", addBooktoLibrary)
