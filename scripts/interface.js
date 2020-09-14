document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  console.log(event.target);

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime === 0) {
        return alert("O Jogo Acabou - O Vencedor foi o Escudo");
      } else {
        return alert("O Jogo Acabou - O Vencedor foi o Espada");
      }
    }, 10);
  }
  updateSquares(position);
}

function updateSquares(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

let reset = document.getElementById('reset');
reset.addEventListener("click", resetGame);

function resetGame() {
  let board = ["", "", "", "", "", "", "", "", ""];
  let playerTime = 0;
  let gameOver = false;
  clearFields();
}

function clearFields() {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.innerHTML = "";
  });
}
