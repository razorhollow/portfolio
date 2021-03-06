/*-------------------------------- Constants --------------------------------*/
import {interests, educationCards} from "./interests.js"
import {work} from "./work.js"
/*-------------------------------- Variables --------------------------------*/

let shuffledInterests = [...interests]

/*------------------------ Cached Element References ------------------------*/

let myLikes = document.querySelector('#icon-section')
let randomize = document.querySelector('#randomize')
let educationSection = document.querySelector('#education')
let workSection = document.querySelector('#my-work')
let contactBtn = document.querySelector('#contact-btn')
let workBtn = document.querySelector('#work-btn')
let pointingImage = document.querySelector('#pointing')

/*----------------------------- Event Listeners -----------------------------*/
randomize.addEventListener('click', function(evt){
  myLikes.innerHTML = ""
  renderLikes()
  
})

contactBtn.addEventListener('click', function(){
  window.scrollTo(0, 4000)
})
workBtn.addEventListener('click', function(){
  window.scrollTo(0, 2300)
})
/*-------------------------------- Functions --------------------------------*/



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
    <img src="${example.screenshot}" class="card-img-top" alt="screenshot image">
    <div class="card-body">
    <h5 class="card-title">${example.title}</h5>
    <p class="card-text">${example.description}</p>
    <div class='card-btns'>
    <a href="${example.url}" class="btn btn-primary left-btn" target="blank">See It In Action</a>
    <a href="${example.github}" class="btn btn-primary right-btn" target="blank">See The Code</a>
    </div>
    </div>
    `
    workSection.append(currentExample)
  })
}

//Fisher-Yates Shuffle
function shuffle(array) {
  let len = array.length
  let lastItem, rand;
  while (len) {
    rand = Math.floor(Math.random() * len--);
    lastItem = array[len];
    array[len] = array[rand];
    array[rand] = lastItem;
  }
  return array;
}

function getLikes () {
  let display = []
  while(shuffledInterests.length >= 3) {
    display = shuffledInterests.splice(0, 3)
    return display
  }
  shuffledInterests = [...interests]
  shuffle(shuffledInterests)
  display = shuffledInterests.splice(0, 3)
  
  return display
}

function renderLikes() {
  let display = getLikes()
  picSwitch(display, pointingImage, './assets/tacoJiujitsuBow.gif')
  display.forEach(function(interest) {
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
shuffle(shuffledInterests)
renderLikes()
renderEducation()
renderWork()


function picSwitch(array, img, url){
  if(array.some(item => item.title ==='Tacos') && array.some(item => item.title === 'BJJ') && array.some(item => item.title === 'Traditional<br>Archery')) {
  img.src = url
}
}

// let testArray = [{
//   title: 'Tacos',
//   icon: '<i class="fa-regular fa-taco fa-4x"></i>'
// }, 
// {
//   title: "BJJ",
// icon: '<i class="fa-regular fa-uniform-martial-arts fa-4x"></i>'
// },
// {
//   title: 'Flying<br>Airplanes',
//   icon: '<i class="fa-regular fa-plane-prop fa-4x"></i>'
// },
// {
//   title: 'Traditional<br>Archery',
//   icon: '<i class="fa-regular fa-bow-arrow fa-4x"></i>'
// }]

// picSwitch(testArray, pointingImage, './assets/tacoJiujitsuBow.gif')