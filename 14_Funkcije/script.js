let pr = 4;
let pr2 = 50;
if ( pr < 10 ) {
    pr = "0" + pr;
}
if ( pr2 < 10 ) {
    pr2 = "0" + pr2;
}
console.log (pr); // poziv funkcije log
console.log (pr2);

// Definicija / telo funkcije ( definicijom se NE IZVRSAVA funkcija )

function mojaFunkcija(){
    console.log (`Zdravo svete!`);
}

console.log (`Text pre poziva funkcije.`);

// Poziv funkcije, sada se IZVRSAVA
mojaFunkcija(); 

console.log (`Text posle poziva funkcije.`);

// primer
// Definicija druge funkcije
function ispisiTekst ( tekst ){ // uveli smo promenljivu tekst
    console.log (`Ispisujem tekst: ` + tekst); // parametar tekst
}

// poziv funkcije
ispisiTekst(`ITBootCamp`); // Prilikom poziva funkcije prosledjuje se neka vrednost promenljivoj
ispisiTekst(`Pera Peric`);
ispisiTekst(25); // Izvrsice konkatenaciju stringova ( linija 28 )

let x = "Mika";
ispisiTekst(x); // "tekst" preuzima vrednost "x"

let tekst = "Zika"; // Globalna promenljiva - nije isto sto i "tekst" u definiciji funkcije... globalna promenljiva =/= parametar funkcije
ispisiTekst(tekst);


/////////////////
// Definicija funkcije
function korisnik (ime, prezime) {
    console.log ( `Korisnik: ${ime} ${prezime}` );
}

// Poziv funkcije
korisnik (`Pera`, `Peric`);

// Napisati funkciju koja ispisuje ime i prezime korisnika, koji se prosledjuju kao parametri.
// Kao i info da li je prezime dugacko - da li je preko 10 karaktera.

function korisnikPrezime (ime, prezime) {
    if ( prezime.length > 10 ) {
        console.log( `Korisnik ${ime} ${prezime} ima dugacko prezime.` );
    }
    else {
        console.log (`Korisnik ${ime} ${prezime} nema dugacko prezime.`);
    }
}

korisnikPrezime (`Jelena`, `Matejic`);
korisnikPrezime (`Stefan`, `Stanimirovic`);

//
function korisnikGodine (ime, god) {
    if (god >= 18){
        console.log (`Korisnik ${ime} ima ${god} godina i punoletna je osoba.`);
    }
    else {
        console.log (`Korisnik ${ime} ima ${god} godina i maloletna je osoba.`);
    }
}

korisnikGodine ( `Marko`, 29 );
korisnikGodine ( `Lazar`, 15 );

//
function zbir ( a, b ){
    let rez = a + b;
    console.log(`Zbir cifara je ${rez}.`);
}
zbir ( 7, 5 );

let a = 12;
let b = 7;
zbir ( a, b );

// Funkcija koja VRACA zbir svoja dva parametra
function zbir2 (a, b){
    let rez = a + b;
    return rez;
}

let z = zbir2(5, 6);
console.log(`Zbir brojeva 5 i 6 je ${z}.`);

if (z >= 0){
    console.log (`Zbir je pozitivan broj.`);
}
else {
    console.log( `Zbir je negativan broj.` );
}

if (zbir2(-5, -6) >= 0 ){
    console.log (`Zbir je pozitivan broj.`);
}
else {
    console.log( `Zbir je negativan broj.` );
}

let s = zbir2(5, 8) + zbir2(8, 9);
             // 13  +        17
//     = 30
    if (s % 2 == 0) {
        console.log (`Zbir ova cetiri broja je paran.`);
    }
    else {
        console.log (`Zbir ova cetiri broja je neparan.`);

    }



function proizvod(a, b){
    return a * b;
    console.log (`Hello!`); // ovo je posle return-a, ne izvrsava se
}
// return ima dvojaku ulogu
// 1 - vraca vrednost funkiji
// 2 - PREKIDA dalje izvrsenje funkcije
console.log (proizvod(5, 6));


// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan (a) {
    if ( a % 2 == 1 ){
        return true;
    }
    else {
        return false;
    }
}
console.log (neparan(5));

//
let m = 18;
if (neparan(m)){ // vrednost poziva funkcije je true ili false
    console.log(`Broj ${m} je neparan.`);
}
else {
    console.log (`Broj ${m} je paran.`);
}
// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function max2 (a, b){
    if ( a >= b ){
        return a;
    }
    else {
        return b;
    }
}
// Treba izbegavati da neke opcije vracaju, a neke ispisuju.

function max4 ( a, b, c, d ){
    let m1 = max2(a, b); // m1 - broj veci od a i b
    let m2 = max2(c, d); // m2 - broj veci od c i d
    let m3 = max2(m1, m2);
    return m3;
}

// drugi nacin
function max4DN(a, b, c, d){
    return max2(max2(a, b), max2(c, d));
}

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika (a){
    document.body.innerHTML += `<img src="${a}" style="width:25%;">`;
}
slika ( `https://treerevolution.in/wp-content/uploads/2019/06/oak-tree-sunset-iStock-477164218.jpg` );

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function boja (a){
    document.body.innerHTML += `<p style="font-size:30px; color:${a};">Ovo je obojen paragraf.</p>`;
}
boja (`green`);

/* 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini? */

function sedmiDan(n){
    switch (n % 7 ) {
        case 0:
            console.log (`Nedelja.`);
            break;
        case 1:
            console.log (`Ponedeljak.`);
            break;
        case 2:
            console.log (`Utorak.`);
            break;
        case 3:
            console.log (`Sreda.`);
            break;
        case 4:
            console.log (`Cetvrtak.`);
            break;
        case 5:
            console.log (`Petak.`);
            break;
        case 6:
            console.log (`Subota.`);
            break;
        default:
            console.log (`Doslo je do greske. Unesite ceo broj.`)
            
    }
}

sedmiDan(0);

// Zadatak 8

/* Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/

function deljivSaTri (n, m) {
    let broj = 0;
    for ( let i = n; i <= m; i++ ){
        if ( i % 3 == 0 ){
            console.log (i);
            broj++;
        }
    }
    return broj;
}

deljivSaTri (3,12);

// Zadatak 9

/* Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
Brojeve n i m proslediti kao parametre funkciji. 
*/

function sumiraj (n, m) {
    let zbir = 0;
    for ( let i = n; i <= m; i++ ){
        zbir += i;
    }
    return zbir;
}

console.log (sumiraj(5, 8));

// Zadatak 10

/* Napisati funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/

function mnozi (n, m){
    let proizvod = 1;
    for ( let i = n; i <= m; i++ ){
        proizvod *= i;
    }
    return proizvod;
}

console.log (mnozi(2, 5));

// Zadatak 11

/* Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/

function arSredina (n, m){
    let zbir = 0;
    let broj = 0;
    for ( let i = n; i <= m; i++ ){
        zbir += i;
        broj ++;
    }
    return zbir / broj;
}

console.log (arSredina(2, 6));

// Zadatak 12

/* Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
*/

function arSredina3 (n, m){
    let zbir = 0;
    let broj = 0;
    for ( let i = n; i <= m; i++ ){
        if ( i % 10 == 3 ){
            zbir += i;
            broj ++;
        }
    }
    // let sredina = zbir / broj;
    // return sredina;
    return zbir / broj;
}
// BOLJE PREKO IF-ELSE... ako je m < n... 


// Zadatak 13

/* Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
*/

function velicinaFonta(n){
    document.body.innerHTML += `<p style="font-size:${n}px;">Parametar menja velicinu fonta.</p>`;
}

velicinaFonta(35);

// Zadatak 14

/* Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
*/

function petPuta(){
    for ( i = 10; i <= 50; i+= 10 ){
        document.body.innerHTML += `<p style="font-size:${i}px;">Ispisuje se pet puta...</p>`;
    }
}

petPuta();