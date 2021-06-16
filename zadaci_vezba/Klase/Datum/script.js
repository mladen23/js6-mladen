// Kreirati klasu Datum koja sadrži tri atributa - dan, mesec i godinu.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju ranijiDatum koja za dva prosleđena datuma ispisuje raniji od ta dva datuma. Ukoliko su datumi jednaki onda na ekranu ispisati “Datumi su jednaki”.

import {Datum} from "./datum.js";

let datum1 = new Datum ( 31, 12, 1904 );
let datum2 = new Datum ( 31, 12, 1904 );

let ranijiDatum = ( x, y ) => {
    let d1 = x.godina*365 + x.mesec*30 + x.dan;
    let d2 = y.godina*365 + y.mesec*30 + y.dan;
    if ( d1 < d2 ){
        document.body.innerHTML = `Raniji datum je: ${x.dan}.${x.mesec}.${x.godina}`;
    }
    else if ( d2 < d1 ){
        document.body.innerHTML = `Raniji datum je: ${y.dan}.${y.mesec}.${y.godina}`;
    }
    else {
        document.body.innerHTML = `Datumi su jednaki.`
    }
}

ranijiDatum(datum1, datum2);