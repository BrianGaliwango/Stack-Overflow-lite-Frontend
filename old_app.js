const rightContainer = document.getElementById('right-container');
const leftContainer = document.getElementById('left-container');
const menuBtn = document.getElementById('menu-button');
const contentBtns = document.getElementById('content-btns');
const postContent = document.getElementById('post-content');
const askQtnContainer = document.getElementById('ask-qtn-container');
const userRecentQtnContainer = document.getElementById('user-recentQtns-content-container');
const userAllQtnsContainer = document.getElementById('user-allQtns-content-container');
const postQtnBtn = document.getElementById('submit-qtn-btn');
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
const userRecAnswersList = document.getElementById('user-recentAnswers-list')
const addAnswerBtn = document.getElementById('answer-qtn-btn');
const userPickAnswerBtn = document.getElementById('user-pickAnswer-btn');
const userRecDisplay = document.getElementById('user-recentQtns-display');
const userAllQtnsCont = document.getElementById('user-allQtns-container');
const userAllQtnsContent = document.getElementById('user-allQtns-content');
const userAllQtnsList = document.getElementById('user-allQtns-list');
const userAllAnswerList = document.getElementById('user-allAnswers-list');
const userAllQtnText = document.getElementById('user-allQtn-text');
const userAllAnswersContainer = document.getElementById('user-allAnswers-container');
const userAllSelectedQtnCont = document.getElementById('user-allSelectedQtn-content');
const userAllSelectedQtnText = document.getElementById('user-allSelectedQtn-text');
const userAllQtnCont = document.getElementById('user-allQtn-content');
const userAllQtnsDisplay = document.getElementById('allUser-qtns-display');
const userAddAnsInput = document.getElementById('allUser-addAnswer-input');
const userAllAddAnswerBtn = document.getElementById('user-AllAnswer-qtn-btn');

// Show sidebar eventListener
menuBtn.addEventListener('click', (e) => {
  leftContainer.classList.toggle('hide')
});

// Hide sidebar eventListener
leftContainer.addEventListener('mouseleave', (e) => {
  leftContainer.classList.add('hide')
});

// // Change categories eventListener
// contentBtns.addEventListener('click', (e) =>{
//   if(e.target.classList.contains('post-qtn-btn')){
//     rightContainer.innerHTML = '';
//     rightContainer.appendChild(postContent);
//   }else if(e.target.classList.contains('recent-qtns-btn')){
//     rightContainer.innerHTML = '';
//     userRecentQtnContainer.classList.remove('hide');
//     rightContainer.appendChild(userRecentQtnContainer); 
//   }else if(e.target.classList.contains('qtns-answers-btn')){
//     rightContainer.innerHTML = ''; 
//     userAllQtnsContainer.classList.remove('hide');
//     rightContainer.appendChild(userAllQtnsContainer)
//   }
// })

//        // Post Question Eventlistener
// postQtnBtn.addEventListener('click', (e) => {
//   e.preventDefault(); 
//   askQuestion()
// });

// //Back btn eventListeners
// userPostedBackBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   userAnswersContainer.classList.toggle('hide')
//   askQtnContainer.classList.toggle('hide');
// });

// // User Back eventListeners

// userRecQtnPostedBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   userRecAnswers.classList.add('hide');
//   userRecentQtnContainer.classList.remove('hide'); 
//   userRecQtnsContent.classList.remove('hide');
//   userRecentQtnContainer.appendChild(userRecQtnCont);
// });

//        // Add Answer Eventlistener
// addAnswerBtn.addEventListener('click', (e) => {
//   e.preventDefault(); 

//   addAnswers()
// });

// // Pick Answer Eventlistener
// userAnswersList.addEventListener('click', (e) => { 

//   if(e.target.classList.contains('user-pickAnswer-btn')) {

//     if(e.target.value === 'pick answer'){
//     e.target.value = 'not answer';
//   }else{
//     e.target.value = 'pick answer';
//   } 
//     // removePicked()
//     e.target.parentElement.classList.toggle('picked');
//   }
// });

// // Check answers eventListener
// userRecentQtnsList.addEventListener('click', (e) => {
//   if(e.target.classList.contains('user-recentAnswers-btn')){
//     e.target.parentElement.parentElement.parentElement.parentElement.classList.add('hide')
//     userRecentQtnContainer.innerHTML = '';
//     userRecAnswers.classList.remove('hide');
//   }
//   userRecentQtnContainer.appendChild(userRecAnswers)
// });

// // User add Answer Eventlistener 
// userAllAddAnswerBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   userAddAnswer();
// });

