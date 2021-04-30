var selected_device = "";

var divs = document.getElementsByClassName("dev");

function myFunc(event) {
    selected_device = event.target.id;
}

function printMousePos(event) {
    console.log("" + event.clientX + " " + event.clientY);
  }

for (i = 0; i < divs.length; ++i) {
    divs[i].addEventListener("click", myFunc);
}

document.addEventListener("click", printMousePos);


