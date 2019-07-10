(function(){
'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        
        for (var j=0; j<7; j++) {
            var day = ["tue", "mon", "sun", "wed", "thu", "fri", "sat"];
            var weekDay = document.getElementById(day[j])
            
            var options = ["7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];

                for (var i = 0; i < options.length; i++) {
                    var opt = options[i];
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    weekDay.appendChild(el);
                }

        }
        
        
    });

})();