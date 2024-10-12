// script.js

let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

// Evento cuando comienza a arrastrar el elemento
document.querySelectorAll('.draggable').forEach(img => {
    img.addEventListener('mousedown', function(event) {
        draggedElement = event.target;
        offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
        offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
        draggedElement.style.cursor = 'grabbing';
    });
});

// Evento para seguir el movimiento del ratón
document.addEventListener('mousemove', function(event) {
    if (draggedElement) {
        draggedElement.style.left = `${event.clientX - offsetX}px`;
        draggedElement.style.top = `${event.clientY - offsetY}px`;
    }
});

// Evento cuando se suelta el ratón
document.addEventListener('mouseup', function() {
    if (draggedElement) {
        draggedElement.style.cursor = 'grab';
        draggedElement = null;
    }
});
