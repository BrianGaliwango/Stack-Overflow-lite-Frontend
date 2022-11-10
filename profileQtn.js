const menuBtn = document.getElementById('menu-button');
const leftContainer = document.getElementById('left-container');
const myProAnswerList = document.getElementById('myPro-allQtnAnswers-list');
const pickAnswerBtn = document.getElementById('myPro-pickAnswer-btn')


// Show sidebar eventListener
menuBtn.addEventListener('click', (e) => {
  leftContainer.classList.toggle('hide')
});

// Hide sidebar eventListener
leftContainer.addEventListener('mouseleave', (e) => {
  leftContainer.classList.add('hide')
});

// Pick answer eventListener
myProAnswerList.addEventListener('click', (e) => {
  if(e.target.classList.contains('myPro-pickAnswer-btn')){
    // e.preventDefault()
    if(e.target.value === 'pick answer'){
      e.target.value = 'not answer';
    }else{
      e.target.value = 'pick answer'
    }
      e.target.parentElement.parentElement.classList.toggle('picked')
  }
  console.log(e.target.parentElement.parentElement)
})

