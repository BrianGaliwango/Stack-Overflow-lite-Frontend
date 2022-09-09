// // function chicken(){
// //   return chicken();
// // }

// // function egg(){
// //   return chicken();
// // }

// // console.log(chicken() + "came first");


// const qtnsList = document.getElementById('user-allQtns-list')

// // Get qtns and answers from ls
// const qtns = JSON.parse(localStorage.getItem('questions'));
// const answers = JSON.parse(localStorage.getItem('answers'));

// if (qtns, answers){
//   qtns.forEach(qtn => addQtn(qtn));
//   answers.forEach(answer => addAnswer(answer));
// }


// // AddQtn 
// function addQtn(qtn) {
//   let qtnText = postQtnInput.value;

//   // Check LS
//   if(qtns) {
//     qtnText = qtn.Text;
//   }

//   // Creating Qtn
//   if(qtnText) {
//     const qtn = document.createElement('li');
//     qtn.classList.add('user-allQtn-content');
//     const paragraph = document.createElement('p');
//     paragraph.classList.add('user-allQtn-text');
//     paragraph.innerText = qtnText;
//     const divTotal = document.createElement('div');
//     divTotal.classList.add('user-all-inQtn-total-answers-number')
//     const divBtns = document.createElement('div');
//     divBtns.classList.add('user-allAddAns-btns')
//     const addAnsBtn = document.createElement('input');
//     addAnsBtn.type = 'submit';
//     addAnsBtn.value = 'add answers';
//     addAnsBtn.className = 'user-addAnswer-btn'
//     addAnsBtn.id = 'user-addAnswer-btn';
//     const answersBtn = document.createElement('input');
//     answersBtn.type = 'submit';
//     answersBtn.value = 'answers';
//     answersBtn.className = 'user-answers-btn'
//     answersBtn.id = 'user-answers-btn';
//     divBtns.appendChildren(addAnsBtn, answersBtn);
//     qtns.appendChild(divBtns);
//     qtn.appendChild(divTotal)
//     qtn.appendChild(paragraph)
//     qtn.appendChild(answersBtn);

//     qtnsList.appendChild(qtn);
//   }

//   updateLS();
// }


// function updateLS(){
//   qtns = document.querySelectorAll('user-allQtn-content')

//   const questions = [];

//   qtnsList.forEach(qtn => {
//     questions.push({
//       text: qtn.innerText
//     })
//   })
//   localStorage.setItem('questions', JSON.stringify(qtns))
// }



// function askQuestion(){
//   let question = postQtnInput.value;

//   if(questionText !== '') {
//     askQtnContainer.classList.toggle('hide');
//     userAnswersContainer.classList.toggle('hide');
//     userQtnEl.innerHTML = question;

//     if(questionText !== '') {
//       const question = document.createElement('li'); 
//       question.classList.add('user-allQtn-content');

//       const paragraph = document.createElement('p');
//       paragraph.classList.add('user-allQtn-text');
//       paragraph.innerText = questionText;

//       const divTotal = document.createElement('div');
//       divTotal.classList.add('user-all-inQtn-total-answers-number')

//       const divBtns = document.createElement('div');
//       divBtns.classList.add('user-allAddAns-btns')
      
//       const addAnsBtn = document.createElement('input');
//       addAnsBtn.type = 'submit';
//       addAnsBtn.value = 'add answers';
//       addAnsBtn.className = 'user-addAnswer-btn'
//       addAnsBtn.id = 'user-addAnswer-btn';

//       const answersBtn = document.createElement('input');
//       answersBtn.type = 'submit';
//       answersBtn.value = 'answers';
//       answersBtn.className = 'user-answers-btn'
//       answersBtn.id = 'user-answers-btn';

//       divBtns.appendChild(addAnsBtn, answersBtn);
//       question.appendChild(divBtns);
//       question.appendChild(divTotal)
//       question.appendChild(paragraph)
//       question.appendChild(answersBtn);

//       userAllQtnsList.appendChild(qtn);


//     }

//   }else{
//     showError();
//   }
  
  

// }



if(answerText){
  const answerEl = document.createElement('li');
  answerEl.classList.add('user-allAnswer-content');
  const paragraph = document.createElement('p');
  paragraph.classList.add('user-allAnswer-text');
  paragraph.innerText = answerText;
  answerEl.appendChild(paragraph);
  answerEl.appendChild(pickAnswerBtn);
  userAllAnswersList.appendChild(answerEl);
}

if(userAllAnswersList){
  
}
  