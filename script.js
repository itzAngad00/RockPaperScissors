const choices = ['rock', 'paper', 'scissors'];
const resultText = document.getElementById('resultText');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        determineWinner(userChoice, computerChoice);
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        resultText.textContent = 'Its a tie!'
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        resultText.textContent ='You win!'
    } else {
        resultText.textContent ='You lose!'
    }
}