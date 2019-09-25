let login = document.querySelectorAll('#Login');
let signUp = document.querySelectorAll('#signUp');



login.addEventListener('click', () => {
    login.classList.add('.displayButton');
    signUp.classList.remove('.displayButton'); 
});

signUp.addEventListener('click', () => {
    signUp.classList.add('.displayButton');
    login.classList.remove('.displayButton'); 
});





