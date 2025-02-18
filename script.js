const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid');

let gridSize = 16;
const GRID_PIXELS = 650 * 650;

const createGrid = (gridSize) => {
    
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
    e.target.style.backgroundColor = 'black';
}

newGridButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    const size = prompt('Enter the number of rows and columns to create a grid');
    gridSize = size > 100 ? 100 : size;
    createGrid(gridSize);
})

createGrid();