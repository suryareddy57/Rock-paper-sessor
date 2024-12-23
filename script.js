class RockPaperScissors {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.choices = ['rock', 'paper', 'scissors'];
        this.initializeElements();
        this.addEventListeners();
    }

    initializeElements() {
        this.playerScoreElement = document.getElementById('player-score');
        this.computerScoreElement = document.getElementById('computer-score');
        this.resultText = document.getElementById('result-text');
        this.choiceButtons = document.querySelectorAll('.choice');
        this.resetButton = document.getElementById('reset');
    }

    addEventListeners() {
        this.choiceButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.playRound(button.dataset.choice);
            });
        });

        this.resetButton.addEventListener('click', () => this.resetGame());
    }

    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    }

    playRound(playerChoice) {
        const computerChoice = this.getComputerChoice();
        const result = this.determineWinner(playerChoice, computerChoice);
        this.updateScore(result);
        this.displayResult(playerChoice, computerChoice, result);
    }

    determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return 'tie';
        
        const winningCombos = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        return winningCombos[playerChoice] === computerChoice ? 'win' : 'lose';
    }

    updateScore(result) {
        if (result === 'win') this.playerScore++;
        if (result === 'lose') this.computerScore++;
        
        this.playerScoreElement.textContent = this.playerScore;
        this.computerScoreElement.textContent = this.computerScore;
    }

    displayResult(playerChoice, computerChoice, result) {
        const messages = {
            win: 'You win!',
            lose: 'Computer wins!',
            tie: "It's a tie!"
        };

        this.resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${messages[result]}`;
    }

    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerScoreElement.textContent = '0';
        this.computerScoreElement.textContent = '0';
        this.resultText.textContent = 'Choose your move!';
    }
}

// Initialize the game
new RockPaperScissors();
