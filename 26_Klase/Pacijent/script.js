import {Pacijent} from "./pacijent.js";

let pacijent1 = new Pacijent ('Charles', 202, 128);
let pacijent2 = new Pacijent ('Jason', 172, 95);
let pacijent3 = new Pacijent ('Marc', 180, 115);

let arrPacijent = [pacijent1, pacijent2, pacijent3];
// ispisati podatke o pacijentu sa najmanjom tezinom
let najmanjaTezina = niz => {
    let minTezina = niz[0].tezina;
    for ( let i = 0; i < niz.length; i++ ){
        if ( niz[i].tezina < minTezina ){
            minTezina = niz[i].tezina;
        }
    }
    for ( let i = 0; i < niz.length; i++ ){
        if ( minTezina == niz[i].tezina ){
            console.log(niz[i]);
        }
    }
}
najmanjaTezina(arrPacijent);

// ispisati podatke o pacijentu sa najvecim bmi vrednoscu

let minBmi = arrPacijent[0].bmi();
for ( let i = 0; i < arrPacijent.length; i++ ){
    if ( arrPacijent[i].bmi() < minBmi ){
        minBmi = arrPacijent[i].bmi();
    }
}
for ( let i = 0; i < arrPacijent.length; i++ ){
    if ( minBmi == arrPacijent[i].bmi() ){
        console.log(arrPacijent[i]);
    }
}