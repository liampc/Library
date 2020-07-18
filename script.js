
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

function showForms(){
    document.querySelector(".input-forms").classList.remove("hidden")
}

function addBooktoLibrary(){
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let status = selectStatus.options[selectStatus.selectedIndex].value
    let newBook = new Book(title,author,status)
    myLibrary.push(newBook)
    render()
    resetForms();
    setBookIndex()
}

function resetForms(){
    document.querySelector("form").reset();
    document.querySelector(".input-forms").classList.add("hidden")
}


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
    saveToStorage()
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


//local Storage

function saveToStorage(){
    let bookStrings = JSON.stringify(myLibrary)
    localStorage.setItem("myLibrary", bookStrings);
}


function loadStorage(){
    let getBooks = JSON.parse(localStorage.getItem("myLibrary"));
    myLibrary = getBooks;
    render()
}




newBookBtn.addEventListener("click", showForms)
saveBtn.addEventListener("click", addBooktoLibrary)
saveBtn.addEventListener("click", saveToStorage)
window.addEventListener("load", loadStorage)

//initial books 

let book1 = new Book("One Hundred Years of Solitude", "Gabriel Garcia Marquez", "Read")
let book2 = new Book("Kafka on the Shore", "Haruki Murakami", "Read")
 myLibrary.push(book1, book2)
render();






