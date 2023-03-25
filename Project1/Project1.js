// -- KEYBOARD BUTTON
const keysButton = document.querySelectorAll(".keyboardRow button");
// -- TO SHOW ALPHABET EACH CLICK
for (let i = 0; i < keysButton.length; i++) {
  keysButton[i].onclick = ({ target }) => {
    const keyButton = target.getAttribute("data-keyboard");
    console.log(keyButton);
  };
}
// -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
let square = 1;
function onInput() {
  if (keyButton === "del") {
    square -= 1;
  } else {
    square++;
  }
}
let id = square;
function addLetter(id) {
  document.getElementsById(id).textContent = "keyButton";
}
