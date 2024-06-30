import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");


async function crearProd(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conectaAPI.crearProducto(nombre, precio, imagen);
        window.location.reload(); 
    } catch (error) {
        console.error('Error creating product:', error);
        alert('Error creating product. Please try again.');
    }
}


formulario.addEventListener("submit", crearProd);
