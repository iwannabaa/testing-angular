'use strict';

angular.module('torogozApp')
	.directive('headerSlider', function ($timeout) {
		return {
			restrict: 'E',
			template: 	'<div class="slider">' +
										'<img src="images/hero-1.jpg" class="slide">' +
										'<img src="images/hero-2.jpg" class="slide">' +
										'<img src="images/hero-3.jpg" class="slide">' +
										'<img src="images/hero-4.jpg" class="slide">' +
										'<img src="images/hero-5.jpg" class="slide">' +
									'</div>',
			link: function() {
	      $('.slider img:not(:first)').hide();

	      setInterval(function() {
	      	$('.slider img').first().fadeOut().appendTo($('.slider'));
        	$('.slider img').first().fadeIn();
	      }, 8000);

	      $(window).resize(function(){
	      	var slidesContainer = $('.slider'),
	      			slides = slidesContainer.children(),
	      			image = $(slides[0]),
	      			parent = slidesContainer.parent();

	      	if (parent.outerWidth() < image.outerWidth()) { // Image is larger than viewport
	      		var excedent = image.width() - parent.width();

	      		slides.each(function(){
	      			$(this).css({'left': excedent/-2});
	      		});
	      	}
	      });

	      $timeout(function(){ $(window).resize(); }, 500);
	    },
			replace: true
		};
	});