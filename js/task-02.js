const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1)method
  // const container = document.querySelector('#ingredients');
  // const li1 = document.createElement('li')
  // li1.classList.add('item');
  // li1.textContent = 'Potatoes';

  // const li2 = document.createElement('li')
  // li2.classList.add('item');
  // li2.textContent = 'Mushrooms';

  // const li3 = document.createElement('li')
  // li3.classList.add('item');
  // li3.textContent = 'Garlic';

  // const li4 = document.createElement('li')
  // li4.classList.add('item');
  // li4.textContent = 'Tomatos';

  // const li5 = document.createElement('li')
  // li5.classList.add('item');
  // li5.textContent = 'Herbs';

  // const li6 = document.createElement('li')
  // li6.classList.add('item');
  // li6.textContent = 'Condiments';

  // container.append(li1,li2,li3,li4,li5,li6);


// 2)method

const container = document.querySelector('#ingredients');
 const itemRef = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = ingredient;
  return itemEl
 })
 container.append(...itemRef)