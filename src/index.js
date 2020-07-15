console.log('%c HI', 'color: firebrick');
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let allBreedsArray
// Event Listener
document.addEventListener('DOMContentLoaded', () => {

    // Fetch
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => json.message.map(url => buildImageElement(url) ) )

    fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        allBreedsArray = parseHash(json.message)
        allBreedsArray.forEach(breed => createLi(breed))
    })

    let select = document.querySelector('select')
    select.addEventListener('change', (e) => {
        let value = e.target.value
        let ul = document.getElementById('dog-breeds')

        ul.querySelectorAll('li').forEach(li => li.remove())

        allBreedsArray.forEach(breed => {
            if (breed[0] == value){
                createLi(breed)
            }
        })
    })
})



// DOM Manipulation
const buildImageElement = (url) => {
    let img = document.createElement('img')
    img.src = url 
    let div = document.getElementById('dog-image-container')
    div.appendChild(img)
}



const parseHash = (hash) => {
    let breedsArray = []
    for (const key in hash) {
       breedsArray.push(key)
    }
    return breedsArray
}

const createLi = (breed) => {
    let ul = document.getElementById('dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed

    // color change
    li.addEventListener('click', (e) => {
        e.target.style.color = "#0066ff";
    })
    ul.appendChild(li)
}



