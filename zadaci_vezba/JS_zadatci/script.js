console.log("Zadatci - dodela vrednosti");

/* 1. Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
*/

let s = 12;
let m = 15;
let odPonoci = s*60 + m;
console.log( "Od ponoci je proslo: ", odPonoci);

/* 2. Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
*/
// Prvi nacin:
let minOdPonoci = 123;
let h = Math.floor(minOdPonoci/60); // Math.round zaokruzuje na najpriblizniji, Math.floor na donji, Math.ceil zaokruzuje na gornji ceo br.
let min = minOdPonoci%60
console.log(h + ":" + min);
// Drugi nacin:
min = minOdPonoci % 60
h = (minOdPonoci - min)/60
console.log(h + ":" + min);


/* 3. Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
*/
let cena = 550;
let novac = 1000;
let kusur = novac - cena;
console.log("Vas kusur je: "+ kusur);

/* 4. Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
*/
let datum = new Date();
console.log(datum);
let danUNedelji = datum.getDay(); // Vraca dan u nedelji (od 0 do 6, 0 je nedelja)
console.log(danUNedelji);
let danUMesecu = datum.getDate(); // Vraca dan u mesecu
console.log(danUMesecu);

let trenutnoSati = datum.getHours();
let trenutnoMinuta = datum.getMinutes();
let trenutnoOdPonoci = trenutnoSati*60 + trenutnoMinuta
console.log(trenutnoOdPonoci);
/* 5. Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.
*/
/* 6. Konverzija valute iz evra u dinare (i obrnuto).
*/
let evro = 50;
let kursEvra = 117.2;
let evroUDinar = evro * kursEvra;
console.log(evroUDinar);

let novacDinari = 2000;
let dinarUEvro = novacDinari / kursEvra;
console.log(dinarUEvro);
