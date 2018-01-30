
$(document).ready(function () {


    $("#btn_showusers").on('click', function () {

        $.getJSON('https://api.github.com/users/prabhrai/repos', function (data) {
            var p = document.getElementById("data");
            p.innerHTML = "";

            $.each(data, function (i, item) {
                p.innerHTML += "<div><a href='" + item.html_url + "'>" + "Repo " + i + " - " + item.name + " " + " </a></div>";

            });

        });

    });


    $("#btn_showusers_adv").on('click', function () {

        var username = document.getElementById("usr").value;
        if (!username) {
            alert("Invalid input. Please check the username and try again.");
            return;
        }

        $.getJSON('https://api.github.com/users/' + username + '/repos', function (data) {
            var p = document.getElementById("data_adv");
            p.innerHTML = "";

            $.each(data, function (i, item) {
                p.innerHTML += "<div><a href='" + item.html_url + "'>" + "Repo " + i + " - " + item.name + " " + " </a></div>";

            });

        });

    });

});

