const gridContainer = document.querySelector('#grid-container');
const DIMENSION = 16;

function createGrid() {
    for (let i = 0; i < DIMENSION * DIMENSION; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('click', changeSquareColor, false);
        gridContainer.appendChild(square);
    }
}

function changeSquareColor(e) {
    this.style.backgroundColor = "BLACK";
} 

createGrid();