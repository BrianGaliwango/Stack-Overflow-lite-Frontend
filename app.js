const users = [ 
  {
    name: 'John',
    lastName: 'Doe',
    questions: [
      {
        question: 'What do you think you are doing today  ?',
        answer: 'Am free today'
      }
    ],
  }
];

const rightContainer = document.getElementById('right-container');
const contentBtns = document.getElementById('content-btns');
const postContent = document.getElementById('post-content');
const askQtnContainer = document.getElementById('ask-qtn-container');
const userRecentQtnContainer = document.getElementById('user-recentQtns-content-container');
const userAllQtnsContainer = document.getElementById('user-allQtns-content-container');
const postQtnBtn = document.getElementById('post-qtn-btn');
const postQtnInput = document.getElementById('post-qtn-form');
const userAnswersContainer = document.getElementById('user-answers-container');
const userRecQtnCont = document.getElementById('user-recentQtns-container');
const userRecAnswers = document.getElementById('user-recentAnswers-container');
const userRecQtnsContent = document.getElementById('user-recentQtns-content')
const userQtnEl = document.getElementById('user-postedQtn-text');
const userAnswerInput = document.getElementById('user-addAnswer-input'); 
const userPostedBackBtn = document.getElementById('user-postedQtns-back-btn');
const userRecQtnPostedBtn = document.getElementById('user-postedRecentQtns-back-btn');
const userAnswersList = document.getElementById('user-answers-list');
const userRecentQtnsList = document.getElementById('user-recentQtns-list');
const userAnswerContent = document.getElementById('user-answer-content');
const addAnswerBtn = document.getElementById('answer-qtn-btn');
const userPickAnswerBtn = document.getElementById('user-pickAnswer-btn');
const userRecDisplay = document.getElementById('user-recentQtns-display');

const pickAnswerBtn = document.createElement('input');
pickAnswerBtn.type = 'button';
pickAnswerBtn.value = 'pick answer';
pickAnswerBtn.className = 'user-pickAnswer-btn'
pickAnswerBtn.id = 'user-pickAnswer-btn';

// Change categories eventListener
contentBtns.addEventListener('click', (e) =>{
  if(e.target.classList.contains('post-qtn-btn')){
    rightContainer.innerHTML = '';
    rightContainer.appendChild(postContent);
  }else if(e.target.classList.contains('recent-qtns-btn')){
    rightContainer.innerHTML = '';
    userRecentQtnContainer.classList.remove('hide');
    rightContainer.appendChild(userRecentQtnContainer); 
  }else if(e.target.classList.contains('qtns-answers-btn')){
    rightContainer.innerHTML = ''; 
    userAllQtnsContainer.classList.remove('hide');
    rightContainer.appendChild(userAllQtnsContainer)
  }
})

       // Post Question Eventlistener
postQtnBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  askQuestion()
});

//Back btn eventListeners
userPostedBackBtn.addEventListener('click', (e) => {
  e.preventDefault();
  userAnswersContainer.classList.toggle('hide')
  askQtnContainer.classList.toggle('hide');
});

// User Back eventListeners

userRecQtnPostedBtn.addEventListener('click', (e) => {
  e.preventDefault();

  userRecAnswers.classList.add('hide');
  userRecentQtnContainer.classList.remove('hide'); 
  userRecQtnsContent.classList.remove('hide');
  userRecentQtnContainer.appendChild(userRecQtnCont);
});

       // Add Answer Eventlistener
addAnswerBtn.addEventListener('click', (e) => {
  e.preventDefault(); 

  addAnswers()
});

// Pick Answer Eventlistener
userAnswersList.addEventListener('click', (e) => {
  if(e.target.classList.contains('user-pickAnswer-btn')) {

    if(e.target.value === 'pick answer'){
    e.target.value = 'not answer';
  }else{
    e.target.value = 'pick answer';
  } 
    removePicked()
    e.target.parentElement.classList.toggle('picked');
   // e.target.contains.userPickAnswerBtn.value = 'answer';
    console.log('id')
  }
});

// Check answers eventListener
userRecentQtnsList.addEventListener('click', (e) => {
  if(e.target.classList.contains('user-recentAnswers-btn')){
    e.target.parentElement.parentElement.parentElement.parentElement.classList.add('hide')
    userRecentQtnContainer.innerHTML = '';
    userRecAnswers.classList.remove('hide');
     console.log(e.target)
  }
  userRecentQtnContainer.appendChild(userRecAnswers)
});

 // Ask Question func
function askQuestion(){
  const question = postQtnInput.value;
  if(question === '') {
    showError();
  }else{
  askQtnContainer.classList.toggle('hide');
  userAnswersContainer.classList.toggle('hide');
  userQtnEl.innerHTML = question;
  }
  // postQtnInput.value = '';
}

                      // Error func
function showError(){
  const divError = document.createElement('div');
  divError.className = 'error';  
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
    answerEl.appendChild(paragraph);
    answerEl.appendChild(pickAnswerBtn);
    userAnswersList.appendChild(answerEl);
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

function removePicked(){
  for(let i = 0; i < userAnswersList.length; i++) {
    userAnswersList[i].classList.remove('picked');
  }
}