let index = 0;
let numSlides = 5;
showSlide(0);

/**
 * Shows the slide of the given index.
 * @param {number} slideIndex - the index of the slide, which is the id attribute of its enclosing div.
 */
function showSlide(slideIndex) {
	document.getElementById(slideIndex).style.display = "block";
}

/**
 * Hides the slide of the given index.
 * @param {number} slideIndex - the index of the slide, which is the id attribute of its enclosing div.
 */
function hideSlide(slideIndex) {
	document.getElementById(slideIndex).style.display = "none";
}

/**
 * Handle button clicks for both Next and Previous buttons.
 * @param {number} direction - (1) for Next, (-1) for Previous.
 */
function buttonClick(direction) {
	// show next image
	if (direction > 0) {
		hideSlide(index);
		index++;
		if(index >= numSlides)
		{
			index = 0;
		}
		showSlide(index);
	}
	// show previous image
	else if(direction < 0) {
		hideSlide(index);
		index--;
		if(index < 0)
		{
			index = numSlides - 1;
		}
		showSlide(index);
	}
	else {
		console.log("Congratulations! You have somehow broken the buttons.");
	}
}