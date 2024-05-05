const author = document.querySelector('.author')
const desc = document.querySelector('.description')
const btn_prev = document.querySelector('.btn-prev')
const btn_next = document.querySelector('.btn-next')

let review = [
    {
        id: 1,
        name: 'Sara',
        description: 'Some letter dev'
    }, 
    {
        id: 2,
        name: "Favell",
        description: "Very skill dev"
    }
]

let startItem = 0

window.addEventListener('DOMContentLoaded', function() {
    showPerson(startItem)
})

function showPerson(person) {
    const item = review[person]
    author.textContent = item.name
    desc.textContent = item.description
}

btn_next.addEventListener('click', function() {
    startItem++
    if (startItem > review.length - 1) {
        startItem = 0
    }
    showPerson(startItem)
})

btn_prev.addEventListener('click', function() {
    startItem--
    if (startItem < 0) {
        startItem = review.length - 1
    }
    showPerson(startItem)
})