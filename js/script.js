// texto que se redacta 
var typed = new Typed('#element-1', {
    strings: ['AMAIA'],
    typeSpeed: 90,
    loop: true,
    showCursor: false,
  });

  var typed = new Typed('#element-2', {
    strings: ['NUEVO','ÁLBUM'],
    typeSpeed: 90,
    loop: true,
    showCursor: false,
  });





// Selecciona solo la imagen de la diapositiva activa
function enableDragForActiveImage() {
    const activeItem = document.querySelector('.carousel-item.active .draggable');
    
    if (activeItem) {
        let isDragging = false;
        let offsetX, offsetY;

        // Evento de inicio de arrastre
        activeItem.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - activeItem.getBoundingClientRect().left;
            offsetY = e.clientY - activeItem.getBoundingClientRect().top;
            activeItem.style.position = 'absolute';
            activeItem.style.zIndex = '10'; // Asegura que esté por encima de otros elementos
        });

        // Evento de arrastre
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                activeItem.style.left = `${e.clientX - offsetX}px`;
                activeItem.style.top = `${e.clientY - offsetY}px`;
            }
        });

        // Evento de fin de arrastre
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
}

// Llama a la función cuando el carrusel cambia de diapositiva
document.getElementById('productCarousel').addEventListener('slid.bs.carousel', enableDragForActiveImage);

// Habilita el arrastre para la primera imagen al cargar la página
enableDragForActiveImage();





$(document).ready(function() {
    // Abre el modal automáticamente después de 2 segundos
    setTimeout(function() {
        $('#newsletterModal').modal('show');
    }, 2000);    

    // Simulación de suscripción
    $('#subscribeForm').on('submit', function(event) {
        event.preventDefault(); 
        const email = $('#emailInput').val().trim(); 
        if (email) {
            alert(`Gracias por suscribirte con el correo: ${email}`);
            $('#newsletterModal').modal('hide'); 
        } else {
            alert("Por favor, ingresa un correo electrónico válido.");
        }    
    });    
});    



  