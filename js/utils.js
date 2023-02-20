var authForm = document.getElementById('authForm');
var authFormTitle = document.getElementById('authFormTitle');
var register = document.getElementById('register');
var access = document.getElementById('access');


function toggleToRegister() {
    authForm.submitAuthForm.innerHTML = 'Cadastrar conta';
    authFormTitle.innerHTML = 'Cadastre sua conta';

    hideItem(register);
    showItem(access);
}

function toggleToAccess() {
    authForm.submitAuthForm.innerHTML = 'Acessar';
    authFormTitle.innerHTML = 'Acesse o Sistema';

    hideItem(access);
    showItem(register);
}

function showItem(element){

    element.style.display = 'block';
}

function hideItem(element){
    
    element.style.display = 'none';
}


