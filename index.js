var playButton = document.querySelector(".btn");

playButton.onclick = function(){ Roll();};

function Roll(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var diceImage1 = document.querySelector(".img1");
  var diceImage2 = document.querySelector(".img2");

  diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  }
  else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
  else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "🚩 Draw! 🚩";
  }
}
