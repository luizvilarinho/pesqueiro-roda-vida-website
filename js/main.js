var galeries = {
 type:[
  {
    name:"pesca",
    css:"pesca",
    quantidade:9
  },
  {
    name:"estrutura",
    css:"estrutura",
    quantidade:7
  },
  {
    name:"restaurante",
    css:"restaurante",
    quantidade:11
  }
 ],
  loadImgsGalery:function(galeryName, imageNumber){
    var template = `
      <div class="col-sm-6 col-md-4 ${galeryName}">
        <div class="portfolio-item">
          <div class="hover-bg"> 
              <a href="img/galeria/${galeryName}/${galeryName}_${imageNumber}.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                <div class="hover-text">
                  <h4>clique para ampliar</h4>
                </div>
                  <img src="img/galeria/${galeryName}/${galeryName}_${imageNumber}.jpg" class="img-responsive" alt="Project Title"> 
              </a>
            </div>
        </div>
      </div>
    `;

    $(".portfolio-items").append(template);
  },
  init:function(){
    for(var n=0; n< this.type.length; n++){
      var nomeGaleria = this.type[n].name;
      var qntImages = this.type[n].quantidade;

      for(var i = 1; i<qntImages; i++){
        this.loadImgsGalery(nomeGaleria, i);
      }
      
    }
  },
}

function main() {

(function () {
   'use strict';
   galeries.init();

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    /*$(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });
    */

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
	// Testimonial Slider
	  	$(document).ready(function() {
	      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });
        
  	});	

}());


}
main();