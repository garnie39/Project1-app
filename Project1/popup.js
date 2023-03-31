//get popup
const howTo = document.getElementsByClassName("howTo");
const popUpBtn = document.getElementsByClassName("btn-popup");
const closeBtn = document.getElementsByClassName("letStart")[0];
const gameStart = document.getElementsByClassName("gameContainer");
const openHowTo = document.getElementsByClassName("icon");

//call function when pressing the button
popUpBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
openHowTo.addEventListener("click", openPopup);

//function to open popup
function openPopup() {
  howTo.style.display = "block";
}
//function to close popup
function closePopup() {
  howTo.style.display = "none";
  gameStart.style.display = "block";
}
