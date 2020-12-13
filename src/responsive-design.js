jQuery(document).ready(function($) {
    var alter = function() {
        var ww = document.body.clientWidth;
        if (ww < 990 && ww > 550) {
            $('.container').addClass('container-medium');
            $('.container').removeClass('container-web');
            $(".banner").width(100 + "%");
            $('.banners').addClass('flex-column align-items-center');
            if ($('.m').hasClass('flex-column')) {
                $('.m').removeClass('flex-column');
            }
            $('.js-toggle').css('position', 'relative');
            $('.js-toggle').css('left', '10px');

        } else if (ww >= 990) {
            $('.container').addClass('container-web');
            $('.container').removeClass('container-medium');
            $(".banner").width(49 + "%");
            $('.banners').removeClass('flex-column');
            if ($('.m').hasClass('flex-column')) {
                $('.m').removeClass('flex-column');
            }
            $('.js-toggle').css('position', 'relative');
            $('.js-toggle').css('left', '10px');
        } else if (ww <= 550) {
            if ($('.container').hasClass('container-web')) {
                $('.container').removeClass('container-web');
            }
            if ($('.container').hasClass('container-medium')) {
                $('.container').removeClass('container-medium');
            }
            $('.container').addClass('container-small');
            $(".banner").width(100 + "%");
            $('.banners').addClass('flex-column align-items-center');
            $('.m').addClass('flex-column');
            $('.js-toggle').css('position', 'fixed');
            $('.js-toggle').css('left', '50px');
        }

    };
    $(window).ready(function() {
        alter();
    });
    $(window).resize(function() {
        alter();
    });

});