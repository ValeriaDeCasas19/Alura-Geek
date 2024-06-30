import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

// Function to construct product card
export default function construyeCard(nombre, precio, imagen) {
    const producto = document.createElement("div");
    producto.className = "product-card";
    producto.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <p>${nombre}</p>
        <p>${precio}</p>
    `;
    return producto;
}

// Function to list products
async function listaProductos() {
    const productos = await conectaAPI.listaProductos();
    productos.forEach(producto => lista.appendChild(construyeCard(producto.nombre, producto.precio, producto.imagen)));
}

// Load products on page load
listaProductos();
