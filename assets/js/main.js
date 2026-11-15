// Botón hamburguesa
const botonMenu = document.querySelector(".nav-menu-toggle");

// Barra de menú
const menu = document.querySelector(".nav-menu");

// Interceptar el evento click del botón hamburguesa
botonMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
});


// Botón scroll-up
const botonArriba = document.querySelector(".btn-subir");
// Función para controlar la visibilidad de botón 
function mostrarBotonArriba() {
    if (window.scrollY <= 300) {
        botonArriba.hidden = true; // Oculta el botón
    } else {
        botonArriba.hidden = false;  // Muestra botón
    }
}
// Ejecuta la función cada vez que desplaza el scroll vertical
window.addEventListener("scroll", mostrarBotonArriba);

// Ejecuta la funcion al cargar la página
mostrarBotonArriba();