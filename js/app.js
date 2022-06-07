/*-------------------------------- Constants --------------------------------*/
import {getRandomInterest} from "./interests.js"
/*-------------------------------- Variables --------------------------------*/
let interests = []

/*------------------------ Cached Element References ------------------------*/

let myLikes = document.querySelector('#icon-section')
let randomize = document.querySelector('#randomize')

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

renderLikes()


/*---------------------------------- TODO -----------------------------------*/

// change text color of active nav item
