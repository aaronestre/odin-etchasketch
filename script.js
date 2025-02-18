const gridContainer = document.getElementById('grid-container');

const createGrid = () => {
    
    for ( let i = 0; i < 16; i++ ) {
        for ( let j = 0; j < 16; j++ ) { 

            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.addEventListener('mouseenter', handleMouseEnter);
            gridContainer.appendChild(div);

        }
    }

}

const handleMouseEnter = (e) => { 
    e.target.style.backgroundColor = 'black';
}

createGrid();