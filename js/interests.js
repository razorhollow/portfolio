const interests = [
  {
    title: 'Tacos',
    icon: '<i class="fa-regular fa-taco fa-4x"></i>'
  }, 
  {title: "Brazilian Jiujitsu",
  icon: '<i class="fa-regular fa-uniform-martial-arts fa-4x"></i>'
  },
  {
    title: 'Flying Airplanes',
    icon: '<i class="fa-regular fa-plane-prop fa-4x"></i>'
  },
  {
    title: 'Traditional Archery',
    icon: '<i class="fa-regular fa-bow-arrow fa-4x"></i>'
  },
  {
    title: "Drone Photography",
    icon: '<i class="fa-regular fa-drone-front fa-4x"></i>'
  },
  {
    title: "Fly Fishing",
    icon: '<i class="fa-regular fa-fishing-rod fa-4x"></i>'
  },
  {
    title: "Organic Gardening",
    icon: '<i class="fa-regular fa-carrot fa-4x"></i>'
  },
  {
    title: "Wood-Fired Pizza",
    icon: '<i class="fa-regular fa-pizza-slice fa-4x"></i>'
  },
  {
    title: "Videography",
    icon: '<i class="fa-regular fa-camera-movie"></i>"></i>'
  },
  {
    title: "Cooking",
    icon: '<i class="fa-regular fa-knife-kitchen"></i>'
  }

]

function getRandomInterest() {
  return interests[Math.floor(Math.random() * interests.length)]
}

export {getRandomInterest}