/* Fix for 3.0.0 */
$.fn.andSelf = function() {
  return this.addBack.apply(this, arguments);
}

$(document).ready(function(e){
  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200).css('display', 'flex');    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
 });

  /* Home Carousel */
  $('.hero-slider').bxSlider();

  /* Toggle Search Panel - Desktop */
  $('.icons-wrapper .search-icon').on('click', function () {
    if ($('.icons-wrapper .search-icon-box').hasClass('show-background')) {
        $('.icons-wrapper .search-icon-box').removeClass('show-background');
    } else {
        $('.icons-wrapper .search-icon-box').addClass('show-background');
    }
    $('.icons-wrapper .search-icon-box .search-panel').toggle();
  });


  /* for slide in */
  $('#slide-nav').slideInMenu({
    desktophideselector: '.search-panel.show-mobile',
    desktopshowselector: '.centerNav .nav',
  });

  /* For slide in Menu*/
  /* Mobile Menu Click In - Left for Menu/Right for Search */
  $('#mobile-menu-button').on('click', function() {
    if ($('#navbar').filter('.collapse.in')) {
      if ($('#navbar').filter('.collapse.in').length == 0) {
        $('.search-panel.show-mobile').css('display', 'none');
        $('.centerNav .nav').css('display', 'block');
        $('#mobile-menu-button i').removeClass('fa-bars').addClass('fa-close');
        $('#mobile-search-button i').css('display', 'none');
      } else {
        $('#mobile-menu-button i').removeClass('fa-close').addClass('fa-bars')
        $('#mobile-search-button i').css('display', 'block');
      }
    }
  });
  $('#mobile-search-button').on('click', function() {
    if ($('#navbar').filter('.collapse.in').length == 0) {
      $('.search-panel.show-mobile').css('display', 'block');
      $('.centerNav .nav').css('display', 'none');
      $('#mobile-search-button i').removeClass('fa-search').addClass('fa-close');
      $('#mobile-menu-button i').css('display', 'none');
    } else {
      $('#mobile-search-button i').removeClass('fa-close').addClass('fa-search')
      $('#mobile-menu-button i').css('display', 'block');
    }
  });
  /* Mobile Menu Click In */

});
