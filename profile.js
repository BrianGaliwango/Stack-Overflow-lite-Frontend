const menuBtn = document.getElementById('menu-button');
const leftContainer = document.getElementById('left-container');
const rightContainer = document.getElementById('right-container');
const myProQtnsContainer = document.getElementById('myPro-allQtns-content-container');
const mostAnsweredQtnsContainer = document.getElementById('myPro-mostAnsweredQtns-content-container');
const myProRecentQtnsContainer = document.getElementById('myPro-allRecentQtns-content-container');
const viewMostAnsweredQtnsBtn = document.getElementById('view-mostAnsweredQtns-btn');
const mostAnsweredQtnsBackBtn = document.getElementById('myPro-mostAnsweredQtns-backBtn')
const viewRecentQtnBtn = document.getElementById('myPro-view-recentQtns-btn');
const myProBackQtnsBtn = document.getElementById('myPro-backQtns-btn');
const myProAllQtnsList = document.getElementById('myPro-allQuestions-list');
const myProQtnContent = document.getElementById('myPro-allQtn-content');
const myProRecentQtnsList = document.getElementById('myPro-recentAllQuestions-list');
const myProMostAnswerQtnsList = document.getElementById('myPro-mostAnsweredQuestions-list');


// Show sidebar eventListener
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  leftContainer.classList.toggle('hide')
});


// Hide sidebar eventListener
leftContainer.addEventListener('mouseleave', (e) => {
  e.preventDefault();
  leftContainer.classList.add('hide')
});


//View most answered questions eventListener
viewMostAnsweredQtnsBtn.addEventListener('click', (e) => {
    myProQtnsContainer.classList.add('hide')
    mostAnsweredQtnsContainer.classList.remove('hide')
});


mostAnsweredQtnsBackBtn.addEventListener('click', (e) => {
  mostAnsweredQtnsContainer.classList.add('hide')
  myProQtnsContainer.classList.remove('hide')
});


// Delete most Answered Questions eventListener
myProMostAnswerQtnsList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-delete-qtn-btn')){
       e.target.parentElement.parentElement.remove()
  }
});


// View profile recent questions
viewRecentQtnBtn.addEventListener('click', (e) => {
  e.preventDefault()
  myProQtnsContainer.classList.add('hide')
  myProRecentQtnsContainer.classList.remove('hide')
  rightContainer.appendChild(myProRecentQtnsContainer)
});


// Back to profile questions eventListener
myProBackQtnsBtn.addEventListener('click', (e) => {
  myProRecentQtnsContainer.classList.add('hide')
  myProQtnsContainer.classList.remove('hide')
});


// Delete question
myProAllQtnsList.addEventListener('click', (e) => {

  if(e.target.classList.contains('myPro-delete-qtn-btn')) {
       e.target.parentElement.parentElement.remove()
      }
});

// Delete recent question
myProRecentQtnsList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-delete-recentQtn-btn')){
      e.target.parentElement.parentElement.remove()
  }
});




