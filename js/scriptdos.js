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

// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Función para controlar el cambio de diapositivas con botones "prev" y "next"
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para cambiar a una diapositiva específica al hacer clic en un punto
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función principal para mostrar la diapositiva actual
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Si el índice es mayor que el número total de diapositivas, vuelve al inicio
  if (n > slides.length) { slideIndex = 1; }
  // Si el índice es menor que 1, muestra la última diapositiva
  if (n < 1) { slideIndex = slides.length; }

  // Oculta todas las diapositivas y quita la clase "active" de todos los puntos
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Muestra la diapositiva actual y añade la clase "active" al punto correspondiente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

