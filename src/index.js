const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let allBreedsArray

// Event Listener
document.addEventListener('DOMContentLoaded', () => {
//fetch images using URL 
fetchImg() 
fetchDogBreeds()

// challenge 4: filtering 
let select = document.querySelector('select')
select.addEventListener('change', (e) => {
    let value = e.target.value 
    let ul = document.getElementById('dog-breeds')

    ul.querySelectorAll('li').forEach(li => li.remove())

    allBreedsArray.forEach(breed => {
        if(breed[0] === value){
            createLi(breed)
        }
    })
})


})

// fetch 
const fetchImg = () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => json.message.forEach(url => buildImageElement(url)))
}

const fetchDogBreeds = () => {
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        allBreedsArray = parseHash(json.message)
        allBreedsArray.forEach(breed => createLi(breed))
    })
}

//DOM manipulation 
const buildImageElement = (url) => {
    let div = document.getElementById('dog-image-container')
    let img = document.createElement('img')
    img.src = url 

    div.appendChild(img)
}

const createLi = (breed) => {
    let ul = document.getElementById('dog-breeds')
    let li = document.createElement('li') 
    li.innerText = breed
    
    li.addEventListener('click', (e) => {
        e.target.style.color = "blue";
    })

    ul.appendChild(li)
}

// for fetchDogBreeds method 
const parseHash = (hash) => {
    let breedsArray = [] 
    for (const key in hash) {
        breedsArray.push(key)
    }
    return breedsArray
}
