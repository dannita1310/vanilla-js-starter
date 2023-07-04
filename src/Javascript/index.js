//Variables.

let InformacionTarea = window.document.querySelector("#InformacionTarea");
let ul = window.document.querySelector("ul");
let empty = window.document.querySelector(".empty");
let contador = window.document.querySelector("#contador");

//Evento del botón agregar
import { post } from "./api.js";
async function add(e) {
  e.preventDefault();

  let tarea = InformacionTarea.value;

  if (tarea !== "") {
    let li = document.createElement("li");
    let p = document.createElement("p");

    p.textContent = tarea;
    let posted = await post({ task: tarea });
    console.log("posted :", posted);

    li.appendChild(p);
    li.id = posted.id;
    li.appendChild(btnCheck());
    li.appendChild(AddDeleteBoton());
    ul.appendChild(li);

    InformacionTarea.value = "";
    empty.style.display = "none";
  } else {
    alert("Ingresar texto");
  }
}

function btnCheck() {
  let Checkbox = document.createElement("input");
  Checkbox.setAttribute("type", "checkbox");

  Checkbox.addEventListener("click", function () {
    if (Checkbox.checked) {
      aumentarContador();
    } else {
      disminuirContador();
    }
  });

  return Checkbox;
}

//Botón de eliminar.

function AddDeleteBoton() {
  let DeleteBtn = document.createElement("button");

  DeleteBtn.textContent = "🦄";
  DeleteBtn.className = "del";

  DeleteBtn.addEventListener("click", (e) => {
    let item = e.target.parentElement;
    console.log(item.id);

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
  return DeleteBtn;
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

export { add };
