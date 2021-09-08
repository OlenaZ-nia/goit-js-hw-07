const boxSize = 30;
const createBoxes = (amount) => {
    for (let i = 0; i < amount; i += 1) {
        const boxes = document.querySelector("#boxes");
        const item = document.createElement("div");
        boxes.append(item);
        let newBoxSize = boxSize + i*10;
        item.style.height = newBoxSize + "px";
        item.style.width = newBoxSize + "px";
        item.style.backgroundColor = `rgb(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)})`;
    };
}

const destroyBoxes = () => {
    const boxes = document.querySelector("#boxes");
    const item = document.querySelectorAll("#boxes div");
    
    for (let i = 0; i < item.length; i += 1) { 
    const item = boxes.querySelector("div");    
    boxes.removeChild(item); 
    }
}

const input = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')

renderBtn.addEventListener('click', () => {
    createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
    destroyBoxes();
    document.querySelector("#controls input").value = "";
});
// destroyBtn.onclick = function () {
//     document.querySelector("#controls input").value = "";
// };

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}




