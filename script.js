// Esperamos a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // 📌 INICIALIZACIÓN DE ANIMACIONES AOS
    AOS.init({
        duration: 1000, // La animación dura 1 segundo (1000ms)
        once: true, // La animación solo se ejecuta una vez, no se repite al hacer scroll
    });

    // 📌 VALIDACIÓN DEL FORMULARIO
    const form = document.querySelector("form"); // Seleccionamos el formulario en la página

    // Evento que se ejecuta cuando el usuario intenta enviar el formulario
    form.addEventListener("submit", function (event) {
        const emailInput = form.querySelector("input[type='email']"); // Seleccionamos el campo de email

        // Si el email no es válido, mostramos una alerta y detenemos el envío del formulario
        if (!validateEmail(emailInput.value)) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert("Por favor, introduce un email válido.");
        } else {
            alert("¡Gracias por registrarte! Te contactaremos pronto.");
        }
    });

    // Función para validar el email con una expresión regular
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // 📌 AVISO DE COOKIES
    const cookieBanner = document.createElement("div"); // Creamos un contenedor para el banner de cookies
    cookieBanner.innerHTML = `
        <div class="cookie-banner">
            <p>Usamos cookies para mejorar tu experiencia. <a href="#">Más info</a></p>
            <button id="accept-cookies">Aceptar</button>
        </div>
    `;

    // Aplicamos estilos al banner de cookies mediante JavaScript
    cookieBanner.style.cssText = `
        position: fixed; /* Fijar el banner en la pantalla */
        bottom: 20px; /* Posición en la parte inferior */
        left: 50%; /* Centrar en la pantalla */
        transform: translateX(-50%); /* Ajuste fino para centrar */
        background: rgba(0, 0, 0, 0.8); /* Fondo oscuro semitransparente */
        color: white;
        padding: 15px;
        border-radius: 5px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    document.body.appendChild(cookieBanner); // Agregamos el banner al final del <body>

    // Evento para ocultar el banner cuando el usuario hace clic en "Aceptar"
    document.getElementById("accept-cookies").addEventListener("click", function () {
        cookieBanner.style.display = "none"; // Oculta el banner de cookies
    });

    // 📌 EFECTO DE VIBRACIÓN EN BOTONES AL PASAR EL MOUSE
    document.querySelectorAll(".btn, .contacto button").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)"; // Aumenta ligeramente el tamaño del botón
            btn.style.transition = "transform 0.2s ease"; // Transición suave de 0.2 segundos
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)"; // Regresa al tamaño original
        });
    });

    // 📌 EFECTO PARALLAX EN LA IMAGEN PRINCIPAL AL HACER SCROLL
    window.addEventListener("scroll", function () {
        const img = document.querySelector(".hero-img img"); // Seleccionamos la imagen dentro del contenedor .hero-img

        if (img) { // Verificamos que la imagen exista antes de aplicar el efecto
            let scrollY = window.scrollY; // Obtenemos la posición actual del scroll
            img.style.transform = `translateY(${scrollY * 0.2}px)`; // Movemos la imagen suavemente hacia abajo
        }
    });
});