// // Check all Answer Qtn Eventlistener
// // userAllQtnsList.addEventListener('click', (e) => {
// //   if(e.target.classList.contains('user-answers-btn')){
// //     e.target.parentElement.parentElement.parentElement.parentElement.classList.add('hide');   
    
// //     userAllAnswersContainer.classList.remove('hide');

  
// //     // userAllSelectedQtnCont.innerText = '';
// //     // userAllSelectedQtnText.text = userAllQtnText;
// //   }
// // })

// // User selected question back eventListener 
// userAllAnswersContainer.addEventListener('click', (e) => {
//   if(e.target.classList.contains('user-allSelectedQtns-back-btn')) {
    
//     userAllAnswersContainer.classList.add('hide');
//     userAllQtnsCont.classList.remove('hide'); 
//     userAllQtnsContent.classList.remove('hide');
//     userAllQtnsList.classList.remove('hide');
//   }
// });

// // User pick Answer Eventlistener
// userRecAnswersList.addEventListener('click', (e) => {
//   if(e.target.classList.contains('user-pickAnswer-btn')) {

//     if(e.target.value === 'pick answer'){
//     e.target.value = 'not answer';
//   }else{
//     e.target.value = 'pick answer';
//   } 
//     // removePicked()
//     e.target.parentElement.classList.toggle('picked');
//   }
// });


// // All user pick Answer Eventlistener
// userAllAnswerList.addEventListener('click', (e) => {
//   if(e.target.classList.contains('user-pickAnswer-btn')) {

//     if(e.target.value === 'pick answer'){
//     e.target.value = 'not answer';
//   }else{
//     e.target.value = 'pick answer';
//   } 
//     // removePicked()
//     e.target.parentElement.classList.toggle('picked');
//   }
// });


//  // Ask Question func
function askQuestion(){
  let question = postQtnInput.value;
  if(question !== '') {
  askQtnContainer.classList.toggle('hide');
  userAnswersContainer.classList.toggle('hide');
  userQtnEl.innerHTML = question;

    if(question) {
      const questionEl = document.createElement('li'); 
      questionEl.classList.add('user-allQtn-content');

      const paragraph = document.createElement('p');
      paragraph.classList.add('user-allQtn-text');
      paragraph.innerText = question;

      const divTotal = document.createElement('div');
      divTotal.className = 'user-all-inQtn-total-answers-number'
      divTotal.innerHTML = 10;

      const divBtns = document.createElement('div');
      divBtns.classList.add('user-allAddAns-btns')
      
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

      divBtns.appendChild(answersBtn);
      questionEl.appendChild(divBtns);
      questionEl.appendChild(divTotal)
      questionEl.appendChild(paragraph)
      questionEl.appendChild(answersBtn);

      userAllQtnsList.appendChild(questionEl);
      }
  }else{
    showError();
  }
  postQtnInput.value = '';
}

//                       // Error func
// function showError(){
//   const divError = document.createElement('div');
//   divError.className = 'error';  
//   const postForm = document.querySelector('.post-form');
//   divError.appendChild(document.createTextNode('Please enter a question'));
//   askQtnContainer.insertBefore(divError, postForm);
//   setTimeout(() => {divError.remove()}, 2000);
// }

//                      // Add Answer func

// function addAnswers(answer) {
//   let answerText = userAnswerInput.value;

//   if(answerText !== '') {
//     const answerEl = document.createElement('li');
//     answerEl.classList.add('user-answer-content');
//     const paragraph = document.createElement('p');
//     paragraph.classList.add('user-answer-text');
//     paragraph.innerText = answerText;
//     answerEl.appendChild(paragraph);
//     const pickAnswerBtn = document.createElement('input');
//     pickAnswerBtn.type = 'button';
//     pickAnswerBtn.value = 'pick answer';
//     pickAnswerBtn.className = 'user-pickAnswer-btn'
//     pickAnswerBtn.id = 'user-pickAnswer-btn';
//     answerEl.appendChild(pickAnswerBtn);
//     userAnswersList.appendChild(answerEl);

//     if(answerText){
//       const answerEl = document.createElement('li');
//       answerEl.classList.add('user-allAnswer-content');
//       const paragraph = document.createElement('p');
//       paragraph.classList.add('user-allAnswer-text');
//       const pickAnswerBtn = document.createElement('input');
//       pickAnswerBtn.type = 'button';
//       pickAnswerBtn.value = 'pick answer';
//       pickAnswerBtn.className = 'user-pickAnswer-btn'
//       pickAnswerBtn.id = 'user-pickAnswer-btn';
//       paragraph.innerText = answerText;
//       answerEl.appendChild(paragraph);
//       answerEl.appendChild(pickAnswerBtn);
//       userAllAnswerList.appendChild(answerEl);
//     }

