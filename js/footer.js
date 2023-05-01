$( document ).ready( function(){
    // $(".bottom_right .family").click(function () {
    //     $(".bottom_right .slide").slideToggle({direction: "up"});
    // });

    $(".bottomRight").mouseenter(function() {
        $(".bottomRight .ft-slide").addClass("on");
        $(".bottomRight .family .plus").addClass("on");
    });
    $(".bottomRight").mouseleave(function() {
        $(".bottomRight .ft-slide").removeClass("on");
        $(".bottomRight .family .plus").removeClass("on");
    });
});

