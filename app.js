const myForm = document.querySelector('.myform')
const first = document.querySelector('.first').value
const last = document.querySelector('.last').value
const email = document.querySelector('.email').value
const pass = document.querySelector('.pass').value
let submit = document.querySelector('.submit')

const msg1 = document.querySelector('.msg1')
const msg2 = document.querySelector('.msg2')
const msg3 = document.querySelector('.msg3')
const msg4 = document.querySelector('.msg4')
let a = document.querySelectorAll('.a')

submit.addEventListener('click', onSubmit);
function onSubmit(e){
    e.preventDefault();

    
    if (first === ''){
        msg1.textContent = 'First name can not be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }
    if (last === ''){
        msg2.textContent = 'Last name can not be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }
    if (email == ',/<>!_+='){
        msg3.textContent = 'Email not be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }
    if (pass === ''){
        msg4.textContent = 'Password can not be empty'
        a.textContent = '<img src="./images/icon-error.svg" alt="">'
    }
}