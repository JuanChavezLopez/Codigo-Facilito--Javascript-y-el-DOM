const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const descripcion = document.getElementById('descripcion');
title.innerHTML = 'Cursos';


const button = document.querySelector('.btn.btn-primary');
console.log(button);

button.addEventListener('click',function(e){
    console.log(e);

    if(title.style.display !='none'){
        title.style.display ='none';
        descripcion.style.display ='none';
        // button.textContent ='Mostrar';
        // e.target.textContent ='Mostrar';
        this.textContent = 'Mostrar';
    }else{
        title.style.display ='block';
        descripcion.style.display ='block';
        // button.textContent ='Ocultar';/* Modificamos el texto del boton */
        this.textContent ='Ocultar';
    }
})


// ------------------EVENTOS CON EL MOUSE----------------

