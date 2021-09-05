const categories = document.querySelector('#categories');
const message = `В списке ${categories.children.length} категории.`;
console.log(message)

const title = document.querySelectorAll('.item');
title.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}, Количество элементов: ${elem.lastElementChild.children.length} `)
});

