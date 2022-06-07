/*-------------------------------- Constants --------------------------------*/
import {getRandomInterest, educationCards} from "./interests.js"
/*-------------------------------- Variables --------------------------------*/
let interests = []

/*------------------------ Cached Element References ------------------------*/

let myLikes = document.querySelector('#icon-section')
let randomize = document.querySelector('#randomize')
let educationSection = document.querySelector('#education')

/*----------------------------- Event Listeners -----------------------------*/
randomize.addEventListener('click', function(evt){
  myLikes.innerHTML = ""
  interests = []
  renderLikes()

})
/*-------------------------------- Functions --------------------------------*/

function render () {

}

function getLikes () {
  while(interests.length < 3) {
    let pulledInterest = getRandomInterest()
    if (! interests.some(interest => interest.title === pulledInterest.title)) {
      interests.push(pulledInterest)
    }
  }
}

function renderLikes() {
  getLikes()
  interests.forEach(function(interest) {
    let interestCard = document.createElement('div')
    interestCard.classList.add('w-25')
    interestCard.innerHTML=
    `<div class="card">
      <div class="card-body">
        ${interest.icon}<p>${interest.title}</p>
    </div>
  </div>`
    myLikes.append(interestCard)
  })
}

function renderEducation() {
  educationCards.forEach(function(card) {
    let currentCard = document.createElement('div')
    currentCard.classList.add('education-card')
    currentCard.innerHTML = 
    `
    <img src="${card.logo}" alt="" class="education-logo">
    <h5 class="education-heading">${card.title}</h5>
    <h6 class="education-desk">${card.description}</h6>
    <p class="education-date">${card.dates}</p>
    `
    educationSection.append(currentCard)
  })
}

renderLikes()
renderEducation()

/*---------------------------------- TODO -----------------------------------*/

// change text color of active nav item
