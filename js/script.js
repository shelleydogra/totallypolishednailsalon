


/*
function showClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    
    if(h > 12) { h = h - 12;}
    if(m < 10) {m = "0" + m;}
    if(s < 10) {s = "0" + s;}
    
    var clock = h + ":" + m + ":" + s;   
    
    
    
    return clock;
    
     
    
}
*/

(function(){
'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        var c = document.getElementById('current-time');
        var d = document.getElementById('current-date');
        
        setInterval( function updateTime() {
            var date = new Date();
            
            var h = date.getHours();
            var m = date.getMinutes();
            var month = date.getMonth();
            var day = date.getDate();
            var year = date.getFullYear();           
            var ampm = 'A.M.'
            
            month = formatMonth(month);
                        
            if(h > 12) { 
                h -= 12;
                ampm = 'P.M.';
            }else if(h === 0){
                h = 12;
            }
            if(m < 10) {m = "0" + m;}
            
            var sep = ':';
            if (date.getSeconds() % 2 === 1) sep = ' ';
            
            c.innerHTML =  h + sep + m + ' ' + ampm;
            d.textContent = month + ' ' + day + ", " + year;
        } , 1000);
        
        function formatMonth(m) {
            var monthNames = ['January', 'February', 'March', 'April', 'May', 
                          'June' , 'July', 'August', 'September', 'October',
                          'November','December'];
                          
            return monthNames[m];
        }
});
    
    
})();