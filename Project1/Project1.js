let wordGuessed = [[]];
let space = 1;
const randomWord = validWords[Math.floor(Math.random() * validWords.length)];

// -- KEYBOARD BUTTON
const keysButton = document.querySelectorAll(".keyboardRow button");
// -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
function currentWord() {
  const numWordGuessed = wordGuessed.length;
  return wordGuessed[numWordGuessed - 1];
}

function inputGuessWord(keyButton) {
  const word = currentWord();
  console.log(`word ${word}`);
  if (word && word.length <= 29) {
    //check word.length + 1
    word.push(keyButton);
    // -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
    const spaceEl = document.getElementById(String(space));
    space = space + 1;
    spaceEl.textContent = keyButton;
  }
  console.log(keyButton);
  for (let square of document.querySelectorAll(".square")) {
    // square.classList.remove("word");
    // console.log(typeof square.textContent);
    // console.log(typeof keyButton);
    if (square.textContent == keyButton) {
      square.classList.add("word");
    }
  }
}
function checkWord() {
  if (wordGuessed === randomWord) {
    window.alert("Congratulation! You Win");
  } else {
    window.alert("Keep it up!");
  }
}
// -- TO SHOW ALPHABET EACH CLICK
for (let i = 0; i < keysButton.length; i++) {
  keysButton[i].onclick = ({ target }) => {
    const keyButton = target.getAttribute("data-keyboard");
    let guess = document.getElementsByClassName("word");
    console.log(space);
    if (keyButton === "enter" && guess.length === 5) {
      checkWord();
      return;
    } else if (keyButton === "enter" && guess.length !== 5) {
      window.alert("Word need to be 5 letters");
    } else if (keyButton === "del") {
      space -= 1;
      const word = currentWord();
      word.pop();
      const spaceEl = document.getElementById(String(space));
      console.log(spaceEl);
      spaceEl.textContent = "";
      spaceEl.classList.remove("word");
    } else {
      inputGuessWord(keyButton);
    }
  };
}
