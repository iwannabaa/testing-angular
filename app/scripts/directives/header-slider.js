'use strict';

angular.module('torogozApp')
	.directive('headerSlider', function () {
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
	      var fadeNext = function() {
	      	$('.slider img').first().fadeOut().appendTo($('.slider'));
        	$('.slider img').first().fadeIn();
	      };

	      setInterval(fadeNext, 8000);
	    },
			replace: true
		};
	});