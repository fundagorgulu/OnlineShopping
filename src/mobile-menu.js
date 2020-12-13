jQuery(document).ready(function() {
    "use strict";
    var navclone = function() {
        $('.js-clone-nav li h3').each(function() {
            var $this = $(this);
            $this.clone().attr("class", 'clone-view').appendTo('.mobile-view-body');

        });
        $('.js-clone-nav li .main-link').each(function() {
            var $this = $(this);
            $this.clone().attr("class", 'clone-view').appendTo('.mobile-view-body');

        });

        $('body').on('click', '.js-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('off-view')) {
                $('body').removeClass('off-view');
            } else {
                $('body').addClass('off-view');
            }
        });
        $(document).mouseup(function(e) {
            var container = $('.mobile-view');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('off-view')) {
                    $('body').removeClass('off-view');
                }
            }
        })


    }

    navclone();
});
$(document).ready(function() {
    $(document).on("click", ".main-category", function() {
        var id = $(this).attr('id')
        var doc = document.querySelectorAll("#" + id);
        var upper = doc[1].closest("div");
        var sub = upper.querySelectorAll('.sub-category');

        for (var i = 0; i < sub.length; i++) {
            $('.mobile-view-body').append(sub[i].cloneNode(true));
        }
        $('.mobile-view-body').css('font-size', '24px');
        $('.mobile-view-body').css('text-align', 'center');
        $('.mobile-view .sub-category').css('padding', '10px');
        $('.clone-view').hide();
        $('.mobile-view-body .icon').css("display", "block");
        $('.mobile-view-body .sub-category').css("display", "block");
    });
    $(document).on("click", ".icon", function() {
        $('.mobile-view-body .sub-category').remove();
        $('.mobile-view-body .icon').hide();
        $('.clone-view').css("display", "block");

    });
    $(document).on("click", ".sub-category", function() {
        var id = $(this).attr('id')
        var doc = document.querySelectorAll("#" + id);
        var upper = doc[1].closest("li");
        var sub = upper.querySelectorAll('.product');

        for (var i = 0; i < sub.length; i++) {
            $('.mobile-view-body').append(sub[i].cloneNode(true));
        }
        $('.mobile-view-body').css('font-size', '24px');
        $('.mobile-view-body').css('text-align', 'center');
        $('.mobile-view .sub-category').css('padding', '10px');
        $('.product').css('display', 'block');
        $('.sub-category').hide();
        $('.mobile-view-body .icon').css("display", "none");
        $('.mobile-view-body .icon2').css("display", "block");
        //$('.mobile-view-body .sub-category').css("display", "block");
    });

    $(document).on("click", ".icon2", function() {

        $('.mobile-view-body .icon2').css("display", "none");
        $('.mobile-view-body .icon').css("display", "block");
        $('.mobile-view-body .product').remove();
        $('.sub-category').css("display", "block");

    });
});