function ispisKonzola (poruka) {
    console.log (poruka);
}

function ispisStranica (poruka){
    let div = document.getElementById(`container`);
    div.innerHTML = poruka;
}

function ispisNiza (niz, cb){
    let poruka = "";
    for ( let i = 0; i < niz.length; i++ ){
        poruka += niz[i] + " ";
    }
    cb(poruka); // poziv callback funkcije
}

let a = [5, -9, 11, 9, 14];
let b = ["Vuk", "Marija", "Jelena", "Marko", "Jelena"];

ispisNiza (a, ispisKonzola); // poziv funkcije ispisNiza
ispisNiza (a, ispisStranica);
ispisNiza (b, ispisKonzola);
ispisNiza (b, ispisStranica);

// pozivi f-je preko anonimnih callback f-ja

ispisNiza ( a, par => {
    console.log (par);
} );

ispisNiza ( a, function (par) {
    let div = document.getElementById(`container`);
    div.innerHTML += par + `<br>`;
} );

// forEach petlja

a.forEach ( e => { // parametar je element niza a
    console.log (`Element niza je: ${e}`);
} );

// to je ovo
function ispis (poruka){
    console.log (`Element niza je: ${poruka}`);
}
a.forEach (ispis);
// forEach petlja poziva callback funkciju za svaki element niza, a prosledjuje taj element niza kao parametar callback funkciji
// Primer: a = [5, -9, 11, 9, 14];
// a.forEach poziva:
// ispis (5);
// ispis (-9);
// ispis (11);
// ispis (9);
// ispis (14);

b.forEach (( e, i ) => {
    console.log (`Element ${e} sa indexom ${i}.`)
});

// Ispis elemenata niza sa parnim indexom

b.forEach ((e, i) => {
    if ( i % 2 == 0 ){
        console.log (`Element ${e} ima paran index.`);
    }
});

////////////////////////

// Zadatak 2

// Odrediti zbir elemenata celobrojnog niza.

let r = [3, 5, 12, 17, 4];

let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach ( elem => {
        zbir += elem;
    });
    return zbir;

}

console.log (zbirNiza(r));

// Zadatak 3

// Odrediti proizvod elemenata celobrojnog niza.
/*
let proizvod = 1;

nizBrojeva.forEach ( e => {
    proizvod *= e;
} );
console.log (`Proizvod je: ${proizvod}.`);
*/
// Zadatak 4

// Odrediti srednju vrednost elemenata celobrojnog niza.

let srVrNiza = niz => {
    let srVr = 0;
    niz.forEach ( elem => {
        srVr += elem;
    });
    srVr /= niz.length;
    return srVr;
}
console.log (srVrNiza(r));

// Zadatak 5

// Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxNiz = niz => {
    let max = niz[0];
    niz.forEach ( elem => {
        if ( elem > max ){
            max = elem;
        }
    });
    return max;
}
console.log (maxNiz(r));

let c = [3, 14, 6, 14, 8, 0, 2, 14, 0];

// Zadatak - Napisati f-ju toja vraca broj elemenata sa:
//              -maximalnom vrednoscu
//              -minimalnom vrednoscu

let brojMaxNiz = niz => {
    let max = maxNiz(niz); // prethodni zadatak
    let broj = 0;
    niz.forEach ( elem => {
        if ( elem == max ){
            broj ++;
        }
    } );
    return broj;
}

let brojMinNiz = niz => {
    let min = minNiz(niz); // nemamo uradjen "minNiz" ali je ista logika kao "maxNiz"
    let broj = 0;
    niz.forEach ( elem => {
        if ( elem == min ){
            broj++;
        }
    } );
    return broj;
}

////////// Ovo moze ovako:

let brojSvojstvoNiz = ( niz, svojstvo ) => {
    let s = svojstvo(niz);
    let broj = 0;
    niz.forEach ( elem => {
        if ( elem == s ) {
            broj ++;
        }
    } );
    return broj;
}
console.log ( `Broj elemenata sa max vrednoscu je ` + brojSvojstvoNiz (c, maxNiz) );


// Zadatak 6

// Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrednost = r[0];

r.forEach ( e => {
    if ( e < minVrednost ) {
        minVrednost = e;
    }
} );
console.log ( `Minimalna vrednost elementa u nizu je: ${minVrednost}.` );

// Zadatak 7

// Odrediti indeks maksimalnog elementa celobrojnog niza.

