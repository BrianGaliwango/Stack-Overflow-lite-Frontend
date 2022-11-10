const qtnContainer = document.getElementById('question-container');
const menuBtn = document.getElementById('menu-button');
const leftContainer = document.getElementById('left-container');
const searchForm = document.getElementById('searchForm');
const answerListContainer = document.getElementById('answers-list-container');
const answerList = document.getElementById('user-allAnswers-list');
const answerFormContainer = document.getElementById('answer-form-container');
const addAnswerInput = document.getElementById('user-addAnswer-textarea');
const addAnswerBtn = document.getElementById('user-addAnswer-btn');



let answers = [];


// Show sidebar eventListener
menuBtn.addEventListener('click', (e) => {
    leftContainer.classList.toggle('hide')
});


// Hide sidebar eventListener
leftContainer.addEventListener('mouseleave', (e) => {
    leftContainer.classList.add('hide')
});


// Search questions eventListener
searchForm.addEventListener('click', (e) => {
  e.preventDefault()
  searchQuestion()
})

// Add answer eventListener
addAnswerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addAnswer();
});


// Search question func
function searchQuestion(){
  if(searchForm.value !== ''){
    search_rs = searchForm.value
    console.log(search_rs)
    showSearchSuccess()
  }else{
    showSearchError();
  }
}


// Validate answer func
function addAnswer(){
    if(addAnswerInput.value !== ''){
        let answer = addAnswerInput.value
        answers.push({answer});
        showSuccess()
        console.log(answer)
    }else{
      showError()
    }
    addAnswerInput.value = '';
}


// Show success func
function showSuccess(){
  const divSuccess = document.createElement('div');
  divSuccess.className = 'success';
  const answerForm = document.querySelector('.user-addAnswers-form');
  divSuccess.appendChild(document.createTextNode('Answered question successfully'));
  answerFormContainer.insertBefore(divSuccess, answerForm);
  setTimeout(() => {divSuccess.remove()}, 1500);
}


// Show error func
function showError(){
  const divError = document.createElement('div');
  divError.className = 'error';
  const answerForm = document.querySelector('.user-addAnswers-form');
  divError.appendChild(document.createTextNode('Please fill in all fields'));
  answerFormContainer.insertBefore(divError, answerForm);
  setTimeout(() => {divError.remove()}, 1500);
}


