const buttons = document.querySelectorAll(".drum");
var soundDrum = new Audio("sounds/tom-1.mp3");
buttons.forEach((element) => {
  let keyType = element.innerHTML;
  console.log(keyType);
  element.addEventListener("click", function () {
    switch (keyType) {
      case "w":
        soundDrum.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      default:
        console.log(keyType);
        break;
    }
    //element.style.color = "yellow";
    element.classList.add("change-color");
    console.log(keyType);
  });
});
function clicked() {
  alert("I got clicked");
  soundDrum.play();
  //   console.log(keyType);
}
