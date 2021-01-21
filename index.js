const buttons = document.querySelectorAll(".drum");
buttons.forEach((element) => {
  element.addEventListener("click", clicked);
});
function clicked() {
  alert("I got clicked");
}
