const formLogin = document.querySelector(".form-login");
const inputUsername = document.querySelector(".inputUsername");
const errorUsername = document.querySelector(".errorUsername");
const inputPassword = document.querySelector(".inputPassword");
const errorPassword = document.querySelector(".errorPassword");
const requiredField = "Campo obligatorio";

// USERNAME
inputUsername.addEventListener("focus", () => {
    errorUsername.innerText = "Ingresa el nombre de usuario con el que te registraste";
});

inputUsername.addEventListener("change", () => {
    if (inputUsername.value == "") {
        errorUsername.innerText = requiredField;
    } else {
        errorUsername.innerText = "";
    }
});

// PASSWORD
inputPassword.addEventListener("focus", () => {
    errorPassword.innerText = "Ingresa tu contraseña";
});

inputPassword.addEventListener("change", () => {
    if (inputPassword.value == "") {
        errorPassword.innerText = requiredField;
    } else {
        errorPassword.innerText = "";
    }
});

// SUBMIT
formLogin.addEventListener("submit", (e) => {
    if (inputUsername.value == "") {
        errorUsername.innerText = requiredField;
        e.preventDefault();
    }

    if (inputPassword.value == "") {
        errorPassword.innerText = requiredField;
        e.preventDefault();
    }
});