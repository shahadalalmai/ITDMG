


var cards = [
{
	rank: 'elgene',
	cardImage: 'images/Elgene.jpg'
},
{
	rank: 'elgene',
	cardImage: 'images/Elgene.jpg'
},


{
	rank: 'dhuwayhi',
	cardImage: 'images/Dhuwayhi.jpg'
},
{
	rank: 'dhuwayhi',
	cardImage: 'images/Dhuwayhi.jpg'
},


{
	rank: 'ankit',
	cardImage: 'images/Ankit.jpg'
},
{
	rank: 'ankit',
	cardImage: 'images/Ankit.jpg'
},


{
	rank: 'rufian',
	cardImage: 'images/Rufian.jpg'
},
{
	rank: 'rufian',
	cardImage: 'images/Rufian.jpg'
}





];

const cardsInPlay = [];



function flipCardBack(rank1, rank2){

// let cardId = this.getAttribute('data-id');
// console.log("flip Card BAck Func");
// console.log(rank1, rank2);
let arr1 = cards.map( card => card.rank == rank1 )
let arr2 = cards.map( card => card.rank == rank2)
// console.log(arr1)
// console.log(arr2)
let index1 = arr1.findIndex( element => element == true)
let index2 = arr2.findIndex( element => element == true)
// console.log(arr1)
// console.log(index1)
// console.log(index2)
img1 = document.getElementById(index1);
img11 = document.getElementById(index1+1);
img2 = document.getElementById(index2);
img22 = document.getElementById(index2+1);
// console.log(img1)
// console.log(img2)
img1.setAttribute('src', 'images/back.png');
img11.setAttribute('src', 'images/back.png');
img2.setAttribute('src', 'images/back.png');
img22.setAttribute('src', 'images/back.png');
// cardsInPlay.pop();
// cardsInPlay.pop();
}



function checkForMatch() {
let even = cardsInPlay.length % 2
// console.log("This is cardsInPlay Array")
// console.log(cardsInPlay);

// for (let i = 0 ; i <= cardsInPlay.length ; i++)
// {

if (even == 0){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		// alert("You found a match!");
		Swal.fire(
		  'Good job!',
		  'You found a match of IT member!',
		  'success'
		);

	} else {
		// alert("Sorry, try again");
		Swal.fire('Sorry, try again');
		flipCardBack(cardsInPlay[0], cardsInPlay[1]);
	}

	cardsInPlay.pop();
	cardsInPlay.pop();

} // end if === 2

// } // end for loop

};// end of checkForMatch func

function flipCard(){

	let cardId = this.getAttribute('id');

	// console.log("This is CardId")
	// console.log(cardId);
	// console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	// console.log(cards[cardId].suit);
	// console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();

}; //end of flipCard func


function creatBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


creatBoard();
