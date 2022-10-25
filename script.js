const gridContainer = document.querySelector('#grid-container');
const btnEraser = document.querySelector('#eraseBtn');
const btnBlack = document.querySelector('#blackBtn')
const btnRainbow = document.querySelector('#rainbowBtn');
const btnClear = document.querySelector('#clearBtn');
const slider = document.getElementById('size-slider');
const divShowDimensions = document.querySelector('#grid-dimensions-show');

btnClear.addEventListener('click', clear);

let color = "BLACK";

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

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (color === "COLOR") {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else {
        e.target.style.backgroundColor = `${color}`;
    }
} 

function clear(e) {
    gridContainer.innerHTML = ''
    createGrid(gridSize)
}

btnBlack.onclick = function() {
    color = "BLACK";
}

btnEraser.onclick = function () {
    color = "WHITE";
}

btnRainbow.onclick = function () {
    color = "COLOR"
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

