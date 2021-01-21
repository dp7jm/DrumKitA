const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", clicked);
});
function clicked() {
  alert("I got clicked");
}
