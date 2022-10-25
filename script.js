const gridContainer = document.querySelector('#grid-container');
const btnEraser = document.querySelector('#eraseBtn');
const btnClear = document.querySelector('#clearBtn');
const slider = document.getElementById('size-slider');
const divShowDimensions = document.querySelector('#grid-dimensions-show');

btnClear.addEventListener('click', clear);

let gridSize = slider.value;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid() {
    divShowDimensions.textContent = `${gridSize} x ${gridSize}`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor);
        gridContainer.appendChild(square);
    }
}

function changeColor(e, color) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "BLACK";
} 

function clear(e) {
    gridContainer.innerHTML = ''
    createGrid(gridSize)
}

window.onload = () => {
    createGrid(gridSize);
}

slider.oninput = function() {
    gridSize = slider.value;
    gridContainer.innerHTML = ''
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    createGrid(slider.value);
}

