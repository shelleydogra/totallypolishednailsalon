
(function(){
'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var c = document.getElementById('current-time');
        var d = document.getElementById('current-date');
        var dy = document.getElementById('current-day');

        setInterval( function updateTime() {
            var date = new Date();

            var h = date.getHours();
            var m = date.getMinutes();
            var month = date.getMonth();
            var monthNumber = date.getMonth();
            var ddate = date.getDate();
            var day = date.getDay();
            var year = date.getFullYear()
            var ampm = 'A.M.'

            day = dayOfTheWeek(day);
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
            d.innerHTML = month + ' ' + ddate + ", " + year;
            dy.innerHTML = day;

        } , 1000);

        function formatMonth(m) {
            var monthNames = ['January', 'February', 'March', 'April', 'May',
                          'June' , 'July', 'August', 'September', 'October',
                          'November','December'];

            return monthNames[m];
        }

        function dayOfTheWeek(dayIn) {
            var dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return dayNames[dayIn];
        }

        function isSummer(monthIn) {

            switch (monthIn) {
                case 3: case 4: case 5: case 6: case 7: case 8:
                    return true;
                    break;
                default:
                    return false;
            }
        }
        
        
        // Read & Parse data.json
        var request;
        if (window.XMLHttpRequest) {
        	request = new XMLHttpRequest();
        } else {
        	request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        request.open('GET', '../utility/data.json');
        request.onreadystatechange = function() {
        	if ((request.readyState===4) && (request.status===200)) {
        		var items = JSON.parse(request.responseText);
        		var keyname = Object.keys(items)
        		
        		//populate hours.html hours section from data.JSON
        		// TODO: pull in the appropriate data for winter/summer hours
        		for (var key in items) {
        		    document.getElementById(key).innerHTML =    items[key].morning[0].hour + ':' + 
        		                                                items[key].morning[0].minute + ' - ' + 
        		                                                items[key].evening[0].hour + ':' + 
        		                                                items[key].evening[0].minute;
                }
        	}
        }
        request.send();

});

})();