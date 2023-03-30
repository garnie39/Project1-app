let currentRowNum = 1;
let wordGuessed = []; //should be all letters
let allWord = []; // single word for each row
let space = 1;
const randomWord = validWords[Math.floor(Math.random() * validWords.length)];
console.log(randomWord);
console.log(wordGuessed);
// -- KEYBOARD BUTTON
const keysButton = document.querySelectorAll(".keyboardRow button");
// -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
// function currentWord() {
// const numWordGuessed = wordGuessed.length;
// return wordGuessed[numWordGuessed - 1];
// }
function inputGuessWord(keyButton) {
  const word = wordGuessed;
  console.log(`word ${word}`);
  if (word && word.length < 30) {
    console.log(word);
    word.push(keyButton);
    if (word.length % 5 == 0) {
      allWord = "";
      let startIndex = word.length - 5;
      let endIndex = word.length;
      let randomWordCounter = 0;
      for (let x = startIndex; x < endIndex; x++) {
        allWord += word[x];
        if (word[x] == randomWord[randomWordCounter]) {
          // assign green to the key with id x+1
        } else if (randomWord.includes(word[x])) {
          // assign gray to the kwy with id x+1
        }
        randomWordCounter++;
      }
    }
    // -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
    const spaceEl = document.getElementById(String(space));
    space = space + 1;
    spaceEl.textContent = keyButton;
  }
  console.log(keyButton);
  // -- store back the square for the new element
  for (let square of document.querySelectorAll(".square")) {
    if (square.textContent == keyButton) {
      square.classList.add("word");
    }
  }
}
function checkWord() {
  currentRowNum = wordGuessed.length / 5;
  if (allWord === randomWord) {
    window.alert("Congratulation! You Win");
    // end game
  } else {
    window.alert("Keep it up!");
    //hangman link hangman line with currentRowNum
    if (currentRowNum === 6) {
      // end game
    }
  }
}
// -- TO SHOW ALPHABET EACH CLICK (keyboard)
for (let i = 0; i < keysButton.length; i++) {
  keysButton[i].onclick = ({ target }) => {
    const keyButton = target.getAttribute("data-keyboard");
    console.log(allWord);
    if (keyButton === "enter" && allWord.length === 5) {
      checkWord();
    } else if (keyButton === "enter" && allWord.length !== 5) {
      window.alert("Word need to be 5 letters");
    } else if (keyButton === "del") {
      if (currentRowNum !== wordGuessed.length / 5) {
        space -= 1;
        // -- need to remove word from html
        wordGuessed.pop();
        allWord = allWord.substring(0, allWord.length - 2);
        const spaceEl = document.getElementById(String(space));
        console.log(spaceEl);
        spaceEl.textContent = "";
        // -- need to remove word from array in js
        spaceEl.classList.remove("word");
      }
    } else {
      inputGuessWord(keyButton);
    }
  };
}
