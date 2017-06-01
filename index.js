/*
Deck of cards
Player 1 Hand
Player 2 Hand
Play Game
rounds
Rounds Won
Final Winner


*/

const deck = require('./deck.js')



deck.createDeck();
deck.shuffleCards();
deck.dealCards("player1");
deck.dealCards("player2");
deck.play();
