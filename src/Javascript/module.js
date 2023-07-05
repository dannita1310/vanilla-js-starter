import { add, cargarTareas } from "./index.js";

//Botón de agregar
let Agregar = window.document.querySelector("#Agregar");
Agregar.addEventListener("click", add);

document.addEventListener("DOMContentLoaded", cargarTareas);
