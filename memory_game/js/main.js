var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = "User flipped" + " " + cards[0];
var cardTwo = "User flipped" + " " + cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again!");
	}
	}

