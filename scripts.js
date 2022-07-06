const WIDTH = 500, HEIGHT = 500;
const DIMENSION = 16;
var mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}


function colorGrid(event) {
    if (mouseDown) {
        this.style.background = 'blue';
    }
}

for (var i = 0; i < DIMENSION * DIMENSION; i++) {
    let gridHTML = document.createElement('div');
    gridHTML.classList.add('grid');
    gridHTML.addEventListener('mouseover', colorGrid);
    document.querySelector('.container').appendChild(gridHTML);
}
