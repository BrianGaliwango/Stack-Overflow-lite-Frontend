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
const userAllQtnsCont = document.getElementById('user-allQtns-container');
const userAllQtnsList = document.getElementById('user-allQtns-list');
const userAllAnswersList = document.getElementById('user-allAnswers-list');
const userAnswersBtn = document.getElementById('user-answers-btn');


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

// user check all qtn answer eventListener
userAllQtnsList.addEventListener('click', (e) => {
  if(e.target.classList.contains('user-answers-btn')){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('hide')
    user
  }
})

 // Ask Question func
function askQuestion(){
  const questionText = postQtnInput.value;

  if(questionText !== '') {
    askQtnContainer.classList.toggle('hide');
    userAnswersContainer.classList.toggle('hide');
    userQtnEl.innerHTML = questionText;

    if(questionText) {
      const question = document.createElement('li'); 
      question.classList.add('user-allQtn-content');

      const paragraph = document.createElement('p');
      paragraph.classList.add('user-allQtn-text');
      paragraph.innerText = questionText;

      const divTotal = document.createElement('div');
      divTotal.classList.add('user-all-inQtn-total-answers-number')
      divTotal.innerText = 10;

      const divBtns = document.createElement('div');
      divBtns.className = 'user-allAddAns-btns';

      const addAnsBtn = document.createElement('input');
      addAnsBtn.type = 'submit';
      addAnsBtn.value = 'add answers';
      addAnsBtn.className = 'user-addAnswer-btn'
      addAnsBtn.id = 'user-addAnswer-btn';

      const answersBtn = document.createElement('input');
      answersBtn.type = 'submit';
      answersBtn.value = 'answers';
      answersBtn.className = 'user-answers-btn'
      answersBtn.id = 'user-answers-btn';

      // divBtns.appendChild(addAnsBtn);
      divBtns.appendChild(answersBtn)
      question.appendChild(divBtns);
      question.appendChild(divTotal)
      question.appendChild(paragraph)
      question.appendChild(answersBtn);

      userAllQtnsList.appendChild(question);

    }

  }else{
    showError()
  }
  
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
    const answerEl = document.createElement('li');
    answerEl.classList.add('user-answer-content');
    const paragraph = document.createElement('p');
    paragraph.classList.add('user-answer-text');
    paragraph.innerText = answerText;
    const pickAnswerBtn = document.createElement('input');
    pickAnswerBtn.type = 'button';
    pickAnswerBtn.value = 'pick answer';
    pickAnswerBtn.className = 'user-pickAnswer-btn'
    pickAnswerBtn.id = 'user-pickAnswer-btn';
    answerEl.appendChild(paragraph);
    answerEl.appendChild(pickAnswerBtn);
    userAnswersList.appendChild(answerEl);

    if(answerText){
      const answerEl = document.createElement('li');
      answerEl.classList.add('user-allAnswer-content');
      const paragraph = document.createElement('p');
      paragraph.className = 'user-allAnswer-text';
      paragraph.innerText = answerText;
      answerEl.appendChild(paragraph);
      answerEl.appendChild(pickAnswerBtn);
      userAllAnswersList.appendChild(answerEl);
    }
  }else{
    showError();
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


// function updateLS(){
//   questionsEl = document.querySelectorAll('user-allQtn-text')

//   const userAllQtnsList = [];
//   questionsEl.forEach(question => {
//     userAllQtnsList.push({
//       text: questionsEl.innerText
//     })
//   })
//   localStorage.setItem(JSON.stringify(userAllQtnsList));
// }


