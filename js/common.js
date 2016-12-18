
    var mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        direction: 'vertical',
        speed: 700,
        spaceBetween: 100,
        noSwiping:true,
        parallax:true,
        mousewheelControl : true
    });

    var startX;
    var setTimeout1;
    var setTimeout2;

    mySwiper.on('onTouchStart', function (swiper, e) {
        //mySwiper.lockSwipeToPrev()
        var startX=e.changedTouches[0].pageY;
    });

    mySwiper.on('onTouchMove', function (swiper, e) {
        //mySwiper.lockSwipeToPrev()
        clearTimeout(setTimeout1);
        clearTimeout(setTimeout2);
    });

    $('.rotateIn-box').click(function(){
        $(this).removeClass("rotateIn");
        $(this).addClass("rotateOut");
        $(this).parent().nextAll('.two-box').removeClass("rotateOut");
        $(this).parent().nextAll('.two-box').addClass("rotateIn");
        $(this).parent().nextAll('.pageText').hide();
    })

    $('.two-box').click(function(){
        $(this).removeClass("rotateIn");
        $(this).addClass("rotateOut");
        $(this).prevAll('.pageBox').children('.rotateIn-box').removeClass("rotateOut");
        $(this).prevAll('.pageBox').children('.rotateIn-box').addClass("rotateIn");
        $(this).prevAll('.pageText').show();
    })

    mySwiper.on('onTransitionEnd', function (swiper){



        if (swiper.activeIndex == 1) {

            $('.scene02 .block-content').addClass('moveToNextScene');
            $('.block-content.moveToNextScene').show();
            $('.scene02 .block-content').show();
            setTimeout1 = setTimeout(function (){
                $('.block-content.moveToNextScene').fadeOut(600);
                setTimeout2 = setTimeout(function (){
                    mySwiper.slideNext();
                }, 500);
            }, 1300);

            $('.page3-text').hide();
            $('.page3').hide();
        }

        if( mySwiper.previousIndex ==2 && swiper.activeIndex == 1){
            mySwiper.slideTo(0, 800, false);
            clearTimeout(setTimeout1);
            clearTimeout(setTimeout2);
        }

        if (swiper.activeIndex == 0) {
            $('.scene02 .block-content').removeClass('moveToNextScene');
            $('.scene02 .block-content').show();
            clearTimeout(setTimeout1);
            clearTimeout(setTimeout2);
        }
        if (swiper.activeIndex == 2) {
            $('.scene02 .block-content').removeClass('moveToNextScene');
            $('.scene02 .block-content').show();
            clearTimeout(setTimeout1);
            clearTimeout(setTimeout2);
            $('.page3-text').fadeIn(400);
            var page3 = setTimeout(function(){
                $('.page3').fadeIn(1400);
            },300)
            //mySwiper.slideTo(0, 1000, false);
        }

        if (swiper.activeIndex == 3) {
            $('.page4-text').fadeIn(400);
            var page3 = setTimeout(function(){
                $('.page4').fadeIn(1400);
            },300)
        }

        if (swiper.activeIndex == 4) {
            $('.page5-text').fadeIn(400);
            $('.page5-text01').fadeIn(400);
            var page3 = setTimeout(function(){
                $('.page5').fadeIn(1400);
            },300)
            $('.page6-text').hide();
            $('.page6').hide();
        }

        if (swiper.activeIndex == 5) {
            $('.page6-text').fadeIn(400);
            var page3 = setTimeout(function(){
                $('.page6').fadeIn(1400);
            },300)
        }

        if (swiper.activeIndex == 6) {
            $('.page7-text').fadeIn(400);
            var page3 = setTimeout(function(){
                $('.page7').fadeIn(1400);
            },300)
        }

        if (swiper.activeIndex == 7) {
            demo.start();
            demo2.start();
        }else{
            demo.reset();
            demo2.reset();

        }
        $('.rotateIn-box').removeClass('rotateOut');
        $('.rotateIn-box').removeClass('rotateIn');
        $('.two-box').removeClass('rotateOut');
        $('.two-box').removeClass('rotateIn');
        console.log(swiper.activeIndex)
    });

