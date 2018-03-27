// Select all links with hashes and class smooth-scroll
$('a[href*="#"].smooth-scroll')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });




$('.clients-carousel').owlCarousel({
    items: 5,
    autoPlay: true,
    pagination: false
});




$(window).bind('scroll', function(){
    var offset = $(document).scrollTop();

    if (offset >= 200) {
        //$('.st-navbar').addClass("st-navbar-mini");
        $('.backtotop').removeClass("d-none");
    } else if (offset <= 199) {
        //$('.st-navbar').removeClass("st-navbar-mini");
        $('.backtotop').addClass("d-none");
    }
});



//scrollSpy function
function scrollSpy() {
    var sections = ['body', 'about', 'transfers', 'tours', 'contacts'];
    var current;
    for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= ($(window).scrollTop() + 200) ) {
            current = sections[i];
        }
    }

  

    var activelink = $("a[href='#"+current+"']");

    

    $("a").not("a[href='#"+current+"']").parent().removeClass('active');
    activelink.parent().addClass('active');
    //$("nav-item > a[href='#"+current+"']").addClass('active');
    //$("nav-item > a").not("a[href='#"+current+"']").removeClass('active');
}

// smooth scrolling navigation
$("nav-item a").click( function() {
    var target = $(this).attr("href");
    $("body, html").animate({
        scrollTop: $(target).offset().top
    }, 300);
    return false;
});

//scrollSpy call
$(document).ready( function() {
    scrollSpy();
});
$(window).scroll( function() {
    scrollSpy();
});