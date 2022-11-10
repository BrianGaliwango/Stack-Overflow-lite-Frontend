const menuBtn = document.getElementById('menu-button');
const leftContainer = document.getElementById('left-container');
const askQtnContainer = document.getElementById('ask-qtn-container');
const postTitleInput = document.getElementById('post-title-form');
const postQtnInput = document.getElementById('post-qtn-form');
const submitQtnsBtn = document.getElementById('submit-qtn-btn');
const userAllQtnsList = document.getElementById('user-allQtns-list');

let questions = [];

// Show sidebar eventListener
menuBtn.addEventListener('click', (e) => {
  leftContainer.classList.toggle('hide')
});


// Hide sidebar eventListener
leftContainer.addEventListener('mouseleave', (e) => {
  leftContainer.classList.add('hide')
});


//  Ask question eventListener
submitQtnsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  postQuestion()
});


//Post question fuc
function postQuestion(){
  let title = postTitleInput.value;
  let questionBody = postQtnInput.value;

  if(title !== '' && questionBody !== ''){

    questions.push({questionBody, title});
    showSuccess();
  }else{
    showError()
  }
  postTitleInput.value = '';
  postQtnInput.value = '';
}


// Show error func
function showSuccess(){
  const divError = document.createElement('div');
  divError.className = 'success';
  const postForm = document.querySelector('.post-form');
  divError.appendChild(document.createTextNode('Question posted successfully'));
  askQtnContainer.insertBefore(divError, postForm);
  setTimeout(() => {divError.remove()}, 2000);
}


// Show error func
function showError(){
  const divError = document.createElement('div');
  divError.className = 'error';
  const postForm = document.querySelector('.post-form');
  divError.appendChild(document.createTextNode('Please fill in all fields'));
  askQtnContainer.insertBefore(divError, postForm);
  setTimeout(() => {divError.remove()}, 2000);
}
