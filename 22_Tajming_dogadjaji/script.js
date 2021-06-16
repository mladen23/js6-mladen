/*
function test(){
    console.log ('Pozvana je f-ja test');
}

console.log ('Prva linija koda');
console.log('Druga linija koda');
// window.setTimeout (........);
setTimeout( test , 1000); // 'test' je callback f-ja - ide bez zagrada, bez parametara... ovo je poziv setTimeout f-je
console.log('Cetvrta linija koda');
console.log('Peta linija koda');
*/

////////////////////

let btn1 = document.getElementById ('btn1');
let btn2 = document.getElementById ('btn2');
let btn3 = document.getElementById ('btn3');

// DIGRESIJA - razlika izmedju anonimne i arrow f-je... THIS je jedina razlika

btn1.addEventListener ('click', function () { // anonimna callback f-ja
    console.log(this); // btn1 == this == dugme
});

btn2.addEventListener ('click', () => { // arrow callback f-ja
    console.log(this); // btn2 == this == window objekat
});

btn3.addEventListener ('click', klik );

function klik () { // imenovana callback f-ja
    console.log(this); // btn3 == this == dugme
}

// Pritiskom na dugme ispisati text u konzoli nakon 2 secunde

let b1 = document.getElementById ('b1');
let divIspis = document.getElementById('ispis');
let clock = null;

b1.addEventListener ('click', () =>{
    if (clock === null){ // u slucaju da neko klikne vise puta - pokrene vise satova, ova linija proverava da li clock vec ima vrednost = sprecava kreiranje vise satova
        clock = setTimeout( function () {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekundi = datum.getSeconds();
            divIspis.innerHTML += `${sati}:${minuti}:${sekundi}`;
            clock = null;
        }, 1000);
}
});

let b2 = document.getElementById ('b2');

b2.addEventListener ('click', () =>{
    clearTimeout (clock);
    clock = null;
});

//////////////////////////////////
// Interval, prekid intervala
/*
let clockInterval = null;

console.log ('Prva linija koda');
console.log('Druga linija koda');

clockInterval = setInterval( () => {
    console.log ('Poziv callback f-je.');
} , 1000);
console.log('Cetvrta linija koda');
console.log('Peta linija koda');

setTimeout(()=>{
    clearInterval (clockInterval)
}, 1000 * 5);
*/

let b3 = document.getElementById ('b3');
let b4 = document.getElementById ('b4');
let ispis2 = document.getElementById ('ispis2');
let clockPeriod = null;

b3.addEventListener ('click', ()=> {
    if (clockPeriod === null) { // ovim sprecavamo uvodjenje novih satova
        clockPeriod = setInterval ( () => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds ();
            ispis2.innerHTML += `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

b4.addEventListener ('click', ()=> {
    clearInterval (clockPeriod);
    clockPeriod = null;
});


// Zadatak

let btnStart = document.getElementById ('start');
let btnStop = document.getElementById ('stop');
let inpIspis = document.getElementById ('inpIspis');
let vrednost = null;

btnStart.addEventListener ('click', ()=> {
    if ( vrednost == null){
            vrednost1 = setInterval ( ()=> {
            inpIspis.value = vrednost;
            vrednost++;
        }, 1000);
    }
});

btnStop.addEventListener ('click', ()=> {
    clearInterval (vrednost1);
    // vrednost = null;
});