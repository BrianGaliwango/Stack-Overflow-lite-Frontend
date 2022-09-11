const rightContainer = document.getElementById('right-container');
const profileQtnContentContainer = document.getElementById('myPro-allQtns-content-container');
const profileAllRecentQtnsContentContainer = document.getElementById('myPro-allRecentQtns-content-container')
const myProAllQtnsContainer = document.getElementById('myPro-allQtns-container');
const myProAllQtnContent = document.getElementById('myPro-allQuestions-content');
const profileContentBtns = document.getElementById('profile-content-btns');
const myProAllQtnList = document.getElementById('myPro-allQuestions-list');
const myProAllQtnAnswers = document.getElementById('myPro-allAnswers-container');
const myProPostedQtnContent = document.getElementById('myPro-postedQtn-content');
const myProAllQtnsDisplay = document.getElementById('myPro-allQtns-total-display');
const myProQtnCont = document.getElementById('myPro-allQtn-content')



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

  console.log(e.target)
});


// Check answers eventListener
myProAllQtnList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-answers-btn')){
    console.log(e.target)
    e.target.parentElement.parentElement.parentElement.parentElement.classList.add('hide')

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
    console.log(123)
  }
  profileQtnContentContainer.appendChild(myProAllQtnsContainer)
})




