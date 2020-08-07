// console.log('%c HI', 'color: firebrick')
let breedsList = []
let filteredDogs = []

// dog api
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


// challenge 1
const fetchAllDogs = () => {
fetch(imgUrl)
.then(res => res.json())
.then(json => json.message.forEach(dog => renderDogImage(dog))) //object of array
}
fetchAllDogs();

const renderDogImage = (dog) => {

  const dogContainer = document.querySelector('#dog-image-container')
  const dogImage = document.createElement('img')
  dogImage.src = `${dog}`
  dogContainer.appendChild(dogImage)

}

// challenge 2
const fetchAllBreeds = () =>{
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => { 
   Object.keys(json.message).forEach(breed => {
     renderDogBreed(breed)
     breedsList.push(breed)
    })
  }) //object
} 
fetchAllBreeds();

//challenge 3
const renderDogBreed = (breed) => {
  // console.log(dog)
  const ul = document.querySelector('#dog-breeds')
  const li = document.createElement('li')
  li.innerHTML = `
    <li>${breed}</li>
  `
  ul.appendChild(li)
  li.addEventListener('click', ()=> {
    li.style.color = 'brown'
  })
}

// challenge 4
const searchDogs = (dogs) => {
  // console.log(dog)
  const dropDown = document.getElementById('breed-dropdown')
  const li = document.querySelectorAll('li')
  dropDown.addEventListener('change', (e) => {
    const ul = document.querySelector('ul')
    ul.innerText = ''
    let filteredDogs = dogs.filter(dog => dog[0] === e.target.value)
    filteredDogs.forEach(breed => renderDogBreed(breed))
    console.log(filteredDogs)
    // debugger
  })
}
searchDogs(breedsList)

