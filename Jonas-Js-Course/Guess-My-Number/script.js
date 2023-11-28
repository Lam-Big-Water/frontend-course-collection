'use strict'

// The Random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let body = document.querySelector('body');

let againBtn = document.querySelector('.again-btn');

// let numValue = Number(document.querySelector('.num'));

let guessBtn = document.querySelector('.guess-btn');
console.log(guessBtn);

let numValue = document.querySelector('.num');


let message = document.querySelector('.message');

let scoreValue = document.querySelector('.score');

let highScoreValue = document.querySelector('.highscore');

let score = 20;

let highScore = 0;

guessBtn.addEventListener('click', function() {
    let guessValue = Number(document.querySelector('.guess').value);
    console.log(numValue);


    if (!guessValue) {
        message.textContent = '⛔️ No number!';

    } else if (guessValue === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        numValue.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';

        if (score > highScore) {
            highScore = score;
            highScoreValue.textContent = highScore;
        }
    } else if (guessValue !== secretNumber) {

        if (score > 1) {
            message.textContent = guessValue > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;
            scoreValue.textContent = score;
        } else {
            message.textContent = '💥 You lost the game!';
            scoreValue.textContent = 0;
            body.style.backgroundColor = '#d21111';
        }
    }
});


againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    message.textContent = 'Start guessing...';
    scoreValue.textContent = score;
    numValue.textContent = '?';
    document.querySelector('.guess').value = '';

    body.style.backgroundColor = '#222';

})


