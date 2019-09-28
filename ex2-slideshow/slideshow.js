let index = 0;
let numSlides = 5;
showSlide(0);

function showSlide(slideIndex) {
	document.getElementById(slideIndex).style.display = "block";
}

function hideSlide(slideIndex) {
	document.getElementById(slideIndex).style.display = "none";
}

/**
 * hide current img, change index, show next/prev img
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