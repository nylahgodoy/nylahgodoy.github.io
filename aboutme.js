alert("Come get to know me!");

window.onload = setup;

function setup() {
  var button = document.getElementById("button1");
  button.onclick = colorChange;
}

function colorChange() {
  document.getElementById("color").style.color = "teal";
}

// $("#button1").click(function() {
//     $("#Skidmore").slideToggle();
//     $("#UAlbany").slideToggle();
// });
