// JavaScript Document
$(document).ready(function(e) {
	//Function To show logo
	var showLogo = function(){
		$("#main-logo").hide();
		$("#main-logo").delay(3000).fadeIn(3000);
	}
	//Function to animate text
	var animateHeading = function(){
		$("#main-title").hide();
		$("#main-title").delay(5000).slideDown({
			duration:1000,
			easing:"swing",	
			});
		$("#explore").hide();
		$("#explore").delay(5500).fadeIn(3000);
	}
	showLogo();
	animateHeading();
});