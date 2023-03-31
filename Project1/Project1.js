// function howToPlay() {}
let currentRowNum = 1;
let wordGuessed = []; //should be all letters
let allWord = []; // single word for each row
let space = 1;
const randomWord = validWords[Math.floor(Math.random() * validWords.length)];
console.log(randomWord);
// -- KEYBOARD BUTTON
const keysButton = document.querySelectorAll(".keyboardRow button");
// -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
function inputGuessWord(keyButton) {
  const word = wordGuessed;
  console.log(`word ${word}`);
  if (word && word.length < 30) {
    console.log(word);
    word.push(keyButton); //push letters into the square
    if (word.length % 5 == 0) {
      allWord = "";
      let startIndex = word.length - 5;
      let endIndex = word.length;
      for (let x = startIndex; x < endIndex; x++) {
        allWord += word[x];
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
// give color to the currect letters
function colorCheck() {
  const word = wordGuessed;
  let startIndex = word.length - 5;
  let endIndex = word.length;
  let randomWordCounter = 0;
  for (let x = startIndex; x < endIndex; x++) {
    allWord += word[x];
    if (word[x] == randomWord[randomWordCounter]) {
      //check if the letter are in the correct location and match with the ramdomWord
      // assign orange to the key with id x+1
      let id = startIndex + randomWordCounter + 1;
      document.getElementById(id).classList.add("c-orange");
    } else if (randomWord.includes(word[x])) {
      //check if the letter are correct but in the wrong location
      // assign gold to the key with id x+1
      let id = startIndex + randomWordCounter + 1;
      document.getElementById(id).classList.add("c-gold");
    }
    randomWordCounter++;
  }
}
function checkWord() {
  currentRowNum = wordGuessed.length / 5;
  if (allWord === randomWord) {
    alert("CONGRATULATION! You won!");
  } else {
    //hangman link hangman line with currentRowNum
    const bodyPart = document.querySelectorAll(".bodyPart");
    for (let i = 0; i < currentRowNum; i++) {
      if (currentRowNum !== randomWord) {
        bodyPart[i].style.display = "block";
      }
    }
    if (currentRowNum === 6) {
      alert("Sorry! You might win next turn!");
    }
  }
}
// -- TO SHOW ALPHABET EACH CLICK (keyboard)
for (let i = 0; i < keysButton.length; i++) {
  keysButton[i].onclick = ({ target }) => {
    const keyButton = target.getAttribute("data-keyboard");
    if (keyButton === "enter" && allWord.length === 5) {
      checkWord();
      colorCheck(); //appear once click "enter"
    } else if (keyButton === "enter" && allWord.length !== 5) {
      window.alert("Word need to be 5 letters");
    } else if (keyButton === "del") {
      if (currentRowNum !== wordGuessed.length / 5) {
        space -= 1;
        // -- need to remove word from html
        wordGuessed.pop();
        allWord = allWord.substring(0, allWord.length - 2);
        const spaceEl = document.getElementById(String(space));
        spaceEl.textContent = "";
        // -- need to remove word from array in js
        spaceEl.classList.remove("word");
      }
    } else {
      inputGuessWord(keyButton);
    }
  };
}
