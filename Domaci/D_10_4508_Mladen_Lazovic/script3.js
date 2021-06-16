/*  A. Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
    B.Odrediti proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3, a potom od njega oduzeti zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7:
    a. Koristeći while petlju
    b. Kotisteći for petlju

    C. Odrediti sumu kubova neparnih brojeva od n do m:
    a. Koristeći while petlju
    b.Koristeći for petlju
*/
// A. Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
let broj = 1;
let zbir = 0;
let i = 10;
while ( i <= broj ){
    zbir += broj % i;
    broj = Math.floor(broj / i);
}
    zbir += broj;
document.body.innerHTML += `Zbir cifara iznosi ${zbir}.`;

// B.Odrediti proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3, a potom od njega oduzeti zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7:
// a. while
let n = 1;
let m = 15;
let proizvod = 1;
let zbir1 = 0;
while ( n <= m ){
    if ( n % 7 == 0 && n % 3 !=0 ){
        proizvod *= n;
    }
    else if ( n % 3 == 0 && n % 7 != 0 ){
        zbir1 += n;
    }
    n++;
}
console.log(`Razlika iznosi: ${proizvod - zbir1}`);

// b. for
n = 1;
m = 15;
proizvod = 1;
zbir1 = 0;
for ( i = n; i <= m; i++ ){
    if ( i % 7 == 0 && i % 3 != 0 ){
        proizvod *= i;
    }
    else if ( i % 3 == 0 && i % 7 != 0 ){
        zbir1 += i;
    }
}
console.log (`Razlika iznosi: ${proizvod - zbir1}`);

// C. Odrediti sumu kubova neparnih brojeva od n do m:

// a. while
n = 1;
m = 6;
zbir = 0;
while ( n <=m ){
    if ( n % 2 == 1 ){
        zbir += n**3;
    }
n++;
}
console.log(`Suma kubova neparnih brojeva iznosi ${zbir}`);

// b. for
n = 1;
m = 6;
zbir = 0;
for ( i = n; i <= m; i++ ){
    if ( i % 2 == 1 ){
        zbir += i**3;
    }
}
console.log (`Suma kubova neparnih brojeva iznosi ${zbir}`);