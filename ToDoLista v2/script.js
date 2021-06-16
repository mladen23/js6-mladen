let stavka = document.getElementById ('novaStavka');
let divEnter = document.getElementById('divEnter');
// let dodaj = document.getElementById ('dodaj');
let lista = document.querySelector ('.mojaLista');
let radioDugme = document.querySelectorAll ('input[name="add"]');
let vrednost = 2;

radioDugme.forEach (radio =>{
    radio.addEventListener ( 'click', ()=> {
        vrednost = radio.value;
    });
    
});

divEnter.addEventListener ( 'keyup' , e=>{
    if ( e.keyCode === 13 ) {
        
    if (stavka.value == ""){
        alert('Unesite obavezu');
    }

    else {
        let noviLi = document.createElement ('li');
        noviLi.textContent =`${stavka.value}`;
        noviLi.addEventListener ( 'click', ()=> {
            lista.removeChild (noviLi);
        });
    if ( vrednost == "1"){
        lista.prepend(noviLi);
    }
    else {
        lista.appendChild(noviLi);
    };

    stavka.value = "";
    };
};
});

lista.childNodes.forEach ( li =>{
    li.addEventListener ('click', ()=>{
        lista.removeChild(li);
    });
});