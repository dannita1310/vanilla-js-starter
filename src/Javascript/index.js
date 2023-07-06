import { post, deleteData, getData, updateData } from "./api.js";
//Variables.

let InformacionTarea = window.document.querySelector("#InformacionTarea");
let ul = window.document.querySelector("ul");
let empty = window.document.querySelector(".empty");
let contador = window.document.querySelector("#contador");
//Evento del botón agregar
async function add(e) {
  e.preventDefault();

  let tarea = InformacionTarea.value;

  if (tarea !== "" && tarea.trim()) {
    let posted = await post({ task: tarea, checked: false });

    crearElemento(tarea, posted.id);

    InformacionTarea.value = "";
    empty.style.display = "none";
  } else {
    alert("Ingresar texto");
  }
}

async function cargarTareas() {
  let tareas = await getData();
  let contadorLista = 0;
  tareas.forEach((tarea) => {
    crearElemento(tarea.task, tarea.id, tarea.checked);
  });
  for (let index = 0; index < tareas.length; index++) {
    if (tareas[index].checked == true) {
      contadorLista++;
    }
  }
  contador.textContent = contadorLista;
}

function crearElemento(texto, id, check) {
  let li = document.createElement("li");
  let p = document.createElement("p");

  p.textContent = texto;
  li.appendChild(p);
  li.id = id;
  li.appendChild(btnCheck(check));
  li.appendChild(AddDeleteBoton());
  ul.appendChild(li);

  empty.style.display = "none";
}

function btnCheck(check) {
  let Checkbox = document.createElement("input");
  Checkbox.setAttribute("type", "checkbox");
  Checkbox.checked = check;
  // let check = check;

  Checkbox.addEventListener("change", async (e) => {
    let item = e.target.parentElement;

    if (Checkbox.checked) {
      aumentarContador();
      //updateData(id, { checked: true });
    } else {
      disminuirContador();
      //updateData(id, { checked: false });
    }
    updateData(item.id, { checked: Checkbox.checked });
  });

  return Checkbox;
}

//Botón de eliminar.

function AddDeleteBoton() {
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "🦄";
  deleteBtn.className = "del";

  deleteBtn.addEventListener("click", async (e) => {
    let item = e.target.parentElement;
    await deleteData(item.id);

    let checkbox = item.querySelector("input");

    if (checkbox.checked) {
      disminuirContador();
    }
    ul.removeChild(item);

    let items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}

function disminuirContador() {
  let cuenta = Number(contador.textContent);
  cuenta = cuenta - 1;
  contador.textContent = cuenta;
}
function aumentarContador() {
  let cuenta = Number(contador.textContent);
  cuenta = cuenta + 1;
  contador.textContent = cuenta;
}

export { add, cargarTareas };
