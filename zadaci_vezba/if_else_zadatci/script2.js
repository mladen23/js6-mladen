// Za uneti broj ispitati da li je paran ili nije. 
let broj = 30;
if ( broj % 2 == 0 ){
    console.log(`${broj} je paran broj.`);
}
else {
    console.log(`${broj} je neparan broj.`);
}

// Za uneti broj ispisati da li je deljiv sa 3 ili ne.
if ( broj % 3 == 0 ){
    console.log(`${broj} je deljiv sa 3.`);
}
else {
    console.log(`${broj} nije deljiv sa 3.`);
}

//Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
let br1 = 22;
let br2 = 32;
let razlika1 = br1 - br2;
let razlika2 = br2 - br1;
if ( br1 > br2 ) {
    document.body.innerHTML += `<p>Razlika dva broja je ${razlika1}.</p>`;
}
else {
    document.body.innerHTML += `<p>Razlika dva broja je ${razlika2}.</p>`;
}

/* Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
*/
let a = 5;
if ( a <= 0 ) {
    a--;
    console.log(`Broj je manji od nule. Njegov prethodnik je ${a}`);
}
else {
    a++;
    console.log(`Broj je veci od nule. Njegov sledbenik je ${a}`);
}

//Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od nih je najmanji. 
let x = 12;
let y = 22;
let z = 11;
let max = x;
let mid = y;
let min = z;
let zbir = x + y + z;
if ( y > max ) {
    max = y;
}
if ( z > max ) {
    max = z;
}
if ( y < min ) {
    min = y;
}
if ( x < min ) {
    min = x;
}
mid = zbir - max - min;
console.log (`${max} je najveci, ${mid} je srednji, ${min} je najmanji.`);

// Za učitani broj ispitati da li je ceo.
let h = 4.5;
let ceo = h % 1;
if ( ceo == 0 ) {
    console.log(`${h} je ceo broj`);
}
else {
    console.log(`${h} nije ceo broj.`);
}