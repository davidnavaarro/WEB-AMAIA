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

// Función para controlar el siguiente/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para mostrar una diapositiva específica
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función principal para mostrar las diapositivas
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { 
    slideIndex = 1; 
  }
  if (n < 1) { 
    slideIndex = slides.length; 
  }
  
  // Oculta todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remueve la clase "active" de todos los puntos
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Muestra la diapositiva actual y activa el punto correspondiente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
