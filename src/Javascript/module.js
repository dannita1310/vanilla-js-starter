import { getData } from "./api.js";
import { add } from "./index.js";

//Botón de agregar
let Agregar = window.document.querySelector("#Agregar");
Agregar.addEventListener("click", add);

getData();
