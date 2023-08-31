$(document).ready(() => {
    $(document).on('click', ".title", function(e){


        const isActive = $(e.currentTarget).next().hasClass("active");

        $(".desc.active").removeClass("active");
        $(".title i.active").removeClass("active");
        if (!isActive) {
            $(e.currentTarget).next().toggleClass("active");
            $(e.currentTarget).find("i").toggleClass("active");
        }
    })
});

$(document).ready(function() {
    $(".open-sec").click(function() {
      $(".out").toggle(500);
    });
    $(".open-right").click(function() {
      $(".right-sec").toggle(500);
    });

  });