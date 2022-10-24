const gridContainer = document.querySelector('#grid-container');
const DIMENSION = 16;
function createGrid() {
    for (let i = 0; i < DIMENSION * DIMENSION; i++) {
        const div = document.createElement('div');
        div.classList.add("square");
        gridContainer.appendChild(div);
    }
}

createGrid();