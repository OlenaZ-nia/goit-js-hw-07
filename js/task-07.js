const controlFS = document.getElementById("font-size-control")
const text = document.getElementById('text');
controlFS.addEventListener('input', onInputChange);

function onInputChange(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}