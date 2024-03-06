# Project1: Hang Man Wordle
As one of project's key requirements is to use Wordle app as an inspiration for creating the game. I personally enjoy Hang man and think it would be fun to have Mr.Hang man to join in which allow the player to find out what is the hidden word inside.

[Play Here](https://garnie39.github.io/Project1-app/)
## Project Description 
Hang Man Wordle is really simple, fun game for you to try!
How to check if the letters you fill in are correct?!
Here are some tips:
### If the boxes don't change any color means all letters are wrong:
![alt text](https://raw.githubusercontent.com/garnie39/Project1-app/main/Screen%20Shot%202023-04-04%20at%201.29.39%20pm.png)
### If the boxes turn to orange means the letters are correct and at the right location!:
![alt text](https://raw.githubusercontent.com/garnie39/Project1-app/main/Screen%20Shot%202023-04-04%20at%201.29.59%20pm.png)
### If the boxes turn to yellow means the letters are correct but at the wrong location!:
![alt text](https://raw.githubusercontent.com/garnie39/Project1-app/main/Screen%20Shot%202023-04-04%20at%201.29.07%20pm.png)
### Watch out for the Hang man stage! Otherwise game over!:
![alt text](https://raw.githubusercontent.com/garnie39/Project1-app/main/Screen%20Shot%202023-04-04%20at%201.31.32%20pm.png)
## Languages
* HTML
* CSS
* JavaScript
## Project discovery
Thoughtout the project, I have done many research and discoveries many new thing such as
* SVG (Scalable Vector Graphic) for the hang man part
```html
<svg height="400" width="400" class="hangManContainer">
  <!-- stage -->
  <line x1="50" y1="20" x2="250" y2="20" />
  <line x1="250" y1="20" x2="250" y2="50" />
  <line x1="50" y1="20" x2="50" y2="380" />
  <line x1="20" y1="380" x2="120" y2="380" />
  <!-- head -->
  <circle cx="250" cy="100" r="50" class="bodyPart"/>
  <!-- body -->
  <line x1="250" y1="150" x2="250" y2="250" class="bodyPart" />
  <!-- arms -->
  <line x1="250" y1="180" x2="300" y2="230" class="bodyPart" />
  <line x1="250" y1="180" x2="200" y2="230" class="bodyPart" />
  <!-- legs -->
  <line x1="250" y1="250" x2="200" y2="350" class="bodyPart" />
  <line x1="250" y1="250" x2="300" y2="350" class="bodyPart" />
</svg>
```
  - Here is how I connected each part of hangman body to each row
```javascript
const bodyPart = document.querySelectorAll(".bodyPart");
for (let i = 0; i < currentRowNum; i++) {
  if (currentRowNum !== randomWord) {
      bodyPart[i].style.display = "block";
  }
}
```
## Future improvement
Due to tight timeline, I couldn't be able to do much for this project but here are the development list that I would like to do in the future:
1. Pop up page on showing how to play
2. Add function for "?" and "Retry" buttons
3. Allow the game to provide player's score
4. Add animation into each square
5. Make hangman visually present

## Credit
I won't be able to complete this project with out help from GA's team, so I would like to use this space to thank Vishal, Beiwei, Adora, Micheal and the team for being so patient on guiding me throughout the project.

## Resource
[MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)

[Elegantthemes](https://www.elegantthemes.com/blog/wordpress/what-is-an-svg-file-and-how-do-you-use-it)

[HangmanGame](https://www.youtube.com/watch?v=fsK9pydvDvY)
