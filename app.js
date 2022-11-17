const menuBtn = document.getElementById('menu-button');
const leftContainer = document.getElementById('left-container');
const viewRecentQtnBtn = document.getElementById('view-recentQtns-btn');
const allUserQtnsContainer = document.getElementById('user-allQtns-content-container');
const recentQtnsContainer = document.getElementById('user-recentQtns-content-container');
const backQtnsBtn = document.getElementById('back-Qtns-btn');


// Show sidebar eventListener
menuBtn.addEventListener('click', (e) => {
   leftContainer.classList.toggle('hide')
});


// Hide sidebar eventListener
leftContainer.addEventListener('mouseleave', (e) => {
   leftContainer.classList.add('hide')
});


// View recentQtns eventListener
viewRecentQtnBtn.addEventListener('click', (e) => {
    allUserQtnsContainer.classList.add('hide')
    recentQtnsContainer.classList.remove('hide')
});


// Return to questions eventListener
backQtnsBtn.addEventListener('click', (e) => {
    recentQtnsContainer.classList.add('hide')
    allUserQtnsContainer.classList.remove('hide')
 });












