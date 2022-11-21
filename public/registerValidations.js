const formRegister = document.querySelector(".form-register");
const inputName = document.querySelector(".inputName");
const errorName = document.querySelector(".errorName");
const inputDate = document.querySelector(".inputDate");
const errorDate = document.querySelector(".errorDate");
const inputAddress = document.querySelector(".inputAddress");
const errorAddress = document.querySelector(".errorAddress");
const inputPassword = document.querySelector(".inputPassword");
const errorPassword = document.querySelector(".errorPassword");
const inputConfirmPassword = document.querySelector(".inputConfirmPassword");
const errorConfirmPassword = document.querySelector(".errorConfirmPassword");
const requiredField = "Campo obligatorio";

// NAME
inputName.addEventListener("focus", () => {
    errorName.innerText = "Ingresa tu nombre y apellido";
    
});

inputName.addEventListener("change", () => {
    if (inputName.value == "") {
        errorName.innerText = requiredField;
    } else {
        errorName.innerText = "";
    }
});

// DATE
inputDate.addEventListener("focus", () => {
    errorDate.innerText = "Ingresa una fecha válida";
});

inputDate.addEventListener("change", () => {
    if (inputDate.value == "") {
        errorDate.innerText = requiredField;
    } else {
        errorDate.innerText = "";
    }
});

// ADDRESS
inputAddress.addEventListener("focus", () => {
    errorAddress.innerText = "Ingresa tu domicilio";
});

inputAddress.addEventListener("change", () => {
    if (inputAddress.value == "") {
        errorAddress.innerText = requiredField;
    } else {
        errorAddress.innerText = "";
    }
});

// PASSWORD
inputPassword.addEventListener("focus", () => {
    errorPassword.innerText = "Ingresa tu contraseña";
});

inputPassword.addEventListener("change", () => {
    const passwordLength = inputPassword.value.length;
    if (passwordLength < 8) {
        errorPassword.innerText = "La contraseña debe tener al menos 8 caracteres";
    } else if (inputPassword.value == "") {
        errorPassword.innerText = requiredField;
    } else {
        errorPassword.innerText = "";
    }
});

// CONFIRM PASSWORD
inputConfirmPassword.addEventListener("focus", () => {
    errorConfirmPassword.innerText = "Ingresa tu contraseña";
});

inputConfirmPassword.addEventListener("change", () => {
    const pass = inputPassword.value;
    if (pass !== inputConfirmPassword.value) {
        errorConfirmPassword.innerText = "Las contraseñas no coinciden";
    } else if (inputConfirmPassword.value == "") {
        errorConfirmPassword.innerText = requiredField;
    } else {
        errorConfirmPassword.innerText = "";
    }
});

// SUBMIT
formRegister.addEventListener("submit", (e) => {
    if (inputName.value == "") {
        errorName.innerText = requiredField;
        e.preventDefault();
    }

    if (inputDate.value == "") {
        errorDate.innerText = requiredField;
        e.preventDefault();
    }

    if (inputAddress.value == "") {
        errorAddress.innerText = requiredField;
        e.preventDefault();
    }

    if (inputPassword.value == "") {
        errorPassword.innerText = requiredField;
        e.preventDefault();
    }

    if (inputConfirmPassword.value == "") {
        errorConfirmPassword.innerText = requiredField;
        e.preventDefault();
    }
});