const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e77e22', '#2ecc71']

const SQAURES = 500

for(let i = 0; i < SQAURES; i++) {
    const sqaure = document.createElement('div')
    sqaure.classList.add('square')

    sqaure.addEventListener('mouseover', () => setColor(sqaure))
    sqaure.addEventListener('mouseout', () => removeColor(sqaure))

    container.appendChild(sqaure)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}