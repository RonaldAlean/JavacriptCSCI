// JavaScript source code

//nameless function
window.onload = function() {

    var submitButton = document.getElementById("abc");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", MyFunction,
            false);
    }

    else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", MyFunction);
    }

    function MyFunction() {

        var fruits, text, fLen, i;
        fruits = ["Banana", "Orange", "Apple", "Mango"];
        fLen = fruits.length;

        text = "<ul>";
        for (i = 0; i < fLen; i++) {
            text += "<li>" + fruits[i] + "</li>";
        }
        text += "</ul>";
        document.writeln(text);
    }

    // alert("sadfsdafd");

    /*var brightestStars =
    ["Sirius", "Canopus", "Arcturus", "Rigel", "Vega"];

    for (var count = 0; count < brightestStars.length; count++) {
    document.write(brightestStars[count] + "<br />");
    }*/

}
