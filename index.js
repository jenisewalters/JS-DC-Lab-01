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

const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }



deck.createDeck(ranks,suits,rankScores);
// deck.shuffleCards();
// deck.dealCards("player1");
// deck.dealCards("player2");
// deck.play();
