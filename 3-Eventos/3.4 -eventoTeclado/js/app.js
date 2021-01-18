const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const descripcion = document.getElementById('descripcion');
title.innerHTML = 'Cursos';





// ------------------EVENTO TECLADO---------------

const input = document.getElementById('input');
console.log(input);

input.addEventListener('keydown', function(e){
    console.log(e);
    console.log('tecla presionada:' +e.key + ' con un codigo:' +e.keyCode);
})
