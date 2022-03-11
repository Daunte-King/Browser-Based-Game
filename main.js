const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const MasterDeck = buildMasterDeck();
const shuffledDeck = shuffleDeck();
const playerDeck = makeplayerDeck();
const cpuDeck = makecpuDeck();
let playerTemp = [];
let cpuTemp = [];
let cpuWins = 0; playerWins = 0;
let playerscardEl = document.getElementById("players-card");
let cpuscardEl = document.getElementById("cpu-card");

document.querySelector('button').addEventListener('click',playGame);


function buildMasterDeck() {
  const deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
       face: `${suit}${rank}`,
       value: getValue(rank)
      });
    });
  });
  return deck;
}

function getValue(rank) {
    if (Number(rank)){
        return Number(rank);
    }else if(rank === "J"){
        return 11;
    }else if(rank === "Q"){
        return 12;
    }else if(rank === "K"){
        return 13;
    }else {
        return 14;
    }
}

function shuffleDeck() {
    let tempDeck = [...MasterDeck];
    for(let i = tempDeck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = tempDeck[i];
        tempDeck[i] = tempDeck[j];
        tempDeck[j] = temp;
    }

    return tempDeck;
}

function makeplayerDeck() {
    const half = Math.ceil(shuffledDeck.length / 2);
    return  shuffledDeck.slice(0, half);
}

function makecpuDeck() {
    const half = Math.ceil(shuffledDeck.length / 2);
    return shuffledDeck.slice(-half);
}

function endGame(){

    if (playerDeck.length === 0 ){
        cpuWins++;
        document.getElementById("win/loss-message").innerHTML = "Cpu Wins the Game!";
        document.getElementById("Cpu-Games-Won").innerHTML = cpuWins;
    } else if (cpuDeck.length === 0){
        playerWins++;
        document.getElementById("win/loss-message").innerHTML = "Player Wins the Game!";
        document.getElementById("Player-Games-Won").innerHTML = playerWins;
    }
}



function playGame() {

    playerTemp.push(playerDeck.splice(1, 1)[0]);
    cpuTemp.push(cpuDeck.splice(0, 1)[0]);
        render();

    if (cpuTemp[cpuTemp.length -1].value < playerTemp[playerTemp.length -1].value){
        playerDeck.push(...cpuTemp,...playerTemp);
        cpuTemp.length = 0; playerTemp.length = 0;
        document.getElementById("win/loss-message").innerHTML = "Player Wins Round!";

    }else if (cpuTemp[cpuTemp.length -1].value > playerTemp[playerTemp.length -1].value){
        cpuDeck.push(...cpuTemp,...playerTemp);
        cpuTemp.length = 0; playerTemp.length = 0;
        document.getElementById("win/loss-message").innerHTML = "Cpu Wins Round!"

    }else {
        document.getElementById("win/loss-message").innerHTML = "It's a tie! WAR"
        playGame();


    }


    document.getElementById('Pl-Card-Count').innerHTML = playerDeck.length;
    document.getElementById('Cpu-Card-Count').innerHTML = cpuDeck.length;
    endGame();
}

function render() {
    //   playerTemp[playerTemp.length - 1]
    //    const playerCardEl = document.createElement("div")
       // playerCardEl.className = `card ${playerTemp[playerTemp.length - 1].face}`
        playerscardEl.innerHTML = `<div class=" ${playerTemp[playerTemp.length - 1].face} card"></div>`;
        cpuscardEl.innerHTML = `<div class=" ${cpuTemp[cpuTemp.length - 1].face} card"></div>`;

   }
