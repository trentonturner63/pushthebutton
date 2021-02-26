//assign IDs to variables
let display = $("#display");
let btn = $("#btn");
let visible_count = 0;

$(function () {
    btn.on({
        click: function () {
            //allows for random button placement.  The button starts at 130 pixels from the top.  
            //The area size where the button can go is 1280x400
            $(this).css({
                left: (Math.random() * 1280) + "px",
                top: (130 + Math.random() * 400) + "px",
            });
            //Every time you click a button, visible_count goes up by 1 
            visible_count++;
            if (visible_count == 1) {
                display.html(`This has been clicked ${visible_count} time.`);
            } else {
                display.html(`This has been clicked ${visible_count} times.`);
            }
        }
    });
});
