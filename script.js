
/* =====================================
   CENTRO MÉDICO VIDA Y SALUD
   FUNCIONES JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTOS DEL MENÚ
    const enlaces = document.querySelectorAll("nav a");

    // SECCIONES DE LA PÁGINA
    const secciones = document.querySelectorAll(
        "section[id]"
    );

    // NAVEGACIÓN DEL MENÚ
    enlaces.forEach(enlace => {

        enlace.addEventListener("click", function(event) {

            const destino = this.getAttribute("href");

            if (destino && destino.startsWith("#")) {

                const seccion = document.querySelector(destino);

                if (seccion) {
                    event.preventDefault();

                    seccion.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });

    });

    // RESALTAR SECCIÓN ACTIVA EN EL MENÚ
    function actualizarMenu() {

        let seccionActual = "";

        secciones.forEach(seccion => {

            const posicion = seccion.getBoundingClientRect();

            if (posicion.top <= 150 && posicion.bottom > 150) {
                seccionActual = seccion.getAttribute("id");
            }

        });

        enlaces.forEach(enlace => {

            enlace.classList.remove("active");

            if (
                enlace.getAttribute("href") ===
                "#" + seccionActual
            ) {
                enlace.classList.add("active");
            }

        });
    }

    window.addEventListener(
        "scroll",
        actualizarMenu,
        { passive: true }
    );

    actualizarMenu();

    // ACTUALIZAR AÑO AUTOMÁTICAMENTE
    const piePagina = document.querySelector("footer p:last-child");

    if (piePagina) {
        piePagina.textContent =
            `© ${new Date().getFullYear()} Centro Médico Vida y Salud`;
    }

    // ANIMACIONES AL DESPLAZARSE
    const elementos = document.querySelectorAll(
        ".service, .doctor, .contact-card, .vital"
    );

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(
            (entradas, observer) => {

                entradas.forEach(entrada => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visible");

                        observer.unobserve(entrada.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        elementos.forEach(elemento => {
            observador.observe(elemento);
        });
    }

    console.log(
        "Centro Médico Vida y Salud: página cargada correctamente."
    );

});
