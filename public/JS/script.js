const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const form = document.getElementById('form');
const errorMsg = document.getElementById('error-message');

let errors = [];

form.addEventListener('submit', (e) => {

    errors = formValidation(usernameInput.value, passwordInput.value);

    if(errors.length > 0){
        errorMsg.innerText = errors.join('. ');
        e.preventDefault();
    }
})

function formValidation(username, password){
    let errors = [];

    if(username === '' || username == null){
        errors.push('Username is required');
        usernameInput.parentElement.classList.add('incorrect');
    }

    if(password === '' || password == null){
        errors.push('Password is required');
        passwordInput.parentElement.classList.add('incorrect');
    }

    return errors;
}

const allInputs = [usernameInput, passwordInput];

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
            errorMsg.innerText = '';
        }
    })
})

function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}