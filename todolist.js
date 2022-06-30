// variables html
div_inputs = document.querySelector('.container');

//creating elements
let input_agrega = document.createElement('input');
let padlock_btn = document.createElement('button');
let trash_btn = document.createElement('button');

//input
input_agrega.type = 'text';
input_agrega.classList.add('item-input');
input_agrega.disabled = true;
div_inputs.parentNode.appendChild(input_agrega);
input_agrega.value = 'Regar las plantas'

//buttons
padlock_btn.classList.add('boton-editar');
padlock_btn.innerHTML = '<i class="fa-solid fa-lock">';
input_agrega.parentNode.appendChild(padlock_btn);
trash_btn.classList.add('boton-remover');
trash_btn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
input_agrega.parentNode.appendChild(trash_btn);


console.log(trash_btn)
