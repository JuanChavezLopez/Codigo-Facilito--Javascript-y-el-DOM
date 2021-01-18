
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
const div_row = document.querySelector('.row');
const div_container = document.querySelector('.container');
const body = document.querySelector('body');

// element.addEventListener('click', show_messages);
// list.addEventListener('click', show_messages);
// div_row.addEventListener('click', show_messages);
// div_container.addEventListener('click', show_messages);
// body.addEventListener('click', show_messages);


// element.addEventListener('click', function(){
    //     console.log('Elemento!');
    // })
    
    // list.addEventListener('click', function(){
        //     console.log('Lista!');
// })

// div_row.addEventListener('click', function(){
    //     console.log('div_row!');
// })

// div_container.addEventListener('click', function(){
    //     console.log('container!');
    // })
    
    // body.addEventListener('click', function(){
        //     console.log('body!');
        // })
        
        
for ( let element of  document.querySelectorAll('*')){
    element.addEventListener('click', show_messages)
}

function show_messages(e){
    // console.log(this.tagName);
    console.log("Elemento actual:" +this.tagName);
    console.log("Elemento que disparo elevento:" +e.target.tagName);
    console.log("\n");
}