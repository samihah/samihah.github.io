// A $( document ).ready() block.
$( document ).ready(function() {
	$('.carousel').carousel({
		interval: false
	})

	$("#bna").click(function() {
		$("#featuredwork").hide();
		$("#carousel-bna").show();
	});

	$("#bna-close").click(function() {
		$("#carousel-bna").hide();
		$("#featuredwork").show();
	});

	$("#gb").click(function() {
		$("#featuredwork").hide();
		$("#carousel-gb").show();
	});

	$("#gb-close").click(function() {
		$("#carousel-gb").hide();
		$("#featuredwork").show();
	});

	$("#6wla").click(function() {
		$("#featuredwork").hide();
		$("#carousel-6wla").show();
	});

	$("#6wla-close").click(function() {
		$("#carousel-6wla").hide();
		$("#featuredwork").show();
	});

});