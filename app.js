
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
 const possibleChoices = document.querySelectorAll('button')
 let userChoice
 let computerChoice
 let resultanswer = 0

 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChice();
    resultofUser()
 }))
 
 function generateComputerChice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber)
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
 }

 function resultofUser (){
    if(computerChoice === userChoice){
          resultanswer +=2
    }else{
        resultanswer--
    }
    resultDisplay.innerHTML = resultanswer
 }