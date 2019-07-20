(function(){
'use strict';



    document.addEventListener('DOMContentLoaded', function() {


        //Populate Values to dropdown lists
        var dayArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        var hoursArray = [ "1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12"];
        var minArray = ["00", "15", "30", "45"];

        //Populate Day Array
        for (var i = 0; i < dayArray.length; i++) {
            var day = document.getElementById(dayArray[i])
            day.childNodes[1].innerHTML = dayArray[i];
        }

        for (var i = 0; i < dayArray.length; i++) {
            for (var j = 0; j < 4; j++) {
                var h = document.getElementById(dayArray[i]).getElementsByTagName('select')[j];

                if ( h.id === "hours"){
                    insertOption (hoursArray, h);
                } else {
                    insertOption (minArray, h)
                }
            }
        }

        function insertOption (options, insertLocation ) {
            for (var i = 0; i < options.length; i++) {
                    var opt = options[i];
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    insertLocation.appendChild(el);
                }
        }

        var request;
        if (window.XMLHttpRequest) {
        	request = new XMLHttpRequest();
        } else {
        	request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        request.open('GET', 'data.json');
        request.onreadystatechange = function() {
        	if ((request.readyState===4) && (request.status===200)) {
        		var items = JSON.parse(request.responseText);
        		var keyname = Object.keys(items)
        		var output = '<ul>';
        		var i = 0;
        		for (var key in items) {
        			output += '<li>' + keyname[i] + ' - ' + items[key].morning[0].hour + ':' + items[key].morning[0].minute + ' - ' + items[key].evening[0].hour + ':' + items[key].evening[0].minute + '</li>';
        			i++;
        		}
        		output += '</ul>';
        		document.getElementById('update').innerHTML = output;
        	}
        }
        request.send();
        
        
        //write to JSON
        
        
        
        

    });

})();

