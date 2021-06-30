
var selected_device = "";

var objects = [];

var divs = document.getElementsByClassName("dev");

/*
for (i = 0; i < divs.length; ++i) {
    divs[i].addEventListener("click", myFunc);
}
*/
document.addEventListener("click", printMousePos);

$.repeat().add('connection').each($).connections('update').wait(0);
