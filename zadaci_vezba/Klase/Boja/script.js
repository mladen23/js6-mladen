/* Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
Napraviti odgovarajuće getere i setere.
Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine.
*/

import {Boja} from "./boja.js";

let boja1 = new Boja (23, 46, 82);
let boja2 = new Boja (46, 18, 91);
let boja3 = new Boja (23, 46, 82);

let arrBoja = [boja1,boja2,boja3];

function ispitajSlicnost (x, y) {
    if ( x.nm == y.nm && x.zasicenje == y.zasicenje && x.intenzitet == y.intenzitet ){
        return true;
    }
    else {
        return false;
    }
}

console.log(ispitajSlicnost(boja1, boja3));

let srednjaTalasnaDuzina = niz => {
    let srednjaNm = 0;
    niz.forEach ( boja =>{
        srednjaNm += boja.nm;
    })
    return srednjaNm / niz.length;
}

console.log(srednjaTalasnaDuzina(arrBoja));