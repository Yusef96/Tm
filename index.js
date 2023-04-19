let sideBarPostion = $(".sidebar-content").innerWidth();
$("#sideBar").css({left:-sideBarPostion})

// let erer = document.querySelector(".out i")

let erer = $(".out i")




$(erer).click(function(){
    // console.log($("#sideBar").css("left"));
    
    
    // let sideBarPostion = $(".sidebar-content").innerWidth();

    if ($("#sideBar").css("left") == "0px") {

        $("#sideBar").animate({left:-sideBarPostion},1000);
        

    }else{$("#sideBar").animate({left:0},1000)}
    


})


    $(".sidebar-content i").click(function(){
        if ($("#sideBar").css("left") == "0px") {

            $("#sideBar").animate({left:-sideBarPostion},1000)}
    
    })


    // ......................
    $(".sec-p").hide()
    $(".third-p").hide()

    $(".first-h").click(function(){
        $(".first-p").slideToggle();
        $(".sec-p").slideUp();
        $(".third-p").slideUp();

    })
    $(".sec-h").click(function(){
        $(".sec-p").slideToggle();
        $(".first-p").slideUp();
        $(".third-p").slideUp();
    })
    $(".third-h").click(function(){
        $(".third-p").slideToggle();
        $(".first-p").slideUp();
        $(".sec-p").slideUp();
    })



    function makeTimer() {
	
            var endTime = new Date("29 April 2023 9:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
    
                var now = new Date();
                now = (Date.parse(now) / 1000);
    
                var timeLeft = endTime - now;
    
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
      
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
    
                $("#days").html(days + "<span>Days</span>");
                $("#hours").html(hours + "<span>Hours</span>");
                $("#minutes").html(minutes + "<span>Minutes</span>");
                $("#seconds").html(seconds + "<span>Seconds</span>");		
    
        }
    
        setInterval(function() { makeTimer(); }, 1000);



        //.....................................





        $('#myTextarea').on('input propertychange', function() {
            charLimit(this, 100);
        });


        function charLimit(input, maxChar) {
            var len = $(input).val().length;
            $('#textCounter').text(maxChar - len);
            
            if (len > maxChar) {
                $(input).val($(input).val().substring(0, maxChar));
                $('#textCounter').text(0);
            }
        }