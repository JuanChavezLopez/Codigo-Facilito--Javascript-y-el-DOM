const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const descripcion = document.getElementById('descripcion');
title.innerHTML = 'Cursos';





// ------------------EVENTO SUBMIT---------------

const form = document.getElementById('course-form');
console.log(form);

form.addEventListener('submit',  function(e){

    e.preventDefault();/* previene el comportamiento por default */

    let title = document.getElementById('title-form').value;
    let descripcion = document.getElementById('descripcion-form').value;

    console.log(title);
    console.log(descripcion);
});