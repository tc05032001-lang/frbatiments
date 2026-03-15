(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);









const animationManager = {

    init: function() {
        this.buildElements()
        this.startIntervalCounter()
    },
    getRandomInt: function(min, max, string = true) {
      min = Math.ceil(min);
      max = Math.floor(max);
      if(string){
        return String(Math.floor(Math.random() * (max - min)) + min)
      }
      return Math.floor(Math.random() * (max - min)) + min
    },

    buildElements: function() {
       const sparkElements = document.querySelectorAll('.spark')
       const weldElements = document.querySelectorAll('.weld-container')

       sparkElements.forEach((spark, index) => {

        // create weld item first
        let sibling = weldElements[index]
        let baseAnimationDelay = animationManager.getRandomInt(1,15)
        let weld = document.createElement('div')
        weld.classList = "weld"
        weld.style.animationDelay = String(baseAnimationDelay) + "s"
        sibling.appendChild(weld)

        // sparks start here
        sparkCount = 25
        for( var i = 0; i <=sparkCount; i++){
            sparkDiv = animationManager.generateSpark(baseAnimationDelay)
            spark.appendChild(sparkDiv)
        }
       })
    },
    generateSpark: function(delay) {
        let sparkDiv = document.createElement('div')
        // set standard properties
        sparkDiv.classList = 'particle'
        sparkDiv.style.top = animationManager.getRandomInt(25,35) + "px"
        sparkDiv.style.left =  animationManager.getRandomInt(0,5) + "px"
        sparkDiv.style.width = animationManager.getRandomInt(1,2) + "px"
        sparkDiv.style.height = animationManager.getRandomInt(4,7) + "px"
        // make some uniqness
        if(animationManager.getRandomInt(1,3) == 2){
          sparkDiv.classList = sparkDiv.classList + " negative-X"
        } else {
          sparkDiv.classList = sparkDiv.classList + " positive-X"
        }
        //create a base delay
        let combinedDelay = (animationManager.getRandomInt(0,9)/10) + parseFloat(delay)
        sparkDiv.style.animationDelay = String(combinedDelay) + "s" 
        return sparkDiv   
    },
    startIntervalCounter: function() {
      setInterval( () => {
        materialSVG = document.getElementById('material-group')
        materialSVG.classList.toggle('hidden')
      }, 45000)
    }
}
document.addEventListener("DOMContentLoaded", evt => {
	animationManager.init()
})






























