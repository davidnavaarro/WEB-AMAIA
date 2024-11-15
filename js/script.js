function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenuLinks');
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}




// Seleccionamos todas las imágenes flotantes
const floatingImgs = document.querySelectorAll('.floating-img');
let isDragging = false; // Bandera para saber si estamos arrastrando la imagen
let offsetX = 0; // Diferencia entre el clic y la posición de la imagen
let offsetY = 0; // Diferencia entre el clic y la posición de la imagen
let draggedImg = null; // Variable para almacenar la imagen que estamos arrastrando

floatingImgs.forEach((img) => {
    // Evento que se dispara al hacer clic en la imagen (mousedown)
    img.addEventListener('mousedown', (event) => {
        isDragging = true; // Empezamos a arrastrar
        draggedImg = img; // Guardamos la imagen que estamos arrastrando

        // Hacer que la imagen se posicione de forma absoluta mientras se arrastra
        draggedImg.style.position = 'absolute'; // Cambia la imagen a posicionamiento absoluto durante el arrastre
        draggedImg.style.zIndex = '10'; // Aseguramos que esté sobre los otros elementos
        draggedImg.classList.add('moving'); // Añadimos clase "moving" para aplicar el estilo

        // Calculamos la diferencia (offset) entre la posición del mouse y la imagen
        const rect = draggedImg.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        draggedImg.style.cursor = 'grabbing'; // Cambia el cursor para indicar que se está arrastrando
    });

    // Evento para mover la imagen cuando arrastramos el ratón (mousemove)
    document.addEventListener('mousemove', (event) => {
        if (isDragging && draggedImg) {
            // Calcular la nueva posición de la imagen
            const xMove = event.clientX - offsetX;
            const yMove = event.clientY - offsetY;

            // Actualizar la posición de la imagen
            draggedImg.style.left = `${xMove}px`;
            draggedImg.style.top = `${yMove}px`;
        }
    });

    // Evento para cuando se suelta el ratón (mouseup)
    document.addEventListener('mouseup', () => {
        if (isDragging && draggedImg) {
            isDragging = false; // Dejamos de arrastrar
            draggedImg.style.cursor = 'grab'; // Cambia el cursor a 'grab'

            // Restaurar la posición dentro del layout
            draggedImg.classList.remove('moving'); // Quitamos la clase "moving"
            draggedImg.style.position = 'relative'; // La imagen vuelve a su lugar original
            draggedImg.style.zIndex = '1'; // Restaura el z-index
        }
    });
});

  // Abre el modal automáticamente después de 2 segundos
  $(document).ready(function(){
    setTimeout(function(){
        $('#newsletterModal').modal('show');
    }, 2000); // Puedes ajustar el tiempo de apertura aquí (en milisegundos)
});

// Simulación de suscripción
$('#subscribeForm').on('submit', function(event) {
    event.preventDefault();
    const email = $('#emailInput').val();
    if (email) {
        alert(`Gracias por suscribirte con el correo: ${email}`);
        $('#newsletterModal').modal('hide');
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
});



  document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    const email = document.getElementById('emailInput').value;

    if (email) {
        alert(`Gracias por suscribirte! Pronto recibirás novedades en ${email}`);
        document.getElementById('subscriptionForm').reset();
        var modal = bootstrap.Modal.getInstance(document.getElementById('subscribeModal'));
        modal.hide(); // Cierra la ventana modal
    }
});

