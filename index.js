const buttonE1 = document.getElementById("roll-button");

const diceElement1 = document.getElementById("dice1");
const diceElement2 = document.getElementById("dice2");

const rollId = document.getElementById("roll-history");

let historyList1 = [];
let historyList2 = [];

function rollDice1 () {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceElement1.innerHTML = diceFace;
    historyList1.push(rollResult);
    updateRollHistory();
    roll1 = rollResult;
}

function rollDice2 () {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceElement2.innerHTML = diceFace;
    historyList2.push(rollResult);
    updateRollHistory();
    roll2 = rollResult;
}

function updateRollHistory() {
    rollId.innerHTML = "";
    for (let i = 0; i < historyList1.length; i++) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i+1} : <span> ${getDiceFace(historyList1[i])} </span> <span> ${getDiceFace(historyList2[i])} </span>`;
        rollId.appendChild(listItem)
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return ""
    }
}


buttonE1.addEventListener("click", () => {
    diceElement1.classList.add("roll-animation");
    diceElement2.classList.add("roll-animation");
    setTimeout(() => {
        diceElement1.classList.remove("roll-animation");
        diceElement2.classList.remove("roll-animation");
        rollDice1()
        rollDice2()
        const winnerText = compareRolls();
        document.getElementById("winner").textContent = winnerText;
    }, 1000)
});


function compareRolls() {
    const lastRoll1 = historyList1[historyList1.length - 1];
    console.log(lastRoll1)
    const lastRoll2 = historyList2[historyList2.length - 1];

    if (lastRoll1 > lastRoll2) {
        return "Player 1 wins!";
    } else if (lastRoll2 > lastRoll1) {
        return "Computer wins!";
    } else {
        return "It's a tie!";
    }
}


