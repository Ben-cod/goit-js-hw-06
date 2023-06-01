
const inputEl = document.querySelector('input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const bxesEl = document.querySelector('#boxes')
btnCreate.addEventListener('click', () => {
  createBoxes(input.value);
})
btnDestroy.addEventListener('click', () => {
  destroyBoxes()
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
