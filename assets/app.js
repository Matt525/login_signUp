let login = document.getElementById('Login');
let signUp = document.getElementById('signUp')



login.addEventListener('click', () => {
    login.classList.add('.displayButton');
    signUp.classList.remove('.displayButton'); 
});

signUp.addEventListener('click', () => {
    signUp.classList.add('.displayButton');
    login.classList.remove('.displayButton'); 
});





