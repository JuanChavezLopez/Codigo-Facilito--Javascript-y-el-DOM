const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const descripcion = document.getElementById('descripcion');
title.innerHTML = 'Cursos';





// ------------------EVENTOS TIME---------------
// setTimeout(function (){
//     console.log('Hola Mundo');
// }, 3000)


setTimeout(function (p1, p2,p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}, 3000, 'argumento 1', 'argumento 2', 'argumento 3');