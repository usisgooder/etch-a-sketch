const WIDTH = 500, HEIGHT = 500;
const MIN_DIMENSION = 4, MAX_DIMENSION = 100;
const CANVAS = document.querySelector('.canvas');
const DIMENSION_DISPLAY = document.querySelector('.dimension-display');
var dimension = 16;
var slider = document.getElementById("dimension-slider");
var mouseDown = false;

slider.oninput = function() {
    DIMENSION_DISPLAY.innerHTML = `${this.value}x${this.value}`;
    dimension = this.value;
}

document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}
document.body.onmouseleave = function() {
    mouseDown = false;
}

function colorGrid(event) {
    if (mouseDown) {
        this.style.background = 'blue';
    }
}

function clearCanvas() {
    CANVAS.innerHTML = "";
}

function resizeCanvas() {
    let gridDimension = WIDTH / dimension;
    resetGrid();
    CANVAS.style.setProperty('grid-template', `repeat(${dimension}, 1fr) / repeat(${dimension}, 1fr)`);
    console.log(gridDimension+'');
    document.querySelectorAll('.grid').forEach(function(el, ind) {
        el.style.width = `${gridDimension}`;
        el.style.height = `${gridDimension}`;
    });
}

function resetGrid() {
    clearCanvas();
    initializeGrid();
}

function initializeGrid() {
    for (var i = 0; i < dimension * dimension; i++) {
        let gridHTML = document.createElement('div');
        gridHTML.classList.add('grid');
        gridHTML.addEventListener('mouseover', colorGrid);
        CANVAS.appendChild(gridHTML);
    }
}

initializeGrid();
