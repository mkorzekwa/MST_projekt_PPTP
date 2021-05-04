var selected_device = "";

var divs = document.getElementsByClassName("dev");

const el = document.querySelector(".item");

el.addEventListener('mousedown',mousedown);

function mousedown(e){
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup)

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e){
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY +"px";

        prevX = e.clientX;
        prevY = e.clientY;

    }

    function mouseup(){
        window.removeEventListener('mousemove',mousemove);
        window.removeEventListener('mouseup', mouseup);
    }

}

document.getElementById("pc").onclick = function () {
    var div = document.createElement('div');
       div.style.backgroundColor = "red";
       div.style.position = "absolute";
       div.style.left = "150px";
       div.style.top = "150px";
       div.style.height = "100px";
       div.style.width = "100px";

       document.getElementsByTagName('body')[0].appendChild(div);
};

document.getElementById("router").onclick = function () {
    var div = document.createElement('div');
       div.style.backgroundColor = "blue";
       div.style.position = "absolute";
       div.style.left = "350px";
       div.style.top = "350px";
       div.style.height = "100px";
       div.style.width = "100px";

       document.getElementsByTagName('body')[0].appendChild(div);
};

document.getElementById("sniffer").onclick = function () {
    var div = document.createElement('div');
       div.style.backgroundColor = "green";
       div.style.position = "absolute";
       div.style.left = "550px";
       div.style.top = "550px";
       div.style.height = "100px";
       div.style.width = "100px";

       document.getElementsByTagName('body')[0].appendChild(div);
};


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
