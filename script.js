let playerSelection;
let computerSelection;
let roundPlayed;
let win = 0;
let lose = 0;
let wOrl;

// playerSelection = playerSelection.toLowerCase();


function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3) + 1;

    // if (pick == 1) {
    //     selection = "rock";
    // } else if (pick == 2) {
    //     selection = "paper";
    // } else {
    //     selection = "scissors";
    // }
    return pick;
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie game.";
    } else if (computerSelection == 1 && playerSelection == 2) {
        return "You lose! Paper beats rock.";
    } else if (computerSelection == 1 && playerSelection == 3) {
        return "You win! Scissors beats paper.";
    } else if (computerSelection == 2 && playerSelection == 1) {
        return "You win! Paper beats rock.";
    } else if (computerSelection == 2 && playerSelection == 3) {
        return "You lose! Rock beats scissors.";
    } else if (computerSelection == 3 && playerSelection == 1) {
        return "You lose! Scissors beats paper.";
    } else {
        return "You win! Rock beats scissors.";
    }
}

function game() {
    win = 0;
    lose = 0;

    for (let i = 1; i <= 5; i++) {

        playerSelection = prompt("Type 1 for paper, 2 for rock, or 3 for scissors: ");
        computerSelection = getComputerChoice();
        roundPlayed = playRound(playerSelection, computerSelection);

        wOrl = roundPlayed.charAt(4);

        if (wOrl == "w") {
            win += 1;
        } else if (wOrl == "l") {
            lose += 1;
        }

        console.log(roundPlayed);
        // console.log(win);
        // console.log(lose);
        // console.log(wOrl);
    }

    console.log(`You've won ${win} games and lost ${lose} games!`);

}