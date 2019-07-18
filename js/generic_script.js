
(function(){
'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        var cy = document.getElementById('current-year');

        setInterval( function updateTime() {
            var date = new Date();

            var year = date.getFullYear()

            cy.innerHTML = year;
            
        });
        
});

})();