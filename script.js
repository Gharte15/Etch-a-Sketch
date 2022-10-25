const gridContainer = document.querySelector('#grid-container');
const btnEraser = document.querySelector('#eraseBtn');
const btnClear = document.querySelector('#clearBtn');
const sizeSlider = document.getElementById('size-slider')

const DEFAULT_GRID_SIZE = 16;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        gridContainer.appendChild(square);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "BLACK";
} 

window.onload = () => {
    createGrid(DEFAULT_GRID_SIZE);
}


