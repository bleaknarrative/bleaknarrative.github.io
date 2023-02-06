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

function showResidentImage() {
  var span = document.querySelectorAll('.residents-container');
for (var i = span.length; i--;) {
    (function () {
        var t;
        span[i].onmouseover = function () {
            hideAll();
            clearTimeout(t);
            this.className = 'residents-hover';
        };
        span[i].onmouseout = function () {
            var self = this;
            t = setTimeout(function () {
                self.className = 'residents-container';
            }, 300);
        };
    })();
}

function hideAll() {
    for (var i = span.length; i--;) {
        span[i].className = 'residents-container'; 
    }
};
}