const users = [ 
  {
    name: 'John',
    lastName: 'Doe',
    questions: [''],
  }
];

const rightContainer = document.getElementById('right-container');
const postContent = document.getElementById('post-content');
const askQtnContainer = document.getElementById('ask-qtn-container');
const postQtnBtn = document.getElementById('post-qtn-btn');
const postQtnEl = document.getElementById('post-qtn-form');
const userAnswersContainer = document.getElementById('user-answers-container');
const userQtnEl = document.getElementById('user-postedQtn-text');


postQtnBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  askQuestion()
});

        // Ask Question func
function askQuestion(){
  const question = postQtnEl.value;
  if(question === '') {
    showError();
  }else{
  askQtnContainer.classList.add('hide');
  userAnswersContainer.classList.remove('hide');
  userQtnEl.innerHTML = question;
  }
}

          // Error func
function showError(){
  const divError = document.createElement('div');
  divError.className = 'error'; 
  const askQtnCont = document.querySelector('.ask-qtn-container');
  const postForm = document.querySelector('.post-form');
  divError.appendChild(document.createTextNode('Please enter a question'));
  askQtnCont.insertBefore(divError, postForm);
  setTimeout(() => {divError.remove()}, 2000);
}


