// Security-awareness demo — purely visual. No data is collected,
// stored, or transmitted. This script only animates text on screen.

document.addEventListener("DOMContentLoaded", function () {
  var typedEl = document.getElementById("typed");
  var breachEl = document.getElementById("breach");
  var revealEl = document.getElementById("reveal");

  var message = "We now have access to your credentials.";
  var i = 0;

  // Type out the scary line character by character
  function typeChar() {
    if (i < message.length) {
      typedEl.textContent += message.charAt(i);
      i++;
      setTimeout(typeChar, 45);
    }
  }
  typeChar();

  // After ~4 seconds total, swap to the reassuring reveal
  setTimeout(function () {
    breachEl.style.display = "none";
    revealEl.style.display = "block";
  }, 4000);
});
