let wordGuessed = [[]];
let space = 1;
// -- KEYBOARD BUTTON
const keysButton = document.querySelectorAll(".keyboardRow button");
// -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
function currentWord() {
  const numWordGuessed = wordGuessed.length;
  return wordGuessed[numWordGuessed - 1];
}
function inputGuessWord(keyButton) {
  const word = currentWord();
  if (word && word.length < 5) {
    word.push(keyButton);
    // -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
    const spaceEl = document.getElementById(String(space));
    space = space + 1;
    spaceEl.textContent = keyButton;
  }
}
// -- TO SHOW ALPHABET EACH CLICK
for (let i = 0; i < keysButton.length; i++) {
  keysButton[i].onclick = ({ target }) => {
    const keyButton = target.getAttribute("data-keyboard");
    inputGuessWord(keyButton);
  };
}
