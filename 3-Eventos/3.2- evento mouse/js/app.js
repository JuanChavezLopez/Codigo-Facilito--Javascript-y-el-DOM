const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const descripcion = document.getElementById('descripcion');
title.innerHTML = 'Cursos';





// ------------------EVENTOS CON EL MOUSE----------------
const button = document.querySelector('.btn.btn-primary');
console.log(button);

button.addEventListener('mouseenter', function(e){
    this.className ='btn btn-danger';
})

button.addEventListener('mouseout', function(e){
    this.className ='btn btn-primary';
})