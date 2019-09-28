let index = 0;
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
