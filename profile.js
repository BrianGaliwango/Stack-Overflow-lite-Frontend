const rightContainer = document.getElementById('right-container');
const profileQtnContentContainer = document.getElementById('myPro-allQtns-content-container');
const profileAllRecentQtnsContentContainer = document.getElementById('myPro-allRecentQtns-content-container');
const myProRecQtnsContainer = document.getElementById('myPro-recentQtns-container');
const myProRecAnswersContainer = document.getElementById('myPro-recentAnswers-container');
const myProAllQtnsContainer = document.getElementById('myPro-allQtns-container');
const myProAllQtnContent = document.getElementById('myPro-allQuestions-content');
const profileContentBtns = document.getElementById('profile-content-btns');
const myProAllQtnList = document.getElementById('myPro-allQuestions-list');
const myProAllQtnAnswers = document.getElementById('myPro-allAnswers-container');
const myProAnsCont = document.getElementById('myPro-answer-content')
const myProPostedQtnContent = document.getElementById('myPro-postedQtn-content');
const myProAnswersList = document.getElementById('myPro-allQtnAnswers-list');
const myProAllQtnsDisplay = document.getElementById('myPro-allQtns-total-display');
const myProQtnCont = document.getElementById('myPro-allQtn-content');
const myProRecSelectedQtn = document.getElementById('myPro-recentPostedQtn-content');
const myProRecQtnList = document.getElementById('myPro-recentQtns-list');
const myProRecAnswersList = document.getElementById('myPro-recentAnswers-list');



// Change categories eventListener
profileContentBtns.addEventListener('click', (e) => {
  e.preventDefault();
  
  if(e.target.classList.contains('profile-qtns-btn')) {
    rightContainer.innerHTML = '';
    rightContainer.appendChild(profileQtnContentContainer);
  }else if(e.target.classList.contains('recentProfile-qtns-btn')){
    rightContainer.innerHTML = '';
    profileAllRecentQtnsContentContainer.classList.remove('hide');
    rightContainer.appendChild(profileAllRecentQtnsContentContainer);
  }

});


// Check answers eventListener
myProAllQtnList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-answers-btn')){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('hide')

    myProAllQtnsDisplay.classList.add('hide');
    myProAllQtnAnswers.classList.remove('hide'); 
    profileQtnContentContainer.appendChild(myProAllQtnAnswers)
  }
})

// Back to questions eventlistener

myProPostedQtnContent.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('myPro-postedQtns-back-btn')){
    e.target.parentElement.parentElement.parentElement.classList.add('hide');

    profileQtnContentContainer.innerHTML = '',
    myProAllQtnsContainer.classList.remove('hide');
    myProAllQtnContent.classList.remove('hide');
    myProAllQtnList.classList.remove('hide');
  }
  profileQtnContentContainer.appendChild(myProAllQtnsContainer)
})

// Pick answer eventListener
myProAnswersList.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('myPro-pickAnswer-btn')){

    if(e.target.value === 'pick answer'){
      e.target.value = 'not answer';
    }else{
      e.target.value = 'pick answer';
    } 
    e.target.parentElement.parentElement.classList.toggle('picked');
  }
  console.log(e.target.parentElement)
})



// Delete Question Eventlistener

myProAllQtnList.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('myPro-delete-qtn-btn')){
    e.target.parentElement.parentElement.remove();
  }
})


// Delete answers Eventlistener 
myProAnswersList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-delete-answer-btn')){
    e.target.parentElement.parentElement.remove();
  }
})

// MyPro recent check answers eventListener 
myProRecQtnList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-recentAnswers-btn')){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('hide');

    myProRecAnswersContainer.classList.remove('hide');
  }
})

// Back to qtns eventListener
myProRecSelectedQtn.addEventListener('click', (e) => {

  myProRecAnswersContainer.classList.add('hide');
  myProRecQtnsContainer.classList.remove('hide');
  myProAllQtnsContainer.classList.remove('hide');
})

// Delete recent Qtns eventListener
myProRecQtnList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-recentDeleteQtn-btn')){
    e.target.parentElement.parentElement.remove();
    console.log(e.target);
  }
});

   // Pick answer eventListener
  myProRecAnswersList.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('myPro-pickAnswer-btn')){

    if(e.target.value === 'pick answer'){
      e.target.value = 'not answer';
    }else{
      e.target.value = 'pick answer';
    } 

    e.target.parentElement.parentElement.classList.toggle('picked');
  }
});

// Delete recent answer eventListener

myProRecAnswersList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-recentDelete-answer-btn')){
    e.target.parentElement.parentElement.remove();
    console.log(e.target);
  }
});





