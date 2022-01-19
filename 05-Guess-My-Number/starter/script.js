'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
const $ = (x) => document.querySelector(x) // creating a self document function

const setAnswer = (answer) => {
    $('.number').textContent = answer
}
const setMessage = (message) => {
    $('.message').textContent = message
}
const setScore = (score) => {
    $('.score').textContent = score
}
const setHighScore = (highscore) => {
    $('.highscore').textContent = highscore
}
const setBackground = (type) => {
    if (type === 1) $('body').style.backgroundColor = 'green'
    else if (type === 0) $('body').style.backgroundColor = 'red'
    else if (type === "reset") $('body').style.backgroundColor = '#222'
}
$('#checkGuess').addEventListener('click', (e) => {
    const guess = Number($('#inputGuess').value)
    if (!guess) setMessage("🛑 No Number")
    else if (guess !== secretNumber) {
        if (score > 1) {
            setScore(score--)
            setMessage(guess > secretNumber ? "⚡ Number is too high" : "📭 Number is too low")
        } else {
            setBackground(0)
            setAnswer(secretNumber)
            setMessage("😭 You have lost the game")
        }
    }
    else if (guess === secretNumber) {
        setBackground(1)
        setAnswer(secretNumber)
        setHighScore(score)
        setMessage("🎯 Correct Guess...")
    }
})

$('.again').addEventListener('click', () => {
    score = 20
    setScore(score) // reset the score
    setMessage("Guess the Number 😍") // reset the message
    setBackground("reset")
    setAnswer("?")
})