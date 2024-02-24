//function reset
function resetGame() {
  if (!validWords || validWords.length === 0) {
    return;
  }

  //reset variables and clear game state
  currentRowNum = 1;
  wordGuessed = [];
  allWord = [];
  space = 1;

  //Clear the hangman display
  const bodyPart = document.querySelectorAll(".bodyPart");
  for (let part of bodyPart) {
    part.style.display = "none";
  }

  //Clear the word display
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.textContent = "";
    square.classList.remove("word", "c-orange", "c-gold");
  }

  //Hide result dialog if it's open
  const resultDialog = document.querySelector(".resultShow");
  if (resultDialog) {
    resultDialog.close();
    resultDialog.parentNode.removeChild(resultDialog);
  }

  //Show the game container and hide the introduction or how to container
  const gameContainer = document.getElementById("gameContainer");
  const introducePage = document.getElementById("howToContainer");
  gameContainer.style.visibility = "visible";
  introducePage.style.visibility = "hidden";
}

document.getElementById("restart").addEventListener("click", resetGame);

// function howToPlay() {}
const introducePage = document.getElementById("howToContainer");
const howToBtn = document.getElementById("howToBtn");
const playBtn3 = document.getElementById("playBtn");

playBtn3.addEventListener("click", () => {
  const howToContainer = document.getElementById("howToContainer");
  const gameContainer = document.getElementById("gameContainer");
  howToContainer.style.visibility = "hidden";
  gameContainer.style.visibility = "visible";
  introducePage.style.visibility = "hidden";
});

howToBtn.addEventListener("click", () => {
  const howTo2 = document.createElement("dialog");
  const detail2 = document.createElement("div");
  howTo2.className = "howTo";
  detail2.className = "howToDetail";
  introducePage.appendChild(howTo2);
  howTo2.showModal();

  detail2.innerHTML = `
  <h1 id="howToHeader" class="howToHeader">How To Play</h1>
  </br>
  <h3 id="welcomeMessage" class="welcomeMessage">Welcome to Hangman Wordle!</h3>
  <p id="howToMessage" class="howToMessage">Guess the WORDLE in 6 tries</p>
  <p id="howToMessageDetail" class="howToMessageDetail">After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
  <h3 id="explainMessage" class="explainMessage">The letter S, H, A are in the word but in the wrong spot</h3>
  <img src="/Users/garnieboboo/Project1/Project1-app/image/Screen Shot 2023-10-05 at 2.45.53 pm.png"/>
  </br>
  <h3 id="explainMessage" class="explainMessage">However the letter H, A, D, S are in the word and in the correct spots.</h3>
  <img src="/Users/garnieboboo/Project1/Project1-app/image/Screen Shot 2023-10-05 at 2.46.22 pm.png"/>
  </br>
  <h3 id="explainMessage" class="explainMessage">Watch out for your man not to get hanged!</h3>
  <img src="/Users/garnieboboo/Project1/Project1-app/image/Screen Shot 2023-10-05 at 3.09.01 pm.png"/>
  </br>
  <h2 id="play" class="play">Try it out yourself!</h2>
  `;

  const playBtn2 = document.createElement("playBtn");
  playBtn2.className = "playBtn";
  playBtn2.innerHTML = "PLAY";
  playBtn2.addEventListener("click", () => {
    howTo2.close();
    introducePage.removeChild(howTo2);
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.style.visibility = "visible";
    introducePage.style.visibility = "hidden";
  });

  howTo2.append(detail2, playBtn2);
});

document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restart");
  const gameContainer = document.getElementById("gameContainer");
  const introducePage = document.getElementById("howToContainer");

  restartBtn.addEventListener("click", () => {
    gameContainer.style.visibility = "visible";
    introducePage.style.visibility = "hidden";
  });
});

