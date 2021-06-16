// Zadatak 1

// Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća indeks minimalnog elementa ovog niza. Ukoliko ima više jednakih minimalnih elemenata, vratiti indeks bilo kog od minimalnih elemenata.

function indexMinElem ( niz ) {
    let min = niz[0];
    let index = 0;
    for ( let i = 0; i < niz.length; i++ ){
        if ( niz[i] < min ){
            min = niz[i];
            index = i;
        }
    }
    return index;
}


// Zadatak 2

// Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.


function sumaParniIndex ( niz ) {
    let suma = 0;
    for ( let i = 0; i < niz.length; i++ ){
        if ( i % 2 == 0 ){
            suma += niz[i];
        }
    }
    return suma;
}


// Zadatak 3

// Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

function promenaZnaka ( niz ) {
    for ( let i = 0; i < niz.length; i++ ){
        if ( i % 2 == 0 && niz[i] % 2 != 0 ){
            niz[i] *= -1;
        }
    }
    console.log ( niz );
}


// Pozivi

let a = [ 13, 1, 14, 11, 4, 12, 7, 1, 9, 14 ];

console.log (indexMinElem(a));

console.log (sumaParniIndex(a));

promenaZnaka(a);