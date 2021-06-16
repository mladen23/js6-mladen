import {Pacijent} from "./pacijent.js";

// Kreirati niz od barem tri pacijenta.

let pacijent1 = new Pacijent ('Charles', 202, 128);
let pacijent2 = new Pacijent ('Jason', 172, 95);
let pacijent3 = new Pacijent ('Marc', 180, 115);
let pacijent4 = new Pacijent ('Tom', 165, 68 );

let arrPacijent = [pacijent1, pacijent2, pacijent3, pacijent4];

// Ispisati podatke o pacijentu sa najmanjom težinom.

let minTezina = arrPacijent[0];

arrPacijent.forEach ( pacijent =>{
    if ( pacijent.tezina < minTezina.tezina ){
        minTezina = pacijent;
    }
});
minTezina.stampaj();

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let maxBmi = arrPacijent[0];

for ( let i = 0; i < arrPacijent.length; i++){
    if ( arrPacijent[i].bmi() > maxBmi.bmi() ){
        maxBmi = arrPacijent[i];
    }
}
maxBmi.stampaj();

// Ispisati sve pacijente čije ime sadrži slovo A.

arrPacijent.forEach ( pacijent => {
    if ( pacijent.ime.includes ('a') || pacijent.ime.includes ('A') ){
        pacijent.stampaj();
    }
})

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz => {
    let sumVisina = 0;
    niz.forEach ( pacijent =>{
        sumVisina += pacijent.visina;
        });
    return sumVisina / niz.length;
}
console.log(srednjaVisina(arrPacijent));