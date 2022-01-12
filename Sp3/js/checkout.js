// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone'); 
var errorRequired = document.getElementById('errorRequired');
var errorMail = document.getElementById('errorMail');

//obtenemos todos los elementos del formulario
const forms = document.querySelectorAll('form');
const form = forms[0];
var formOk = false;

//RegExp
const emailPattern = new RegExp(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/);
const alfaPattern = new RegExp('^[A-Z]+$', 'i');
const phonePattern = new RegExp(/^-?\d*[.,]?\d{0,2}$/);
const passwordPattern = new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/);

// funcion que comprueba si el campo tiene mas de tres caracteres
const maxLength = (value) => value.length <= 2;

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    formOk = true;

    let wrongFields = []; // array almacena errores

    [...form.elements].forEach((input) => {


        if (input.name === 'name'){ // validamos campo name 
            input.addEventListener("blur", validate);
            if (alfaPattern.test(input.value) && !maxLength(input.value)){
                errorName.style.display = 'none';
                input.classList.remove("error");
            } else {
                errorName.style.display = 'block';
                errorRequired.style.display = 'block';
                input.classList.add("error");
                wrongFields.push(input.name); 
                formOk = false;
            }
        }

        if (input.name ==='lastName'){ // validamos campo lastname
            input.addEventListener("blur", validate);
            if (alfaPattern.test(input.value) && !maxLength(input.value)){
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                errorRequired.style.display = 'block';
                wrongFields.push(input.name);
                formOk = false;
            }
        }

        if (input.name ==='email'){  // validamos campo email
            input.addEventListener("blur", validate);
            if (emailPattern.test(input.value) && !maxLength(input.value)){
                errorMail.style.display = 'none';
                input.classList.remove("error");
            } else {
                errorMail.style.display = 'block';
                errorRequired.style.display = 'block';
                input.classList.add("error");
                wrongFields.push(input.name);
                formOk = false;
            }
        }

        if (input.name ==='password') { // validamos campo password
            input.addEventListener("blur", validate);
            if (passwordPattern.test(input.value) && !maxLength(input.value)){
                errorPassword.style.display = 'none';
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                errorRequired.style.display = 'block';
                errorPassword.style.display = 'block';
                wrongFields.push(input.name);
                formOk = false;
            }
        }

        if (input.name ==='address') { // validamos campo address
            input.addEventListener("blur", validate);
            if (!maxLength(input.value)){
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                errorRequired.style.display = 'block';
                wrongFields.push(input.name);
                formOk = false;
            }
        }  

        if (input.name ==='phone') { // validamos campo phone
            input.addEventListener("blur", validate);
            if (phonePattern.test(input.value) && !maxLength(input.value)){
                errorPhone.style.display = 'none';
                input.classList.remove("error");
            } else {
                errorPhone.style.display = 'block';
                errorRequired.style.display = 'block';
                input.classList.add("error");
                wrongFields.push(input.name);
                formOk = false;
            }
        }
    });

    if(wrongFields.length === 0){ // revisamos que no hay errores y quitamos mensaje de campo requerido
        errorRequired.style.display = 'none';
    } else {
        errorRequired.style.display = 'block';
        formOk = false; 
    }

    return formOk;
    
}