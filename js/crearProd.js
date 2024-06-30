import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");


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


async function listaProductos() {
    const productos = await conectaAPI.listaProductos();
    productos.forEach(producto => lista.appendChild(construyeCard(producto.nombre, producto.precio, producto.imagen)));
}


listaProductos();
