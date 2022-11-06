let myForm = document.querySelector('.myform')
let first = document.querySelector('.first').value
let last = document.querySelector('.last').value
let email = document.querySelector('.email').value
let pass = document.querySelector('.pass').value
let submit = document.querySelector('.submit')

let msg1 = document.querySelector('.msg1')
let msg2 = document.querySelector('.msg2')
let msg3 = document.querySelector('.msg3')
let msg4 = document.querySelector('.msg4')
let a = document.querySelectorAll('.a')

submit.addEventListener('click', onSubmit);
function onSubmit(e){
     e.preventDefault();

    
    if (first === ''){
        msg1.textContent = 'First name cannot be empty'
        a.innerHTML = '<img src="./images/icon-error.svg" alt="">'
    }

    if (last === ''){
        msg2.textContent = 'Last name cannot be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }

    if (email == ',/<>!_+='){
        msg3.textContent = 'Email cannot be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }
    
    if (pass === ''){
        // msg4.textContent = 'Password cannot be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }

    else {
        alert('Welcome to the club')
    }
}