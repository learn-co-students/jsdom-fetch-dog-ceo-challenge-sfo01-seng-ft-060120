console.log('%c HI', 'color: firebrick')

const fetchAllImages = () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(json => json.message.forEach(dogImg => showAllImages(dogImg) ))
}
fetchAllImages()

const breedList = []

const fetchAllBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => Object.keys(json.message).forEach(dogBreed => {
        showAllBreeds(dogBreed)
        breedList.push(dogBreed)
    }))
}
fetchAllBreeds()

const showAllImages = (dogImg) => {
    const dogImageContainer = document.querySelector('#dog-image-container')

    let img = document.createElement('img')
    img.src = dogImg
    dogImageContainer.appendChild(img)
}

const showAllBreeds = (dogBreed) => {
    const breedList = document.querySelector('#dog-breeds') 
    let li = document.createElement('li')
    li.innerText = `${dogBreed}`
    breedList.appendChild(li)

    li.addEventListener('click', (e) => li.style.color = 'blue')
}

const filterBy = (breedList) => {
    const breedDropdown = document.querySelector('#dropdown');
    breedDropdown.addEventListener('change', (e) => {
        let ul = document.querySelector('ul')
        ul.innerText = ""
        let selectedBreeds = breedList.filter(dog => dog[0] === e.target.value);
        selectedBreeds.forEach(breed => showAllBreeds(breed))
    })
}

filterBy(breedList)