const listEl = document.querySelectorAll('#categories .item')

console.dir(`Number of categories ${listEl.length}`)

listEl.forEach((category) => {
  const titlEl = category.querySelector('h2').textContent;
  const listEl = category.querySelectorAll('li').length;

  console.dir(`Category: ${titlEl}`);
  console.dir(`Elements: ${listEl}`);

})
