(function ($) {
    "use strict";

    new WOW().init();


    /*---background image---*/
        $('[data-bgimg]').each(function () {
            var bgImgUrl = $(this).data('bgimg');
            $(this).css({
                'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
            });
        });

    /*---stickey menu---*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            screensize = $(window).width();
        if (screensize >= 319) {
            if (scroll < 100) {
                $(".sticky-header").removeClass("sticky");
            } else {
                $(".sticky-header").addClass("sticky");
            }
        }
    });


    /*---------------------
        Hero Slider
     ---------------------- */

    var workSliderWrapper = new Swiper('.works_slide_wrapper.swiper-container', {
        loop: true,
        speed: 750,
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
                scrollbar: false,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /*---------------------
        Testimonial Slider
     ---------------------- */

    var testiSliderWrapper = new Swiper('.testimonial_slick.swiper-container', {
        loop: true,
        speed: 750,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    /*---------------------
        Blog Slider
     ---------------------- */

    var blogSliderWrapper = new Swiper('.blog_container.swiper-container', {
        loop: true,
        speed: 750,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /*---------------------
        Blog Slider
     ---------------------- */

    var projectSliderWrapper = new Swiper('.project_desc_slick.swiper-container', {
        loop: true,
        speed: 750,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
    });


    /*---------------------
        Blog Slider
     ---------------------- */

    var relatedSliderWrapper = new Swiper('.blog_container-2.swiper-container', {
        loop: true,
        speed: 750,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });


    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function () {
        $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')
    });

    $('.canvas_close,.body_overlay').on('click', function () {
        $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')
    });

    //Search Box addClass removeClass
    $('.header_search > a').on('click', function () {
        $('.page_search_box').addClass('active')
    });
    $('.search_close > i').on('click', function () {
        $('.page_search_box').removeClass('active')
    });


    /*--- Magnific Popup Video---*/
    $('.port_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*--- counterup activation ---*/
    $('.counterup').counterUp({
        delay: 20,
        time: 2000
    });


    /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="ion-android-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ion-chevron-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });


    /*blog Isotope activation*/
    $('.blog_page_gallery,.portfolio_page_gallery').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.blog_page_gallery,.portfolio_page_gallery').isotope({
            itemSelector: '.gird_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gird_item'
            }
        });

        // filter items on button click
        $('.blog_messonry_button,.portfolio_messonry_button').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });

            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        });

    });



    //Tooltip
    tippy("[data-tippy-content]")







})(jQuery);	
