
const boxEl = document.querySelector('body')
const spanColor = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', () => {
 const randomColor = getRandomHexColor();

 boxEl.style.background = randomColor;
 spanColor.textContent = randomColor;
})
function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
         .toString(16)
       .padStart(6, 0)}`;
        }