maxVrednost = r[0];
let index = 0;
r.forEach ((e, i) => {
    if ( e > maxVrednost ){
        maxVrednost = e;
        index = i;
    }
} );
console.log ( `Element ${maxVrednost} ima index ${index}.` );

// Zadatak 8

// Odrediti indeks minimalnog elementa celobrojnog niza.

minVrednost = r[0];
index = 0;

r.forEach ( e => {
    if ( e < minVrednost ) {
        minVrednost = e;
        index = i;
    }
} );
console.log ( `Element ${minVrednost} ima index ${index}.` );

// Zadatak 9

// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

///////////////////

// 16. Zadataka

// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let x = [ "hleb", "voce", "brasno", "ulje", "cokolada" ];

let spisak = niz => {
    let lista = 
    `
    <ul>
    `;
    niz.forEach ( elem => {
        lista += 
        `
        <li>${elem}</li>
        `;
    } );
    lista += `</ul>`;
    return lista;
}

document.body.innerHTML += spisak(x);

// Zadatak 17

// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let y = [ "Djordjevic", "Obradovic", "Tomasevic", "Drobnjak", "Rebraca" ];

let tim = niz => {
    let tabela =
    `
    <table>
    `;
    niz.forEach ( elem => {
        tabela +=
        `
        <tr><td>${elem}</td></tr>
        `;
    } );
    tabela += `</table>`;
    return tabela;
}

document.body.innerHTML += tim (y);

// Zadatak 18

// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let z = [ "img/theBad.jpg", "img/theGood.jpg", "img/theUgly.jpg" ];

let slike = niz => {
    niz.forEach ( elem => {
        document.body.innerHTML += `<img src="${elem}" >`;
    } );
}

slike (z);

// Zadatak 20  - CALLBACK

// U nizu stringova ispisati sve elemente koji imaju: 
// -maximalnu duzinu
// -minimalnu duzinu

let imena = [ "Stefan", "Nikola", "Djordje", "Milijana", "Ana", "Vuk", "Vladimir" ];

let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if ( elem.length > maxDuzina ) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}

console.log (maxDuzinaNiza (imena));

let ispisStringSvojstvo = ( niz, svojstvo ) => {
    let md = svojstvo (niz); // <<< ovde je pozvana CALLBACK f-ja
    niz.forEach (elem => {
        if ( elem.length == md ) {
            console.log (elem);
        }
    });
}


let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach (elem => {
        if ( elem.length < minDuzina ){
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringSvojstvo (imena, maxDuzinaNiza); // maxDuzinaNiza je CALLBACK f-ja
ispisStringSvojstvo (imena, minDuzinaNiza); // minDuzinaNiza je CALLBACK f-ja

/* minDuzina je ista kao maxDuzina.... nema razloga da se ponavlja
Umesto toga, modifikujemo ispisStringSvojstvo, da prima CALLBACK f-ju

let ispisStringMinDuzina = niz => {
    let md = minDuzinaNiza(niz);
    niz.forEach (elem => {
        if ( elem.length == md ){
            console.log (elem);
        }
    });
}
*/

// Zadatak 24

let zad24a = (a, b) => {
    let n = a.length; // let n = b.length ... svejedno je, jer su a i b iste duzine
    let ww = [];
    for ( let i = 0; i < n; i++ ){
        ww.push (a[i]); // push dodaje na kraj niza
        ww.push (b[i]);
    }
    return ww;
}


// nacin 2

let zad24b = (a,b) => {
    let n = a.length;
    let ww2 = [];
    for ( let i = 0; i < n; i++ ){
        ww2[2 * i] = a[i];
        ww2[2 * i + 1] = b[i];
    }
    return ww2;
}


let w1 = [4, -9, 4, 1];
let w2 = [8, 8, 1, 0];

let ww = zad24a (w1,w2);
console.log (ww);

let ww2 = zad24b (w1, w2);
console.log (ww2);

// Zadatak 25

let zad25 = (a,b) => {
    let n = a.length;
    for ( let i = 0; i < n; i++ ) {
        c[i] = a[i] * b[i];
    }
    return c;
}

// Zadatak 26

let zad26 = a => {
    let n = a.length; // n je paran broj
    let b = [];
    for ( let i = 0; i < n / 2; i++ ){
        b[i] = (a[i] + a[n - 1 - i]) / 2; // -i da bi se smanjivao index
    }
    return b;
}

let f = zad26(w1);
console.log (f);