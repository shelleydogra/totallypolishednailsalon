
var pageLoad = function() {
	prompt("This is totally polished Rates", "ok")
}

function showClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    if(h > 12) { h = h - 12;}
    if(m < 10) {m = "0" + m;}
    if(s < 10) {s = "0" + s;}
    
    return h + ":" + m + ":" + s;    
}

setTimeout(showClock(), 1000);