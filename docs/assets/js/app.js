$(document).ready(function() {
    const stickyNavOnClasses = 'sticky-header';

    // Toggle sticky header
    function toggleStickyNav() {        
        if ($(document).scrollTop() > 0) {            
            $('header nav').addClass(stickyNavOnClasses);
        } else {
            $('header nav').removeClass(stickyNavOnClasses);
        }        
    }

    // Scroll arrow
    function arrowFadeOutWithScroll() {    
        $('.fade-out-with-scroll').css("opacity", 1 - $(window).scrollTop() / ($(window).height() / 2));
    }

    // Open menu
    $('.nav-btn').click(function () {                
        $('.nav-menu').addClass('w-full sm:w-4/5 p-6 sm:p-[12vh]');
        $('.nav-menu-wrapper').removeClass('hidden');
    });

    // Close menu
    $('.close-menu-btn, .nav-menu a').click(function () {        
        window.setTimeout(function () {
            $('.nav-menu').removeClass('w-full sm:w-4/5 p-6 sm:p-[12vh]');        
        }, 1);    
        window.setTimeout(function () {
            $('.nav-menu-wrapper').addClass('hidden');
        }, 300);    
    });

    let options = {
        height: null
    };
    $('.dotdotdot').each(function (index, element) {    
        new Dotdotdot(element, options);
    });

    $(document).scroll(function() {
        arrowFadeOutWithScroll();
        toggleStickyNav();
    });

    arrowFadeOutWithScroll();
    toggleStickyNav();
});