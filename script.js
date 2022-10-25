const gridContainer = document.querySelector('#grid-container');
const btnEraser = document.querySelector('#eraseBtn');
const btnClear = document.querySelector('#clearBtn');
const slider = document.getElementById('size-slider')

btnClear.addEventListener('click', clear);

let gridSize = slider.value;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid() {
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
    gridContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    gridContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr";

    createGrid(slider.value);
}

