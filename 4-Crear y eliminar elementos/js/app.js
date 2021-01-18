
// -----------------AGREGAR Y ELIMINAR----------------

const row = document.querySelector('.row');

const form = document.getElementById('course-form');


// escuchamos el evento submbit, y almacenamos los valores
// luego llamamos a la funcion---> create_card(title, description;

form.addEventListener('submit', function(e){
    e.preventDefault(); /* IMPORTANTE PARA QUE NO SE RECARGE LA PAGINA */

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('descripcion-form').value;

    create_card(title, description);

});

// ! --------poner como variable global----
let div = null;

// ------- 1RA FORMA DE AGREGAR ELEMENTOS-------------
function create_card(title, description){
    let div = document.createElement('div');
    div.className ='col-sm-6 col-md-4';

    let thumbnail = document.createElement('div');
    thumbnail.className ='thumbnail';
    
    let caption = document.createElement('div');
    caption.className ='caption';
    
    let h3 = document.createElement('h3');
    h3.textContent =title;
    
    let p1 = document.createElement('p');
    p1.textContent = description;
    
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    a.className='btn btn-danger';
    a.textContent= 'Eliminar'; /* DELETE CARD */

    p2.addEventListener('click', delete_card);

    p2.appendChild(a);
    caption.appendChild(h3);
    caption.appendChild(p1);
    caption.appendChild(p2);
    thumbnail.appendChild(caption);
    div.appendChild(thumbnail);
    row.appendChild(div);
}

// !----------------DELETE CARD-----------------

function delete_card(e){
    // necesitamos el padre y el elemento  a elimnar (hijo)

    let ancestro = get_ancestro(e.target, 4);
    row.removeChild(ancestro);

    // console.log('Carta a eliminar.!!')
}

function get_ancestro( ancestro, level){
    if(level == 0){
        return ancestro;
    }
    level--;
    return get_ancestro(ancestro.parentElement, level);

}
// !----------------  END DELETE CARD-----------------

// -----------------------------------------------------------------------------
// -------2DA FORMA DE AGREGAR ELEMENTOS-------------
// function create_card_by_innerHTML(title, description){
//     let html = `<div class="col-sm-6 col-md-4">\
//                     <div class="thumbnail">\
//                         <div class="caption">\
//                             <h3 id="title_card"> ${title}</h3>\
//                             <p id="description_card"> ${description}</p>\
//                             <p><a href="#" class="btn btn-danger">Accion</a></p>\
//                         </div>\
//                     </div>\
//                 </div>`;
//     row.innerHTML += html;
// }