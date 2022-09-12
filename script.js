'use strict';
//getting the element using the query Selector
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log((document.querySelector('.guess').value));
document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const game = () => {
  document.querySelector('.check').addEventListener('click', e => {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //  When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = 'No Number';
      displayMessage('No number!');
      // When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = 'Correct Number🎉';
      displayMessage('Correct Number🎉');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#0984e3';
      document.querySelector('.btn').style.backgroundColor = '#20bf6b';
      document.querySelector('.check').style.backgroundColor = '#20bf6b';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highScore').textContent = highScore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : '🏢 Too Low';
        displayMessage(guess > secretNumber ? 'Too High' : '🏢 Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        //document.querySelector('.message').textContent = '💣 You lost the game';
        displayMessage('💣 You lost the game');
        document.querySelector('.score').textContent = 0;
      }
    }
    // When guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💣 You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🏢 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💣 You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
  });
};

game();

const reset = () => {
  // Challenge reset guess button and background
  document.querySelector('.again').addEventListener('click', e => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 50) + 1;

    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#20bf6b';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.btn').style.backgroundColor = '#0984e3';
    document.querySelector('.check').style.backgroundColor = '#0984e3';
  });
};

reset();
