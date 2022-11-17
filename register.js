const registerContainer = document.getElementById('register-container');
const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const registerBtn = document.getElementById('register-btn');
const registerSuccessContainer = document.getElementById('register-success-container');

let users = [];

// Register user eventListener
registerBtn.addEventListener('click', (e) => {
  e.preventDefault()
    registerUser()
});


// Register user func
function registerUser(){
  if(nameInput.value !== '' && emailInput.value !== ''  && usernameInput.value !== '' && passwordInput.value !== ''){

    // Get input values
      first_name = nameInput.value;
      email = emailInput.value;
      username = usernameInput.value;
      password = passwordInput.value;
      let user = ({first_name, email, username, password})
      users.push({user})
    
      // Change view
      registerContainer.classList.add('hide')
      registerSuccessContainer.classList.remove('hide')
 
      setTimeout(() => { window.location.href = 'login.html' }, 3000);
      console.log({user})

      showRegistryError()

  }else{
    showRegistryError()
  }
  nameInput.value = ''
  emailInput.value = ''
  usernameInput.value = ''
  passwordInput.value = ''
}

function showRegistryError(){
  const divRegistryError = document.createElement('div');
  divRegistryError.className = 'registerError';
  const registerForm = document.querySelector('.register-form');
  divRegistryError.appendChild(document.createTextNode("Please fill in all fields"));
  registerContainer.insertBefore(divRegistryError, registerForm);
  setTimeout(() => {divRegistryError.remove()}, 1500);
}