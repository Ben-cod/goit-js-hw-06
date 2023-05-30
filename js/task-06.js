
const inputElement = document.querySelector('#validation-input')
const inputlength = inputElement.getAttribute('data-length')

inputElement.addEventListener('blur', function(){
    const inputValue = inputElement.value;
    if (inputValue.length === Number(inputlength)){
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid')
    }
    else{
        inputElement.classList.remove('valid')
        inputElement.classList.add('invalid')
    }
})
