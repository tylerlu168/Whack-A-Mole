const score = document.querySelector()
const moles = document.querySelectorAll('.mole')

for(let mole of moles)
{
    mole.addEventListener('click', handleClick)
}

function handleClick(e)
{
    const mole = e.target
    mole.classList.remove('up')
    score.textContent = Number(score.textContent) + 100
}

function start(){
    peek()
}

function peek() {
    const mole = moles[Math.random() * moles.length % 1]
}