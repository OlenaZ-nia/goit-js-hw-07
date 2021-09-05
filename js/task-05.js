let input = document.querySelector('#name-input');
input.addEventListener('input', onInputChange);
let span = document.querySelector('#name-output');

function onInputChange(event) {

    if (input.value !== "") {
span.textContent = event.currentTarget.value
    }
    else {
span.textContent = 'незнакомец';
    } 
}

