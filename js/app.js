let adviceNumber = document.getElementById('advice-number')
let adviceText = document.getElementById('advice')
let diceButton = document.getElementById('dice')

diceButton.addEventListener('click', getAdvice)

async function getAdvice () {
    let response = await fetch('https://api.adviceslip.com/advice')
    let data = await response.json()
    
    adviceNumber.innerText = data.slip.id
    adviceText.innerText = data.slip.advice
    
}
