const gridContainer = document.querySelector('#grid-container');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.textContent = 'B';
        gridContainer.appendChild(div);
    }
}

createGrid();