
const addBtn = document.querySelector('#new-btn')
const overlay = document.querySelector('.overlay')

addBtn.addEventListener('click', function() {
    console.log('new-btn clicked')

    if (overlay.classList.contains('fade-in')){
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
       
    } else {
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
       
    }

});



console.log('Hello')