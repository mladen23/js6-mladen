// Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
// Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
// Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.

import {Radnik} from "./radnik.js";

let radnik1 = new Radnik ('Marko Ivanovic', 44200);
let radnik2 = new Radnik ('Milan Jovic', 34800);
let radnik3 = new Radnik ('Marina Ivic', 44200);
let radnik4 = new Radnik ('Ana Pavic', 41100);

let arrRadnici = [radnik1, radnik2, radnik3, radnik4];

let maxPlata = niz => {
    let max = niz[0].plata;
    niz.forEach ( radnik =>{
        if ( radnik.plata > max ){
            max = radnik.plata;
        }
    })
    return max;
}

console.log(maxPlata(arrRadnici));

let maxPlataOsoba = niz => {
    niz.forEach ( radnik =>{
        if ( radnik.plata == maxPlata(niz) ){
            console.log(radnik);
        }
    })
}

maxPlataOsoba(arrRadnici);