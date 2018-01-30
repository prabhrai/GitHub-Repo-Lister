
 $(document).ready(function(){


 $("#btn_showusers").on('click', function () {
    
            $.getJSON('https://api.github.com/users/prabhrai/repos', function (data) {
                // console.log(data);
                var p = document.getElementById("data");
                p.innerHTML = "";
    
                $.each(data, function (i, item) {
                    // alert(item.PageName);
                    p.innerHTML += "<div><a href='" + item.html_url  + "'>" + "Repo " + i + " - " + item.name +  " " + " </a></div>";
    
                });
    
                // p.innerText = "JHI"; a
                // console.log(p);
            });

        });


        $("#btn_showusers_adv").on('click', function () {
            
            var username = document.getElementById("usr").value;
            if (!username) return;

                    $.getJSON('https://api.github.com/users/' + username + '/repos', function (data) {
                        // console.log(data);
                        var p = document.getElementById("data_adv");
                        p.innerHTML = "";
            
                        $.each(data, function (i, item) {
                            // alert(item.PageName);
                            p.innerHTML += "<div><a href='" + item.html_url  + "'>" + "Repo " + i + " - " + item.name +  " " + " </a></div>";
            
                        });
            
                        // p.innerText = "JHI"; a
                        // console.log(p);
                    });
        
                });

    }); 

