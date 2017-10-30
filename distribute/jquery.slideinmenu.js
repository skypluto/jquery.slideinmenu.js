/**
 * jQuery plugin for Mobile Menu Slide In
 *
 * Author: SK Lam
 */
(function() {
	'use strict';

	function _getAnimateCondition(direction, condition, conditiontrue, conditionfalse) {
		var obj = {};
		obj[direction] = condition ? conditiontrue : conditionfalse ;
		return obj;
	}

	$.fn.slideInMenu = function( options ) {

    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var _options = $.extend( {}, $.fn.slideInMenu.defaults, options );

		//stick in the fixed 100% height behind the navbar but don't wrap it
	  $(_options.mainselector).after($('<div id="navbar-height-col"></div>'));

		// Bind the click event for the mainselector
		$(_options.toggler).bind ('click', _options.toggler, function(e){
			var selected = $(this).hasClass('slide-active');

			$(_options.navbarselector).stop().animate(
				_getAnimateCondition (_options.direction, selected, _options.menuneg, '0px')
			);

			$(_options.pagewrapper).stop().animate(
				_getAnimateCondition (_options.direction, selected, '0px', _options.slidewidth)
			);

			$(_options.navigationwrapper).stop().animate(
				_getAnimateCondition (_options.direction, selected, '0px', _options.slidewidth)
			);

			$(_options.footerwrapper).stop().animate(
				_getAnimateCondition (_options.direction, selected, '0px', _options.slidewidth)
			);

			var multipleselector = $.grep([_options.footerwrapper, _options.navigationwrapper, _options.pagewrapper], Boolean).join(", ");
			if (_options.slidermode == 'push') {
				if (_options.fixmobilenavigation) {
					multipleselector = $.grep([_options.footerwrapper, _options.pagewrapper], Boolean).join(", ");
				}
				$(multipleselector).css('position', 'relative');
				$(_options.navbarselector).css({"width":_options.slidewidth, "left":"unset"});
			} else {
				$(multipleselector).css('position', 'unset');
			}
			$(this).toggleClass('slide-active', !selected);
		});

	  $(window).on("resize", function () {
	    if ($(window).width() > _options.breakpoint && $('.navbar-toggle').is(':hidden')) {
	      $(_options.mainselector).removeClass('slide-active');

				if (_options.desktophideselector.trim()) {
					$(_options.desktophideselector).css('display', 'none');
				}
				if (_options.desktopshowselector.trim()) {
					$(_options.desktopshowselector).css('display', 'block');
				}
	    }
	  });

		return this;
	};

	// Plugin defaults
	$.fn.slideInMenu.defaults = {
		mainselector: '#slide-nav',
		navbarselector: '#navbar',
    toggler: '.navbar-toggle',
    pagewrapper: '.main-container',
    navigationwrapper: '.navbar-header',
    footerwrapper: '.footer-container',
		direction: 'left',
		desktophideselector: '',
		desktopshowselector: '',
    slidewidth: '300px',	/* Width of the menu if slide in */
    menuneg: '-100%',
		breakpoint: 767,
		fixmobilenavigation: true, /* True - top nagvigation Menu did not slide */
		slidermode: 'hover', /* hover or push */
	};
}(jQuery));
