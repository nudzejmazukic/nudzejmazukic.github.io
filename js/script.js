var main = function () {
    var activeTab = $("");
    $(".menu").click(function () {
        $(".menu").removeClass("active");
        activeTab = $(this);
        activeTab.addClass("active");
    });

    $(".logo").hover(function () {
        $(this).toggleClass("active");
    });

    $(".menu").hover(function () {
        $(this).toggleClass("active");

    })




    $(".project").find("img").hover(function () {
        $(this).toggleClass("notebook-hover");
        focusNotebook = $(this)
    })


    $(".project").find("h4").hover(function () {
        focusNotebook.toggleClass("notebook-hover");
    })

    $(".scroll").click(function (event) {
        event.preventDefault();

        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });

}


$(document).ready(main)