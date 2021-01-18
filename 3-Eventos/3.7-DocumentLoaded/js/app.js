
// ------------------DOCUMENT LOADED---------------

document.addEventListener('DOMContentLoaded', function(){


    console.log('EL DOM YA SE CONSTRUYO');

    const checkbox = document.getElementById('checkbox');
    
    checkbox.addEventListener('change', function(){
        console.log('Cambio de valor');
    })
    
    let title_form = document.getElementById('title-form');
    title_form.addEventListener('change', function(){
        console.log('se cambio el valor del input title')
    });
    
    let descripcion_form = document.getElementById('descripcion-form');
    descripcion_form.addEventListener('change', function(){
        console.log('se cambio el valor del input descripcion')
    });


});



// -----propagacion de eventos : Event Bubling----------------

const element = document.querySelector('li');
const list = document.querySelector('ul');

element.addEventListener('click', function(e){
    console.log('click sobre el elemento!');
    e.stopPropagation();
});

list.addEventListener('click', function(){
    console.log('click sobre la lista!');
});

