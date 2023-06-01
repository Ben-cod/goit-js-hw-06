
const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', onForm)
function onForm(event){
    event.preventDefault()
    

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();
    if (!email || !password) {
        alert('Будь ласка, заповніть всі поля');
        return;
      }
    const formData = {
        email,
        password,
    }
    formEl.reset();
}
