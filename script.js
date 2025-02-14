// Esperar a que el documento HTML esté completamente cargado y listo
document.addEventListener("DOMContentLoaded", function () {
    /*
    📌 INICIALIZACIÓN DE ANIMACIONES CON AOS
    AOS (Animate On Scroll) es una biblioteca para animaciones al hacer scroll
    Configuramos sus parámetros:
    - duration: Duración de la animación en milisegundos (1 segundo)
    - once: La animación solo se reproduce una vez
    - delay: Retardo antes de que comience la animación
    - easing: Tipo de suavizado de la animación
    - mirror: No repetir la animación al volver a scroll
    */
    AOS.init({
        duration: 1000,         // 1 segundo de duración
        once: true,             // Animación única por elemento
        delay: 150,             // 150ms de retardo inicial
        easing: 'ease-in-out',  // Movimiento suave al empezar y terminar
        mirror: false           // No animar al hacer scroll inverso
    });

    // 🎯 BOTÓN "VOLVER ARRIBA"
    const backToTopButton = document.getElementById("back-to-top");

    // Detectar cuando el usuario hace scroll
    window.addEventListener("scroll", function () {
        // Mostrar el botón solo si el scroll vertical es mayor a 300px
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Acción al hacer clic en el botón
    backToTopButton.addEventListener("click", function () {
        // Scroll suave hasta la parte superior de la página
        window.scrollTo({ 
            top: 0,              // Posición final (0px = inicio)
            behavior: "smooth"  // Desplazamiento animado
        });
    });

    // 📧 VALIDACIÓN DE FORMULARIO
    const form = document.querySelector("form");
    
    // Evento que se ejecuta al enviar el formulario
    form.addEventListener("submit", function (event) {
        // 1. Buscamos el campo de email en el formulario
        const emailInput = form.querySelector("input[type='email']");
        
        // 2. Verificamos si el email es válido
        if (!validateEmail(emailInput.value)) {
            event.preventDefault(); // Detenemos el envío del formulario
            alert("Por favor, introduce un email válido.");
        } else {
            alert("¡Gracias por registrarte! Te contactaremos pronto.");
        }
    });

    // Función para validar formato de email con Expresión Regular
    function validateEmail(email) {
        // La expresión regular verifica: texto@texto.texto
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // 🌄 EFECTO PARALLAX EN LA IMAGEN PRINCIPAL
    window.addEventListener("scroll", function () {
        // Seleccionamos la imagen de la sección hero
        const img = document.querySelector(".hero-img img");
        
        if (img) { // Si existe la imagen...
            // Calculamos la posición actual del scroll
            let scrollY = window.scrollY;
            
            // Aplicamos transformaciones:
            // - translateY: Mover verticalmente (20% del scroll)
            // - rotateZ: Rotación gradual (5% del scroll)
            img.style.transform = `
                translateY(${scrollY * 0.2}px) 
                rotateZ(${scrollY * 0.05}deg)
            `;
        }
    });

    // 🖱️ SCROLL SUAVE PARA ENLACES DE NAVEGACIÓN
    // Seleccionamos todos los enlaces que empiezan con #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // A cada enlace le añadimos un evento click
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evitamos el comportamiento normal del enlace
            
            // Hacemos scroll suave hasta el elemento objetivo
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Animación de desplazamiento
            });
        });
    });
});
