// Colocamos todas las variables.
const selectBox = document.querySelector('.select-box');
const playBoard = document.querySelector('.play-board');
const allBox = document.querySelectorAll('section span');
const btnSelectX = document.querySelector('.playerX');
const btnSelectO = document.querySelector('.playerO');
const players = document.querySelector('.players');
const resultBox = document.querySelector('.result-box');
const wonText = document.querySelector('.won-text')
const btnReplay = document.querySelector('.btn button');

addEventListener('DOMContentLoaded', () => {
  // We choose which player we want to be.
  btnSelectX.addEventListener("click", () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
  });

  btnSelectO.addEventListener("click", () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
  });
  // Every time we 'click' on a box this function is executed.
  allBox.forEach((el) => {
    el.addEventListener("click", clickedBox);
  });
});

// Icon variables.
let playerOIcon = 'fa-regular fa-circle';
let playerXIcon = 'fa-solid fa-xmark';
let playerCalled;
// Variable to know if we want the bot to be active or not.
let runBot = true;

// Function to give properties to the boxes.
const clickedBox = (e) => {
  if(players.classList.contains('player')){
    e.target.innerHTML = `<i class="${playerOIcon}"></i>`;
    players.classList.remove('active');
    playerCalled = "O";
     e.target.setAttribute('id', playerCalled);
  } else {
    e.target.innerHTML = `<i class="${playerXIcon}"></i>`;
    players.classList.add('active');
    playerCalled = 'X'
    e.target.setAttribute('id', playerCalled);
  }
  e.target.style.pointerEvents = 'none';
  playBoard.style.pointerEvents = 'none';
  setTimeout(() => {
    bot();
  }, 1000);
    selectWinner();
}

// Function of the bot, to be our opponent.
const bot = () => {
  if (runBot) {
    // We verify which boxes are incomplete so that the bot can execute its function.
    let array = [];
    allBox.forEach((el, i) => {
      if (el.childElementCount == 0) {
        array.push(i);
      }
    });
    let randomBox = array[Math.floor(Math.random() * (array.length - 1))];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
        playerCalled = "X";
        allBox[randomBox].setAttribute("id", playerCalled);
      } else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        playerCalled = "O";
        allBox[randomBox].setAttribute("id", playerCalled);
      }
      playBoard.style.pointerEvents = "auto";
      allBox[randomBox].style.pointerEvents = "none";
    }
    selectWinner();
  }
}

// We create a function to be able to detect the id of each box.
const getClass = (idName) => {
  return document.querySelector('.box' + idName).id;
}

// We verify that each value contains the same sign.
const checkClass = (val1, val2, val3, called) => {
    if(getClass(val1) == called && getClass(val2) == called && getClass(val3) == called){
        return true;
    }
}

// We verify that the signs of the same type are in any of these positions in order to select the winner.
const selectWinner = () => {
  if(checkClass(1,2,3,playerCalled) || checkClass(4,5,6,playerCalled) ||checkClass(7,8,9,playerCalled) ||checkClass(1,4,7,playerCalled) ||checkClass(2,5,8,playerCalled) ||checkClass(3,6,9,playerCalled) ||checkClass(1,5,9,playerCalled) || checkClass(3,5,7,playerCalled)){
    // We deactivate the bot.
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      playBoard.classList.remove("show");
      resultBox.classList.add("show");
    }, 700);
    // We declare the winner.
    wonText.innerHTML = `Player <p>${playerCalled}</p> won tha game`;
  } else {
    if(getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != ""){
      // We deactivate the bot.
      runBot = false;
      bot(runBot);
      setTimeout(() => {
        playBoard.classList.remove("show");
        resultBox.classList.add("show");
      }, 700);
      // We declare the winner
      wonText.innerHTML = `Match has been tied!`;
    }
  }
}
// We restart the page to be able to play again.
btnReplay.addEventListener('click', (e) => {
  location.reload();
})