const icon = document.getElementById("icon");
const pageElement = document.getElementById("pageElement");
icon.addEventListener("click", () => {
  const howTo = document.createElement("dialog");
  const detail = document.createElement("div");
  howTo.className = "howTo";
  detail.className = "howToDetail";
  pageElement.appendChild(howTo);
  howTo.showModal();

  detail.innerHTML = `
  <h1 id="howToHeader" class="howToHeader">How To Play</h1>
  </br>
  <h3 id="welcomeMessage" class="welcomeMessage">Welcome to Hangman Wordle!</h3>
  <p id="howToMessage" class="howToMessage">Guess the WORDLE in 6 tries</p>
  <p id="howToMessageDetail" class="howToMessageDetail">After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
  <h3 id="explainMessage" class="explainMessage">The letter S, H, A are in the word but in the wrong spot</h3>
  <img src="/Users/garnieboboo/Project1/Project1-app/image/Screen Shot 2023-10-05 at 2.45.53 pm.png" id="sampleImage"/>
  </br>
  <h3 id="explainMessage" class="explainMessage">However the letter H, A, D, S are in the word and in the correct spots.</h3>
  <img src="/Users/garnieboboo/Project1/Project1-app/image/Screen Shot 2023-10-05 at 2.46.22 pm.png" id="sampleImage"/>
  </br>
  <h3 id="explainMessage" class="explainMessage">Watch out for your man not to get hanged!</h3>
  <img src="/Users/garnieboboo/Project1/Project1-app/image/Screen Shot 2023-10-05 at 3.09.01 pm.png" id="sampleImage"/>
  </br>
  <h2 id="play" class="play">Try it out yourself!</h2>
  `;

  const playBtn = document.createElement("playBtn");
  playBtn.className = "playBtn";
  playBtn.innerHTML = "PLAY";
  playBtn.addEventListener("click", () => {
    howTo.close();
    pageElement.removeChild(howTo);
  });

  howTo.append(detail, playBtn);
});

let currentRowNum = 1;
let wordGuessed = []; //should be all letters
let allWord = []; // single word for each row
let space = 1;
const randomWord = validWords[Math.floor(Math.random() * validWords.length)];
// console.log(randomWord);

// -- KEYBOARD BUTTON
const keysButton = document.querySelectorAll(".keyboardRow button");

// -- LINK THE INPUT FROM KEYBOARD TO THE SQUARES
function inputGuessWord(keyButton) {
  const word = wordGuessed;
  // console.log(`word ${word}`);
  if (word && word.length < 30) {
    // console.log(word);
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
      let id = startIndex + randomWordCounter + 1; // have to be + 1 because my letter start at 0
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
    const pageElement2 = document.getElementById("pageElement");
    const result2 = document.createElement("dialog");
    const detailResult2 = document.createElement("div");
    result2.className = "resultShow";
    detailResult2.className = "detailResultShow";
    pageElement2.appendChild(result);
    result2.showModal();

    detailResult2.innerHTML = "<h1>CONGRATULATION! You won!</h1>";

    const playAgainBtn2 = document.createElement("playBtn");
    playAgainBtn2.className = "playBtn";
    playAgainBtn2.innerHTML = "PLAY AGAIN";
    playAgainBtn2.addEventListener("click", resetGame);

    result2.append(detailResult2, playAgainBtn2);
    //planned to add popup for endgame
  } else {
    //hangman link hangman line with currentRowNum
    const bodyPart = document.querySelectorAll(".bodyPart");
    for (let i = 0; i < currentRowNum; i++) {
      if (currentRowNum !== randomWord) {
        bodyPart[i].style.display = "block";
      }
    }
    if (currentRowNum === 6) {
      const pageElement = document.getElementById("pageElement");
      const result = document.createElement("dialog");
      const detailResult = document.createElement("div");
      result.className = "resultShow";
      detailResult.className = "detailResultShow";
      pageElement.appendChild(result);
      result.showModal();

      detailResult.innerHTML = `<h1>Sorry! You might win next turn!</h1>
      </br>
      <h2>The answer is ${randomWord}</h2>`;

      const playAgainBtn = document.createElement("playBtn");
      playAgainBtn.className = "playAgainBtn";
      playAgainBtn.innerHTML = "PLAY AGAIN";
      playAgainBtn.addEventListener("click", resetGame);
      result.append(detailResult, playAgainBtn);

      //planned to add popup for endgame
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
      handleDelete();
    } else {
      inputGuessWord(keyButton);
    }
  };
}

//function delete
function handleDelete() {
  if (
    currentRowNum !== Math.ceil(wordGuessed.length / 5) &&
    allWord.length !== 0
  ) {
    space -= 1;

    //Remove word from html
    const spaceEl = document.getElementById(String(space));
    spaceEl.textContent = "";
    spaceEl.classList.remove("word");

    //Remove word from array in JS
    wordGuessed.pop();
    allWord = allWord.substring(0, allWord.length - 2);
  }
}
