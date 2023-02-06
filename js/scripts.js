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
