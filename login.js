const loginContainer = document.getElementById('login-container');
const loginBtn = document.getElementById('login-btn')
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginSuccessContainer = document.getElementById('login-success-container');


// Login eventListener
loginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  login()
});


//  Login func
function login(){
  if(usernameInput.value !== '' && passwordInput.value !== ''){
        username = usernameInput.value
        password = passwordInput.value

        let loggedInUser = ({username, password})

        loginContainer.classList.add('hide')
        loginSuccessContainer.classList.remove('hide')
        console.log(loggedInUser)
  }else{
    showLoginError()
  }
  usernameInput.value = ''
  passwordInput.value = ''
}


// Show error func
function showRegistrySuccess(){
  const divRegistrySuccess = document.createElement('div');
  divRegistrySuccess.className = 'registerSuccess';
  const registerForm = document.querySelector('.register-form');
  divRegistrySuccess.appendChild(document.createTextNode('Successfully registered'))
  registerContainer.insertBefore(divRegistrySuccess, registerForm);
  setTimeout(() => {divRegistrySuccess.remove()}, 1500);
}


// Login error func
function showLoginError(){
  const divLoginError = document.createElement('div');
  divLoginError.className = 'login-error';
  const loginForm = document.querySelector('.login-form');
  divLoginError.appendChild(document.createTextNode("Please fill in all fields"));
  loginContainer.insertBefore(divLoginError, loginForm);
  setTimeout(() => {divLoginError.remove()}, 1500);
}