
var selected_device = "";

var objects = [];

var divs = document.getElementsByClassName("dev");

document.addEventListener("click", printMousePos);

$.repeat().add('connection').each($).connections('update').wait(0);
