const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.querySelector('#ingredients');
const listEl = ingredients.map((ingredient) => {
  const listEl = document.createElement('li')
  
  listEl.classList.add('item');
  listEl.textContent = ingredient;
  container.append(listEl)
});
