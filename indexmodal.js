var modal = document.getElementById("verificationModal");
// var modalsign=document.getElementById("signupModal");
// Get the button that opens the modal
var btn = document.getElementById("buttonverification");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 =document.getElementById("cerrarmodal");
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
//nuevo
// btn.onclick = function() {
//   modalsign.style.display = "none";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//nuevo
 span1.onclick = function() {
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

