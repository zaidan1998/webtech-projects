var ans = "0";
var pressed = "0";
var resultsScreen = $("#showno");
var needsNumber = true;
var allButtons = $("button");
var decimalUsed = false;

$(document).ready(function(){
    allButtons.on("click", function(){
        var content = $(this).html();

        switch (content) {
            case "=":
                computeAnswer();
                break;
            case "CLEAR":
                removeLastPressed();
                break;
            default:
                var val = $(this).attr("value");
                console.log("You pressed " + val);
                if (val == null) {
                    if (!lastPressedOperation()) {
                        pressed += content;
                    }
                } else {
                    if (!(val == "." && decimalUsed)) {
                        if (pressed == "0") {
                            pressed = val;
                        } else {
                            pressed += val;
                        }
                        if (val ==".") {
                            decimalUsed = true;
                        }
                    }
                }
                console.log(pressed);
                break;
        }
        refreshDisplay();
    });
});


function refreshDisplay(){
    resultsScreen.html(pressed);
    console.log("Your current equation is " + pressed);
}


function computeAnswer() {
    var val = 0;
    if (lastPressedOperation()) {
        pressed = "Syntax error!";
        refreshDisplay();
        alert("Syntax Error!");
    } else {
        pressed = pressed.replace("x", "*");
        pressed = eval(pressed) + "";
        ans = pressed;
        refreshDisplay();
    }
}


function lastPressedOperation() {
    var lastPressed = pressed.charAt(pressed.length - 1);
    return lastPressed == "x" || lastPressed == "+" || lastPressed == "-"

function removeLastPressed() {
    if (pressed.length > 0) {
        pressed = pressed.substring(0, pressed.length - 1);
    }


}
