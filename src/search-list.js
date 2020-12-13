jQuery(document).ready(function() {
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