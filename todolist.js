// variables html
container = document.querySelector('.container');
input_principal = document.querySelector('.input');

//creating elements   <=======================>
let input_agrega = document.createElement('input');
let padlock_btn = document.createElement('button');
let trash_btn = document.createElement('button');

//input
input_agrega.type = 'text';
input_agrega.classList.add('item-input');
input_agrega.disabled = true;
container.parentNode.appendChild(input_agrega);
input_agrega.value = 'Regar las plantas'

//buttons
padlock_btn.classList.add('boton-editar');
padlock_btn.innerHTML = '<i class="fa-solid fa-lock">';
input_agrega.parentNode.appendChild(padlock_btn);
trash_btn.classList.add('boton-remover');
trash_btn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
input_agrega.parentNode.appendChild(trash_btn);
// <===============================>

//valor de input principal
const nueva_tarea = input_principal.value.trim();

// crear classItem
class Item {
  constructor(nueva_tarea) {
    this.crearDiv(nueva_tarea)
  }
  crearDiv() {
    const inputItem = document.createElement('input')
    inputItem.setAttribute('type', 'text')
    inputItem.disabled = true
    inputItem.classList.add('item-input')
    inputItem.value = nueva_tarea

    console.log('creando ...', inputItem);

    //div
    const div_item = document.createElement('div')
    div_item.classList.add('Item')

    // btn editar
    let botonEditar = document.createElement('button');
    botonEditar.classList.add('boton-editar');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock">';

    //btn removeeer
    let botonRemover = document.createElement('button');
    botonRemover.classList.add('boton-remover');
    botonRemover.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    //agregar elementos a la lista
    inputItem.parentNode.appendChild(botonEditar)
    inputItem.parentNode.appendChild(botonRemover)
    div_item.parentNode.appendChild(inputItem)
    container.parentNode.appendChild(div_item)
    

  }
}
  
// const stein = new Item();