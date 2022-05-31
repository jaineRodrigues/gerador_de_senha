let sliderElement = document.querySelector("#slider");//pegar o elemento slider pelo ID
let buttonElement = document.querySelector("#button"); //pegar o elemento button pelo ID
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

//caracteres que poderao conter na senha
let charset = "!@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let nova_senha = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
    sizePassword.innerHTML = this.value;//pega alterações
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword() {
    alert("Sua senha foi copiada com sucesso!")
    navigator.clipboard.writeText(nova_senha);
}