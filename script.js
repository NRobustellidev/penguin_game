/* Find the Penguin Game: Chapter 11 */

// This script will run a function to determine where the yeti hides in.

// Event listener to run the game function when the page loads
window.addEventListener("load", newGame);

// Click event listener for the play again button
document.getElementById("button").addEventListener("click", function() {
	window.location.reload();
});

// Function definition of the newGame() function
function newGame() {
	// Generate a random integer between 2 and 10
	let = randNum = Math.floor(Math.random() * 9) + 2;
	// Build a collection of <div>s, use the random number to select one and add the yeti ID to that element
	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
	// Add an event listener to the <div> with the id of yeti
	document.getElementById("yeti").addEventListener("click", function() {
		window.alert("ROAR! You found the yeti! You lose!");
		document.getElementById("sound").play();
	});
	
}