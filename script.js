const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid');

let gridSize = 16;
const GRID_PIXELS = 650 * 650;
let opacity = 0;

const createGrid = (gridSize) => {
    
    opacity = 0;

    for ( let i = 0; i < gridSize; i++ ) {
        for ( let j = 0; j < gridSize; j++ ) { 
            const div = document.createElement('div');
            div.style.width = `${650 / gridSize}px`;
            div.style.height = `${650 / gridSize}px`;
            div.classList.add('grid-item');
            div.addEventListener('mouseenter', handleMouseEnter);
            gridContainer.appendChild(div);
        }
    }

}

const handleMouseEnter = (e) => {
    
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    e.target.style.opacity = `${opacity / 100}`;
    opacity += 10;
}

newGridButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    const size = prompt('Enter the number of rows and columns to create a grid');
    gridSize = size > 100 ? 100 : size;
    createGrid(gridSize);
})

createGrid();