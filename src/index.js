console.log('%c HI', 'color: firebrick')
let breedsList = []
let filteredDogs = []

// challenge 1
const fetchAllImg = () => {
  fetch(imgUrl = "https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(json => json.message.map(dog => buildImg(dog)))
}

const buildImg = (dog) => {
  let img = document.createElement('img')
  // debugger
  img.src = dog 
  let dogContainer = document.getElementById('dog-image-container');
  dogContainer.appendChild(img)
}

// challenge 2 & 3
fetchAllBreeds = () => {
    fetch(breedUrl = 'https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => Object.keys(json.message).forEach(breed => {
        buildBreed(breed)
        breedsList.push(breed)
    }))
}

const buildBreed = (breed) => {
    let li = document.createElement('li')
    li.innerText = breed
    li.addEventListener('click', (e) => li.style.color = 'orange')
    let ul = document.querySelector('ul')
    ul.appendChild(li)
}

// challenge 4
const searchBy = (dogs) => {
    let letter = document.getElementById('breed-dropdown');
    let li = document.querySelectorAll('li')
    letter.addEventListener('change', (e) => {
        let ul = document.querySelector('ul')
        ul.innerHTML = ""
        let filteredDogs = dogs.filter(dog => dog[0] === e.target.value);
        filteredDogs.forEach(breed => buildBreed(breed))
        console.log(filteredDogs)
  })
}

fetchAllImg();
fetchAllBreeds();
searchBy(breedsList);

// get array full of dog obj
// call .filter
// new array with only dogs of dropdown
// either in eventlister or passed to eventlistener

