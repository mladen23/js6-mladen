let itemiListe = document.querySelectorAll ('.mojaLista li');
itemiListe.forEach ( item => {
    item.addEventListener ( 'click', ()=> {
        if ( item.style.textDecoration == 'line-through' ){
            item.style.textDecoration = 'none';
        }
        else {
        item.style.textDecoration = 'line-through';
        };
    });
});
// ovo moze preko toggle umesto if - else == dodamo klasu u css i ovde je toggle...