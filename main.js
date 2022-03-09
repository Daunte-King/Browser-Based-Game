console.log("Javascript connected");
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let MasterDeck = buildMasterDeck();
let shuffledDeck = shuffleDeck();
let playerDeck = makeplayerDeck();
let cpuDeck = makecpuDeck();

function buildMasterDeck() {
  const deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
       face: `${suit}${rank}`,
       //score
      });
    });
  });
  return deck;
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
    let playerDeck = [];
    const half = Math.ceil(shuffledDeck.length / 2);

        playerDeck.push(shuffledDeck.slice(0, half));
        return playerDeck;
}


function makecpuDeck() {
    let cpuDeck = [];
    const half = Math.ceil(shuffledDeck.length / 2);

        cpuDeck.push(shuffledDeck.slice(-half));
        return cpuDeck;
}

function playGame() {
    warArr = [];
    warArr.push(playerDeck[playerDeck.length - 1]);
    warArr.push(cpuDeck[cpuDeck.length - 1]);
    console.log(warArr);
    // if (warArr[0].rank > warArr[1].rank ){
    //     playerDeck.push(warArr);
    // }
    // if (warArr[0].rank < warArr[1].rank) {
    //     cpuDeck.push(warArr);
    // }else {

    // }
}
console.log(playGame());
