/*-------------------------------- Constants --------------------------------*/
import {getRandomInterest, educationCards} from "./interests.js"
import {work} from "./work.js"
/*-------------------------------- Variables --------------------------------*/
let interests = []

/*------------------------ Cached Element References ------------------------*/

let myLikes = document.querySelector('#icon-section')
let randomize = document.querySelector('#randomize')
let educationSection = document.querySelector('#education')
let workSection = document.querySelector('#my-work')
let contactBtn = document.querySelector('#contact-btn')
let workBtn = document.querySelector('#work-btn')

/*----------------------------- Event Listeners -----------------------------*/
randomize.addEventListener('click', function(evt){
  myLikes.innerHTML = ""
  interests = []
  renderLikes()

})

contactBtn.addEventListener('click', function(){
  window.scrollTo(0, 4000)
})
workBtn.addEventListener('click', function(){
  window.scrollTo(0, 2300)
})
/*-------------------------------- Functions --------------------------------*/

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

function renderWork() {
  let heading = document.createElement('h2')
  heading.textContent = 'My Previous Work'
  workSection.append(heading)
  work.forEach(function(example) {
    let currentExample = document.createElement('div')
    currentExample.classList.add('card' , 'text-center')
    currentExample.style.width = '30rem'
    currentExample.innerHTML = 
    `
    <img src="${example.screenshot}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${example.title}</h5>
      <p class="card-text">${example.description}</p>
      <a href="${example.url}" class="btn btn-primary left-btn" target="blank">See It In Action</a>
      <a href="${example.github}" class="btn btn-primary right-btn" target="blank">See The Code</a>
    </div>
    `
    workSection.append(currentExample)
  })
}
renderLikes()
renderEducation()
renderWork()
