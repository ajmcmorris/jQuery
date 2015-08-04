$(function(){

var $list = $('.remove');
var $add = $('#add');
var $innH = $('#innH');
var $innW = $('#innW');
var $pgX = $('#pgX');
var $pgY = $('#pgY');
var $screenX = $('#scnX');
var $screenY = $('#scnY');
var $screenW = $('#scnW');
var $screenH = $('#scnH');
var $width = $(window).width();
var $height = $(window).height();

	$innH.append(window.innerHeight);
	$innW.append(window.innerWidth);
	$pgX.append(window.pageXOffset);
	$pgY.append(window.pageYOffset);
	$screenY.append(window.screenY);
	$screenX.append(window.screenX);
	$screenW.append($width);
	$screenH.append($height);

$(window).resize(function(){
	$screenW.text($width);
	$screenH.text($height);
});

	 $list.on('click',function(e){

		$(this).fadeOut(1000);
	
	});
	 
	 $add.on('click', function(e){
	 	$('li:last').fadeIn(1000).after('<li class="list-group-item remove">Added New Item...<span class="badge"><a href="#"><i class="fa fa-times fa-fw"></i></a></span></li>');
	 });

});