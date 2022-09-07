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
const userAnswerInput = document.getElementById('user-addAnswer-input'); 
const userAnswersList = document.getElementById('user-answers-list');
const userAnswerContent = document.getElementById('user-answer-content');
const addAnswerBtn = document.getElementById('answer-qtn-btn');

       // Post Question Eventlistener
postQtnBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  askQuestion()
});

       // Add Answer Eventlistener
addAnswerBtn.addEventListener('click', (e) => {
  e.preventDefault(); 

  addAnswers()
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
  // const askQtnCont = document.querySelector('.ask-qtn-container');
  const postForm = document.querySelector('.post-form');
  divError.appendChild(document.createTextNode('Please enter a question'));
  askQtnContainer.insertBefore(divError, postForm);
  setTimeout(() => {divError.remove()}, 2000);
}


// Add Answer func

function addAnswers(answer) {
  let answerText = userAnswerInput.value;

  if(answerText === '') {
    showAnswerError();
  }else{
    const answerEl = document.createElement('li');
    answerEl.classList.add('user-answer-content');
    const paragraph = document.createElement('p');
    paragraph.classList.add('user-answer-text');
    paragraph.innerText = answerText;
    const pickAnswerBtn = document.createElement('input');
    pickAnswerBtn.value = ' pick answer';
    pickAnswerBtn.classList.add('user-pickAnswer-btn')
    answerEl.appendChild(paragraph);
    answerEl.appendChild(pickAnswerBtn);
    userAnswersList.appendChild(answerEl);
    
    
    console.log(answerText);
  }
  userAnswerInput.value = '';
}


function showAnswerError(){
  const answerErrDiv = document.createElement('div');
  answerErrDiv.className = 'error'
  const  userAnswersTitle = document.getElementById('user-answers-title');
  answerErrDiv.appendChild(document.createTextNode('Please enter a valid answer'));
  userAnswersContainer.insertBefore(answerErrDiv, userAnswersTitle)
  setTimeout(() => {answerErrDiv.remove()}, 2000);
}