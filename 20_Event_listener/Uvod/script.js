// Postupak dodavanja click event-a

// 1. Dohvatiti dugme
let btn = document.querySelector ('button');

// 2. Dodati event listener na zeljeni element ( on aktivno slusa sve sto se dogadja nad tim elementom )
// btn.addEventListener ( 'naziv eventa' , 'f-ja koja se realizuje kada se aktivira' );
btn.addEventListener ( 'click' , () => {
    console.log ('Jednostruki klik');
});

////////////////////////

let dupliKlik = document.querySelector ('#dupli_klik');
dupliKlik.addEventListener ( 'dblclick' , () => { // moze i anonimna f-ja function () {...}
    console.log ('Double click.');
});

////////////////////////
// Moze i ovako da se definise... u HTML onclick="funkcija()"
function klikni() {
    console.log("Kliknuto");
};