


const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }



//Create Deck
function Deck (suits,ranks, rankScores){
  this.suits = suits
  this.rank = ranks
  this.rankScores = function(){
    for ( j=0; j<ranks.length; j++) {

            for( i=0 ; i< suits.length; i++)
            {


              cardTitle = ranks[j] + " of " + suits[i]
              rankScore = rankScores[ranks[j]]

               cards = new Card(suits[i],ranks[j],cardTitle,rankScore)


              console.log(cards)
              console.log(rankScore)


            }
    }
  }
}



let deck = new Deck(ranks,suits)

function getRandomCard(){

  let fullDeck = createDeck()
  randomCard =   fullDeck[Math.floor(Math.random()*fullDeck.length)];

  //console.log(randomCard)
  return randomCard

}

function shuffleCards(){
  //getRandomCard()
  let shuffledDeck = []
  let randomCard
  const decktoShuffle = createDeck()
  //console.log(decktoShuffle.length)
  let l = 0;
   while ( l<decktoShuffle.length ){
    randomCard = getRandomCard()
    if(!shuffledDeck.includes(randomCard)){
      shuffledDeck.push(randomCard)
      l++
    }

  }
  //console.log(shuffledDeck.length)

  return shuffledDeck
}



function createDeck(ranks,suits,ranksScores){
  let card = []
  let deck  = []

  var card = [
  { rank: 
    suit:
    score:
];

  for (i=0; i < ranks.length; i++){
    for (j=0; j < suits.length; j++){
    card = ranks[i] + " of " + suits[j]
    deck.push(card)
   }
 }
 //console.log(deck)
 return deck;
}

function dealCards(player){
 let shuffledDeck = shuffleCards()
if (player = "player1"){
  playerHand = shuffledDeck.slice(0, 26);
}
else{
  playerHand = arr.slice(27);
}
//console.log(player + " " + playerHand)
return playerHand

}


function play(){
  let round = 1;


   player1Hand= dealCards("player1")
   player2Hand = dealCards("player2")


   for (i=0; i<player1Hand.length; i++)
   {
     console.log("round " + round)
     console.log("Player 1 card " + player1Hand[i])
     console.log("Player 2 card " + player2Hand[i])
     //rankScore = rankScores[ranks[j]]
     if(player1Hand[i] > player2Hand[i]){

        console.log("player one won this round")
     }
     else{
       console.log("player two won this round")
     }

     round ++

   }

//console.log("roundwinner" + roundwinner )
}



module.exports.createDeck = createDeck
module.exports.shuffleCards = shuffleCards
module.exports.dealCards = dealCards
module.exports.play = play
