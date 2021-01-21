const buttons = document.querySelectorAll(".drum");
var soundDrum = new Audio("sounds/tom-1.mp3");
buttons.forEach((element) => {
  element.addEventListener("click", clicked);
});
function clicked() {
  alert("I got clicked");
  soundDrum.play();
}
