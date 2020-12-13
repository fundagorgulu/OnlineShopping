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
});;jQuery(document).ready(function($) {
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

});;jQuery(document).ready(function() {
    "use strict";
    var search = function() {
        let suggestions = [
            "Elbise",
            "Tişört",
            "Tunik",
            "Bluz",
            "Gömlek",
            "Sweatshirt",
            "Hırka",
            "Kazak",
            "Pantolon",
            "Jean",
            "Etek",
            "Şort",
            "Tayt",
            "Ceket",
            "Eşofman",
            "Aksesuar",
            "Trençkot",
            "Mont",
            "Kaban"
        ];

        var searchW = document.querySelectorAll(".input-g");
        var ww = document.body.clientWidth;
        if (ww < 990) {
            searchW = searchW[1];
        } else if (ww >= 990) {
            searchW = searchW[0];
        }

        var searchWW = searchW.querySelector(".input-group-append")
        var inputBox = searchWW.querySelector("input");
        var suggBox = searchW.querySelector(".search-group");

        inputBox.onkeyup = (e) => {
            let userData = e.target.value;
            let emptyArray = [];
            if (userData) {
                emptyArray = suggestions.filter((data) => {
                    return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                });
                emptyArray = emptyArray.map((data) => {
                    return data = '<li>' + data + '</li>';
                });
                searchW.classList.add("active");
                showSuggestions(emptyArray);
                let allLists = suggBox.querySelectorAll("li");

                for (let i = 0; i < allLists.length; i++) {
                    allLists[i].setAttribute("onclick", "select(this)");
                }
            } else {
                searchW.classList.remove("active");
            }
        }

        function select(element) {
            let selectUserData = element.textContent;
            inputBox.value = selectUserData;
            searchW.classList.remove("active");
        }

        function showSuggestions(list) {
            let listData;
            if (!list.length) {
                userValue = inputBox.value;
                listData = '<li>' + userValue + '</li>'
            } else {
                listData = list.join("");
            }
            suggBox.innerHTML = listData;
        }

    };
    $(window).ready(function() {
        search();
    });
    $(window).resize(function() {
        search();
    });
});