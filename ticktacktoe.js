// Select all cells and the reset button
const reset = document.getElementById("reset");
const cells = document.querySelectorAll(".cell");

let currentPlayer = "X"; // Start with player X
let moveCount = 0; // Track the number of moves

// Add event listeners to all cells
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

// Handle cell click
function handleCellClick(event) {
  const cell = event.target;
  // Check if the cell is already filled
  if (cell.textContent !== "") {
    return;
  } else {
    // Place the current player's mark
    cell.textContent = currentPlayer;
    // Increment move count
    moveCount++;
  }

  // Check for a winner or draw
  if (checkWinner()) {
    alert(`${currentPlayer} wins!`);
    resetGame();
    return;
  }

  if (moveCount === 9) {
    alert("It's a Draw!");
    resetGame();
    return;
  }

  // Switch to the next player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// patterns that leads to win
function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winPatterns.some((array) => {
    return (
      cells[array[0]].textContent === currentPlayer &&
      cells[array[1]].textContent === currentPlayer &&
      cells[array[2]].textContent === currentPlayer
    );
  });
}

// resets the game
function resetGame() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  moveCount = 0;
}
reset.addEventListener("click", resetGame);
