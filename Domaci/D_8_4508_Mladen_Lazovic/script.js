/*
Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
*/
let vreme = new Date();
let sat = vreme.getHours();
let dan = vreme.getDay();
if ( dan == 6 ){
    if ( sat >= 10 ){
        if ( sat < 18 ){
            console.log("Otvoreno.");
        }
        else {
            console.log("Zatvoreno.");
        }
    }
    else {
        console.log("Zatvoreno.");
    }
}
else if ( dan == 0 ){
    if ( sat >= 10 ){
        if ( sat < 18 ){
            console.log("Otvoreno.");
        }
        else {
            console.log("Zatvoreno.");
        }
    }
    else {
        console.log("Zatvoreno.");
    }
}
else if ( sat >=9 ) {
    if ( sat <20 ) {
        console.log("Otvoreno.");
    }
    else {
        console.log("Zatvoreno.");
    }
}
else {
    console.log("Zatvoreno.");
}

/* Ministarstvo zdravlja jedne zemlje je povodom pandemije virusa donelo sledeću odredbu:
"Ukoliko je procenat pozitivno testiranih stanovnika u odnosu na ukupno testirane stanovnike u jednom danu veći od 30%, i ako je pored toga i procenat pozitivno testiranih stanovnika veći od 10% ukupnog broja stanovnika te zemlje, automatski se uvodi vanredno stanje."
Za proizvoljno unete vrednosti: ukupan broj stanovnika zemlje, ukupan broj testiranih u jednom danu i ukupan broj pozitivno testiranih u tom danu, na ekranu crvenom bojom ispisati VANREDNO STANJE, ukoliko treba automatski uvesti vanredno stanje prema odredbi koju je ministarstvo donelo (u suprotnom ne ispisivati ništa).
*/

let ukupanBr = 100;
let testBr = 38;
let pozBr = 15;

let procDan = pozBr / testBr * 100;
let procUkupno = pozBr / ukupanBr * 100;
if ( procDan > 30 ){
    if ( procUkupno > 10 ){
        document.body.innerHTML += `<h1 style="color:red;">VANREDNO STANJE</h1>`;
    }
}