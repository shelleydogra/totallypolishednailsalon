
(function(){
'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        var c = document.getElementById('current-time');
        var d = document.getElementById('current-date');
        var dy = document.getElementById('current-day');
        var cy = document.getElementById('current-year');

        var sun = document.getElementById('sunday');
        var mon = document.getElementById('monday');
        var tue = document.getElementById('tuesday');
        var wed = document.getElementById('wednesday');
        var thu = document.getElementById('thursday');
        var fri = document.getElementById('friday');
        var sat = document.getElementById('saturday');

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
            d.textContent = month + ' ' + ddate + ", " + year;
            dy.innerHTML = day;
            cy.innerHTML = year;

            if(isSummer(monthNumber)) {
                sun.innerHTML = "12:00 - 5:00";
                mon.innerHTML = "10:00 - 8:00";
                tue.innerHTML = "10:00 - 8:00";
                wed.innerHTML = "10:00 - 8:00";
                thu.innerHTML = "10:00 - 8:00";
                fri.innerHTML = "10:00 - 8:00";
                sat.innerHTML = "10:00 - 6:00";
            } else {
                sun.innerHTML = "12:00 - 5:00";
                mon.innerHTML = "12:00 - 7:30";
                tue.innerHTML = "12:00 - 7:30";
                wed.innerHTML = "12:00 - 7:30";
                thu.innerHTML = "12:00 - 7:30";
                fri.innerHTML = "10:00 - 8:00";
                sat.innerHTML = "10:00 - 6:00";
            }
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
});

})();

