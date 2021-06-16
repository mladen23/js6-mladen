// Zadatak 1

let vreme = new Date();
let sat = vreme.getHours();
let minut = vreme.getMinutes();
let kraj = 1020;
let razlika = kraj - ( sat * 60 + minut );
if ( sat > 17 ) {
    console.log ( `Radno vreme je vec zavrseno.` );
}
else if ( sat < 9 ) {
    console.log ( `Radno vreme jos nije pocelo.` );
}
else {
    console.log ( `Do kraja radnog vremena je ostalo ${Math.floor(razlika / 60)} sati i ${razlika % 60} minuta. ` ); 
}

// Zadatak 2

let gramaza = 3000;
let cena = 5 * gramaza;
let popust5 = cena / 20;
let popust10 = cena / 10;
if ( gramaza < 1000 ){
    console.log ( `Nema popusta. Cena postarine je ${cena}.` );
}
else if ( gramaza >= 1000 && gramaza <= 2000 ){
    console.log ( `Cena bez popusta je ${cena}.` );
    console.log ( `Cena sa popustom je ${cena - popust5}.` );
}
else {
    console.log ( `Cena bez popusta je ${cena}.` );
    console.log ( `Cena sa popustom je ${cena - popust10}.` );
}

// Zadatak 3

let ruza = 101;
let brKupaca = 25;
let ostatak = ruza % brKupaca;
let dokupiti = 0;
if ( ostatak != 0 ){
    dokupiti = ( Math.ceil(ruza / brKupaca) * brKupaca ) - ruza;
    console.log ( `Broj ruza koje treba dokupiti je ${dokupiti}.` );
}
else {
    console.log ( `Nije potrebno dokupiti ruze.` );
}

// Zadatak 4

let i;
let n = 2;
let m = 35;
let suma = 0;
let broj = 0;
for ( i = n; i<= m; i ++ ){
    if ( i % 7 == 0 && i % 2 != 0 ){
        suma += i;
        broj ++;
    }
}
console.log ( `Suma iznosi ${suma}.` );
console.log ( `Broj neparnih brojeva koji su neparni je ${broj}.` );
console.log ( `Proizvod sume i broja brojeva je ${suma * broj}.` );

// Zadatak 5

n = 2;
m = 23;
let zbir = 0;
let brBrojeva = 0;
for ( i = n; i <= m; i++ ){
    if ( i % 2 == 0 && i % 3 == 0 ){
        zbir += i;
    }
    else if ( i % 10 == 3 ) {
        brBrojeva ++;
    }
}

console.log ( `Razlika iznosi ${zbir - brBrojeva}.` );