const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const list = document.querySelector('#ingredients');
const listIngredients = ingredients.map(element => {
    const item = document.createElement("li")
    item.textContent = element
    return item
  });

  list.append(...listIngredients);