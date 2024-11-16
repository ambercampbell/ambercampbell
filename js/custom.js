(function ($) {

  "use strict";

      // PRE LOADER
      $(window).load(function(){
        $('.preloader').fadeOut(1000); // set duration in brackets    
      });


      // navigation Section
      $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
      });


      // Parallax Js
      function initParallax() {
        $('#home').parallax("50%", 50);
        $('#service').parallax("50%", 40);
        $('#about').parallax("50%", 20);
        $('#work').parallax("50%", 30);
        $('#contact').parallax("50%", 10);
        }
      initParallax();
      

      // smoothscroll js
      $(function() {
        $('#home a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
          event.preventDefault();
        });
      });  


      // WOW Animation js
      new WOW({ mobile: false }).init();

})(jQuery);

/*=========================================================================
		Navigation Functions
	=========================================================================*/
	$('.section-toggle').on('click', function(){
		var $this = $(this),
			sect = $( '#' + $this.data('section') ),
			current_sect = $('.section.active');
		if(sect.length == 1){
			if( sect.hasClass('active') == false && $('body').hasClass('section-switching') == false ){
				$('body').addClass('section-switching');
				if( sect.index() < current_sect.index() ){
					$('body').addClass('up');
				}else{
					$('body').addClass('down');
				}
				setTimeout(function(){
					$('body').removeClass('section-switching up down');			
				}, 2500);
				setTimeout(function(){
					current_sect.removeClass('active');
					sect.addClass('active');
				}, 1250);
				if( sect.hasClass('border-d') ){
					$('body').addClass('border-dark');
				}else{
					$('body').removeClass('border-dark');
				}
			}
		}
	});
	