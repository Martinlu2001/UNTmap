//ventana modal de rutas

var modal1 = document.getElementById("search-rutas");
// var modal2 = document.getElementById("chosen-value");
// Get the button that opens the modal
var btn1 = document.getElementById("rutas");

// Get the <span> element that closes the modal
 var span1 = document.getElementsByClassName("cerra-rutas")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }