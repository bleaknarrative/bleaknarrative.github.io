/* NAV - PARTIES AND RESIDENTS DROPDOWN */

function showParties() {
  var x = document.getElementById("parties");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function showResidents() {
  var x = document.getElementById("artists-hide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

jQuery(document).ready(function() {
     jQuery('.resident-whattis').hover(function(){     
           jQuery('.whattis').addClass('show-resident');    
       },function(){    
          jQuery('.whattis').removeClass('show-resident');     
       });
   });

jQuery(document).ready(function() {
     jQuery('.resident-fluffi').hover(function(){     
           jQuery('.fluffi').addClass('show-resident');    
       },function(){    
          jQuery('.fluffi').removeClass('show-resident');     
       });
   });

jQuery(document).ready(function() {
     jQuery('.resident-paris').hover(function(){     
           jQuery('.paris').addClass('show-resident');    
       },function(){    
          jQuery('.paris').removeClass('show-resident');     
       });
   });