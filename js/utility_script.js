(function(){
'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        var day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        var options = ["7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
        var day_min = ["su", "mo", "tu", "we", "th", "fr", "sa"];
        var min = ["00", "15", "30", "45"];

        
        for (var j = 0; j < day.length; j++) {
            
            var weekDay = document.getElementById(day[j])

                for (var i = 0; i < options.length; i++) {
                    var opt = options[i];
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    weekDay.appendChild(el);
                }

        }
        
        for (var j = 0; j < day_min.length; j++) {
             
            var minute = document.getElementById(day_min[j])
            
            for ( var i = 0; i < min.length; i++) {
                var opt = min[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                minute.appendChild(el);
            }
        }
        
        
    });

})();