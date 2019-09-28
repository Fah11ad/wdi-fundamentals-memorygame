var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];
function checkForMatch() {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}

}
function flipCard() {
	this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

function createBoard() {
	for (var i = 0; i < arrayName.length; i++) {
    // Logic here
    var newListItem = document.createElement('img');
    cardElement.setAttribute('attributeName', 'attributeValue');
	cardElement.setAttribute('data-id', i);
	element.addEventListener('click', cardElement);
	cardElement.getElementsById('game-board').appendChild();
}
}





