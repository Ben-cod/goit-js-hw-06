const inputElement = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')
//
inputElement.addEventListener('input', function(){
    const fontSize = inputElement.value + 'px';
    spanText.style.fontSize = fontSize;
})
