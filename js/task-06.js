let inputValid = document.querySelector('#validation-input');
inputValid.addEventListener('blur', onInputBlur);
const maxLength = inputValid.getAttribute("data-length");

function onInputBlur() {
    if (inputValid.value.length == maxLength) {
        inputValid.classList.remove("invalid")
        inputValid.classList.add("valid")   
    }
    else {
        inputValid.classList.remove("valid")
        inputValid.classList.add("invalid")
    }
   
}