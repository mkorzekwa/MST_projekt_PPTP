
var selected_device = "";


var divs = document.getElementsByClassName("dev");

function get (el) {
    if (typeof el == 'string') return document.getElementById(el);
    return el;
}

function mouseX (e) {
    if (e.pageX) {
      return e.pageX;
    }
    if (e.clientX) {
      return e.clientX + (document.documentElement.scrollLeft ?
        document.documentElement.scrollLeft :
        document.body.scrollLeft);
    }
    return null;
  }
  
  function mouseY (e) {
    if (e.pageY) {
      return e.pageY;
    }
    if (e.clientY) {
      return e.clientY + (document.documentElement.scrollTop ?
        document.documentElement.scrollTop :
        document.body.scrollTop);
    }
    return null;
}

function dragable (clickEl, dragEl) {
    var p = get(clickEl);
    var t = get(dragEl);
    var drag = false;
    offsetX = 0;
    offsetY = 0;
    var mousemoveTemp = null;
  
    if (t) {
      var move = function (x,y) {
        t.style.left = (parseInt(t.style.left)+x) + "px";
        t.style.top  = (parseInt(t.style.top) +y) + "px";
      }
      var mouseMoveHandler = function (e) {
        e = e || window.event;
  
        if(!drag){return true};
  
        var x = mouseX(e);
        var y = mouseY(e);
        if (x != offsetX || y != offsetY) {
          move(x-offsetX,y-offsetY);
          offsetX = x;
          offsetY = y;
        }
        return false;
      }
      var start_drag = function (e) {
        e = e || window.event;
  
        offsetX=mouseX(e);
        offsetY=mouseY(e);
        drag=true; // basically we're using this to detect dragging
  
        // save any previous mousemove event handler:
        if (document.body.onmousemove) {
          mousemoveTemp = document.body.onmousemove;
        }
        document.body.onmousemove = mouseMoveHandler;
        return false;
      }
      var stop_drag = function () {
        drag=false;      
  
        // restore previous mousemove event handler if necessary:
        if (mousemoveTemp) {
          document.body.onmousemove = mousemoveTemp;
          mousemoveTemp = null;
        }
        return false;
      }
      p.onmousedown = start_drag;
      p.onmouseup = stop_drag;
    }
  }

document.getElementById("pc").onclick = function () {
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.left = "150px";
    div.style.top = "150px";
    div.id = "pc1";
    div.className = "pc";

    document.getElementsByTagName('body')[0].appendChild(div);
    dragable("pc1", "pc1")
};

document.getElementById("router").onclick = function () {
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.left = "350px";
    div.style.top = "350px";
    div.id = "router1";
    div.className = "router";

    document.getElementsByTagName('body')[0].appendChild(div);
    dragable("router1", "router1")
};

document.getElementById("sniffer").onclick = function () {
    var div = document.createElement('div');
    div.style.position = "absolute";
    div.style.left = "550px";
    div.style.top = "550px";
    div.id = "sniffer1";
    div.className = "sniffer";

    document.getElementsByTagName('body')[0].appendChild(div);
    dragable("sniffer1", "sniffer1")

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
