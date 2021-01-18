
// ------------------EVENTO CHANGE---------------

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function(){
    console.log('Cambio de valor');
})

let title_form = document.getElementById('title-form');
title_form.addEventListener('change', function(){
    console.log('se cambio el valor del inputntitle')
});

let descripcion_form = document.getElementById('descripcion-form');
descripcion_form.addEventListener('change', function(){
    console.log('se cambio el valor del input descripcion')
});