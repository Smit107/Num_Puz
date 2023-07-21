const SIZE = 4; // Adjust the size for different puzzle dimensions (e.g., 3 for 3x3, 4 for 4x4, etc.)
const EMPTY_CELL = SIZE * SIZE;

let puzzle = [];
let emptyRow, emptyCol;

function createPuzzle() {
    const numbers = Array.from({ length: SIZE * SIZE - 1 }, (_, i) => i + 1);
    numbers.push(EMPTY_CELL);

    for (let i = 0; i < SIZE; i++) {
        puzzle.push([]);
        for (let j = 0; j < SIZE; j++) {
            const randIndex = Math.floor(Math.random() * numbers.length);
            puzzle[i].push(numbers[randIndex]);
            if (numbers[randIndex] === EMPTY_CELL) {
                emptyRow = i;
                emptyCol = j;
            }
            numbers.splice(randIndex, 1);
        }
    }
}

function drawPuzzle() {
    const container = document.getElementById("puzzle-container");
    container.innerHTML = "";

    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const cellValue = puzzle[i][j];
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.textContent = cellValue === EMPTY_CELL ? "" : cellValue;
            cell.addEventListener("click", () => moveTile(i, j));
            container.appendChild(cell);
        }
    }
}

function moveTile(row, col) {
        if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) !== 1) {
        return;
    }

    puzzle[emptyRow][emptyCol] = puzzle[row][col];
    puzzle[row][col] = EMPTY_CELL;
    emptyRow = row;
    emptyCol = col;

    drawPuzzle();

    setTimeout(() => {
        if (checkWin()) {
            alert("Congratulations! You solved the puzzle!");
        }    
    },1); 

    
}

function checkWin() {
    const flatPuzzle = puzzle.flat();
    return flatPuzzle.slice(0, flatPuzzle.length - 1).every((val, i) => val === i + 1);
}

function shuffle() {
    puzzle = [];
    createPuzzle();
    drawPuzzle();
}

// Initialize the puzzle on page load
window.onload = () => {
    createPuzzle();
    drawPuzzle();
};



