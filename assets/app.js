let loginButton = document.querySelector('.loginButton');
let signUpButton = document.querySelector('.signUpButton');
let login = document.getElementById('login');
let signUp = document.getElementById('sign-up');



login.addEventListener('click', ()=>{
    loginButton.classList.add('displayButton');
    signUpButton.classList.remove('displayButton');
});
signUp.addEventListener('click', ()=>{
    signUpButton.classList.add('displayButton');
    loginButton.classList.remove('displayButton');
});

