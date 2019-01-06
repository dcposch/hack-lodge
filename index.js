
const width = window.innerWidth
const height = window.innerHeight - 120

const elemBird = document.querySelector('#bird')
const elemPipeU = document.querySelector('#pipe-upper')
const elemPipeL = document.querySelector('#pipe-lower')

let pressedSpace = false
let birdY = height / 2
let birdYVel = 0
let pipeY = height / 2
let pipeX = width - 100

// Listen for keystrokes
window.addEventListener('keydown', function (e) {
    console.log('pressed ' + e.key)
    pressedSpace = e.key === ' '
})

// Draw the first frame
// After that, we'll draw one 60x per second
frame()

function frame() {
    if (pressedSpace) {
        birdYVel = -10
        pressedSpace = false
    } else {
        birdYVel += 0.3
    }
    birdY += birdYVel

    pipeX -= 5
    if (pipeX < 0) {
        pipeX = width - 100
        pipeY = Math.round(Math.random() * (height - 200))
    }

    elemBird.style.top = birdY + 'px'

    elemPipeU.style.top = 0
    elemPipeU.style.left = pipeX + 'px'
    elemPipeU.style.width = '40px'
    elemPipeU.style.height = pipeY + 'px'

    elemPipeL.style.top = (pipeY + 160) + 'px'
    elemPipeL.style.left = pipeX + 'px'
    elemPipeL.style.width = '40px'
    elemPipeL.style.height = (height - pipeY - 160) + 'px'

    if (birdY < height && birdY > 0) {
        window.requestAnimationFrame(frame)
    }
}

