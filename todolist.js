// variables html
container = document.querySelector('.container');
input_principal = document.querySelector('.input');
boton_agregar = document.querySelector('.boton-agregar')

// crear classItem
class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }
  crearDiv(nuevaTarea) {

    //creating ... -input
    const inputItem = document.createElement('input')
    inputItem.setAttribute('type', 'text')
    inputItem.disabled = true
    inputItem.classList.add('item-input')
    inputItem.value = nuevaTarea

    //div
    const divs_item = document.createElement('div')
    divs_item.classList.add('Item')

    // btn editar
    let botonEditar = document.createElement('button');
    botonEditar.innerHTML = '<i class="fa-solid fa-lock">';
    botonEditar.classList.add('boton-editar');

    //btn removeeer
    let botonRemover = document.createElement('button');
    botonRemover.classList.add('boton-remover');
    botonRemover.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    //agregar elementos a la lista
    divs_item.appendChild(inputItem)
    divs_item.appendChild(botonEditar)
    divs_item.appendChild(botonRemover)
    container.appendChild(divs_item);

    //eventos botones edit
    botonEditar.addEventListener('click', function () {
      if (inputItem.disabled == true) {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
        inputItem.disabled = !true
      } else {
        inputItem.disabled = !false
        botonEditar.innerHTML = '<i class="fa-solid fa-lock">'
      }
    })

    //remove
    botonRemover.addEventListener('click', function () {
      container.removeChild(divs_item)

    })

  }
};

//check input
function chequearInput() {
  if (input_principal.value == '') {
    return
  } else {
    const res = new Item(input_principal.value.trim());
    input_principal.value = '';
    // return res
  }
};

boton_agregar.addEventListener('click', function () {
  chequearInput()
});


// debugger
// console.log('creando ...');
const stein2 = new Item()
const stein3 = new Item()