//   }else{
//     showAnswerError();
//   }
//   userAnswerInput.value = '';
// }

// function showAnswerError(){
//   const answerErrDiv = document.createElement('div');
//   answerErrDiv.className = 'error'
//   const  userAnswersTitle = document.getElementById('user-answers-title');
//   const userAllAnswersTitle = document.getElementById('user-allAnswers-title');
//   answerErrDiv.appendChild(document.createTextNode('Please enter a valid answer'));
//   userAllAnswersContainer.insertBefore(answerErrDiv, userAllAnswersTitle);
//   userAnswersContainer.insertBefore(answerErrDiv, userAnswersTitle)
  
//   setTimeout(() => {answerErrDiv.remove()}, 2000);
// }

// function userAddAnswer(){
//   let userAnswer = userAddAnsInput.value;

//   if(userAnswer !== ''){
//     const answerEl = document.createElement('li');
//     answerEl.classList.add('user-allAnswer-content');
//     const paragraph = document.createElement('p');
//     paragraph.classList.add('user-allAnswer-text');
//     paragraph.innerText = userAnswer;
//     answerEl.appendChild(paragraph);
//     const pickAnswerBtn = document.createElement('input');
//     pickAnswerBtn.type = 'button';
//     pickAnswerBtn.value = 'pick answer';
//     pickAnswerBtn.className = 'user-pickAnswer-btn'
//     pickAnswerBtn.id = 'user-pickAnswer-btn';
//     answerEl.appendChild(pickAnswerBtn);
//     userAllAnswerList.appendChild(answerEl);
//   }else{
//     showAddAnswerError()
//   }
//   userAddAnsInput.value = '';
// }

// function showAddAnswerError(){
//   const answerErrDiv = document.createElement('div');
//   answerErrDiv.className = 'error'
//   const userAllAnswersTitle = document.querySelector('user-allAnswers-title');
//   answerErrDiv.appendChild(document.createTextNode('Please enter a valid answer'));
//   userAllAnswersContainer.insertBefore(answerErrDiv, userAllAnswersTitle);
  
//   setTimeout(() => {answerErrDiv.remove()}, 2000);
// }


// function updateLS(){
//   questionsCont = document.querySelectorAll('.user-allQtn-content');

//   const questions = [];

//   questionsCont.forEach(questionCont => {
//     questions.push({
//       text: questionCont.innerText     
//     })
//   })
// }





// from new app.js
function postQuestion(){
  let questionBody = postQtnInput.value
  let title = postTitleInput.value;

  // Validate inputs
  if(questionBody !== '' && title !== ''){
      const questionEl = document.createElement('li');
      questionEl.classList.add('user-allQtns-content');
      
      const totalAnswerView = document.createElement('small');
      totalAnswerView.classList.add('total-answer-view');
      totalAnswerView.innerText = "10 : Answers"

      const dateView = document.createElement('small');
      dateView.classList.add('question-date');
      dateView.innerText = "2022-10-24 19:55:02"

      const qtnTitle = document.createElement('a');
      qtnTitle.classList.add('qtn-title');
      qtnTitle.value = title;

      const paragraph = document.createElement('p');
      paragraph.classList.add('user-allQtn-body');
      paragraph.innerText = questionBody

      questionEl.appendChild(totalAnswerView);
      questionEl.appendChild(dateView);
      questionEl.appendChild(qtnTitle);
      questionEl.appendChild(paragraph);
     
      questions.push(questionEl);
  }else{
    showError()
  }
  postTitleInput.value = '';
  postQtnInput.value = '';
}




// questionsjs
function addAnswer2() {
  let answer = addAnswerInput.value
  if(answer !== ''){
  // if(addAnswerInput.value !== ''){
      // let answer = addAnswerInput.value
      const answerEl = document.createElement('li');
      answerEl.classList.add('user-allAnswer-content');

      const answerDate = document.createElement('small')
      answerDate.classList.add('answer-date');
      answerDate.innerText = "2022-10-24 19:55:02";

      const answerAuthor = document.createElement('small')
      answerAuthor.classList.add('answer-author');
      answerAuthor.innerText = "Galice";
      
      const paragraph = document.createElement('p');
      paragraph.classList.add('answer-body');
      paragraph.innerText = answer;

      answerEl.appendChild(answerDate);
      answerEl.appendChild(answerAuthor);
      answerEl.appendChild(paragraph);
      print(answerEl)
      answerList.appendChild(answerEl);
      showSuccess();
      
  }else{
    showError();
  }
  addAnswerInput.value = ''
}
