

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

$(document).ready(function(){
  $('.your-class').slick({
      infinite: true,          // Carrusel en bucle infinito
      slidesToShow: 1,         // Mostrar 1 imagen a la vez
      slidesToScroll: 1,       // Desplazar 1 imagen a la vez
      autoplay: false,         // Desactivar el autoplay (si lo deseas puedes activarlo)
      autoplaySpeed: 2000,     // Velocidad del autoplay (en milisegundos) (opcional si autoplay está activado)
      arrows: true,            // Mostrar los botones de siguiente y anterior
      prevArrow: $('.prev-slide'),  // Usar el botón personalizado "Anterior"
      nextArrow: $('.next-slide'),  // Usar el botón personalizado "Siguiente"
      dots: false,             // No mostrar los puntos de navegación
      fade: false,             // Desactivar el efecto de desvanecimiento (opcional)
      responsive: [
          {
              breakpoint: 768,  // Ajuste para pantallas pequeñas
              settings: {
                  slidesToShow: 1,    // En pantallas pequeñas mostrar 1 imagen
                  slidesToScroll: 1   // Desplazar 1 imagen a la vez
              }
          },
          {
              breakpoint: 1024,  // Ajuste para pantallas medianas
              settings: {
                  slidesToShow: 1,    // Mostrar 1 imagen a la vez en pantallas medianas
                  slidesToScroll: 1   // Desplazar 1 imagen a la vez
              }
          }
      ]
  });
});
