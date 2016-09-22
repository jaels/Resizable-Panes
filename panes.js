
(function() {

    function move() {
        var x = event.clientX;
        $(".line").css('left', x - 350 + "px");

        if (x<360) {
            x=360;
            $(".general").off("mousemove", move);
        }

        if (x>1042) {
            x=1042;
            $(".general").off("mousemove", move);
        }
        
        $("#front-pic").css("width", x - 350 + "px");
    }

    $(".line").on("mousedown", function(e) {
        $('body').on("mousemove.move", move);
        e.preventDefault();
    });

    $('body').on("mouseup", function() {
        console.log("up");
        $('body').off(".move");

    });
})();
