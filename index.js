const buttons = document.querySelectorAll(".drum");
var soundDrum = new Audio("sounds/tom-1.mp3");
buttons.forEach((element) => {
    let keyType = element.innerHTML;
    console.log(keyType);
  element.addEventListener("click", function (){
    console.log(keyType);
  });
});
function clicked() {
  alert("I got clicked");
  soundDrum.play();
//   console.log(keyType);
}
