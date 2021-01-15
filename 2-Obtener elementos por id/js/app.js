

// ------- OBTENER UN ELEMENTO POR SU ID --------------------
const title =document.getElementById('title');
title.innerHTML = 'Cursos';
// console.log(title);


const description = document.getElementById('descripcion');
description.innerHTML ='Listado de cursos';


// -------- OBTENER UN ELEMENTO POR SU CLASE -------------------
const display = document.getElementsByClassName('list-group-item');

for (var i = 0; i < display.length; i++){
    let element = display[i];
    console.log(element);
}

