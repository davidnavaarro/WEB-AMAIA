// Seleccionar la imagen
const img = document.querySelector('.floating-img');
let isDragging = false; // Bandera para saber si estamos arrastrando la imagen
let offsetX = 0; // Diferencia entre el clic y la posición de la imagen
let offsetY = 0;

// Evento que se dispara al hacer clic en la imagen (mousedown)
img.addEventListener('click', (event) => {
    // Alternar entre arrastrar y soltar la imagen
    isDragging = !isDragging;

    if (isDragging) {
        // Si comenzamos a arrastrar, calculamos la diferencia (offset) 
        const rect = img.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
    }
});

// Evento para mover la imagen cuando arrastramos el ratón (mousemove)
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        // Calcular la nueva posición de la imagen
        const xMove = event.clientX - offsetX;
        const yMove = event.clientY - offsetY;

        // Actualizar la posición de la imagen
        img.style.left = `${xMove}px`;
        img.style.top = `${yMove}px`;
        img.style.position = 'absolute'; // Asegurarnos que la imagen se pueda mover libremente
    }
});

