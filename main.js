const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let MasterDeck = buildMasterDeck();
let shuffledDeck = shuffleDeck();
let playerDeck = makeplayerDeck();
let cpuDeck = makecpuDeck();
let playGame = playGame();

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

function playGame() {
    let warArr = [];
    warArr.push(playerDeck.pop());
    warArr.push(cpuDeck.pop());
    if (warArr[0]>warArr[1])

    return warArr;
}
