// Imenovane funkcije
function suma(a, b){ // Deklaracija imenovane funkcije
    return a + b;
}

console.log (suma(1,2)); // Poziv funkcije

// Anonimne funkcije

let suma2 = function (a, b) { // Deklaracija anonimne funkcije
    return a + b;
}

console.log (suma(2,3)); // Poziv anonimne funkcije preko promenljive u kojoj je sacuvana

// Arrow funkcije

let suma3 = (a, b) => {
    return a + b;
}

console.log (suma(3, 4));


/////////////////

// Arrow f-ja koja ispisuje text

let hello = () => {
    console.log (`Ahoy!!`);
}

hello();
hello();

// Arrow f-ja koja poz korisnija

let korisnik = (ime) => {
    console.log (`Zdravo ${ime}!`);
}

korisnik(`Mladen`);
korisnik(`Marija`);

// arrow f-ja koja ispisuje ime korisnika i pravni status

let korisnik2 = (ime, godine) => {
    if (godine < 18){
        let ispis = "Korisnik " + ime + " je maloletno lice.";
        document.body.innerHTML += `<p style="color:green">${ispis}</p>`;
    }
    else {
        let ispis = "Korisnik " + ime + " je punoletno lice.";
        document.body.innerHTML += `<p style="color:blue">${ispis}</p>`;
    }
}

korisnik2 ("Dubravka", 23);
korisnik2 (`Mare`, 7);

//////////////////////////

// Zadatak 3
/* Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan. */

let neparan = (n) => {
    if ( n % 2 == 1 ){
        return true;
    }
    else {
        return false;
    }
}

// skraceno
let neparan1 = n => n % 2 == 1; // nema potrebe za ? true : false; - ovo ce vratiti T or F...
console.log (neparan1(3));

// console.log (neparan(3));

// Zadatak 4

/* Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
*/

let maks2 = (a, b) => {
    if ( a >= b){
        return a;
    }
    else {
        return b;
    }
}

// >>> ternarni operator (prima 3 parametra)
let m2 = (a, b) => {
    return (a > b) ? a : b; // ako je a > b ... vrati a, ako nije vrati b
}

let maxi2 = (a, b) => a > b ? a : b; // nepa potrebe za {} jer imamo samo return,i mozemo da koristimo ternarni operator da izbegnemo if-else

let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2 (c, d)); // ne treba {} jer koristimo samo "return"
// console.log (maks4(33,5,9,12));


// Zadatak 5
/* Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike. */

let slika = (a) => {
    document.body.innerHTML += `<img src="${a}"> `;
}

//slika ('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg');

// SKRACENI ZAPIS with return:
let slika2 = (a) => {
    return `<img src="${a}"> `;
}
// moze jos krace
let slika3 = a => `<img src="${a}"> `;

document.body.innerHTML += slika3 ('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg');
// Zadatak 6

/* Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
*/

let boja = (a) => {
    document.body.innerHTML += `<p style="color:${a}">Paragraf kojem se menja boja...</p>`;
}

//boja (`navy`);

// Zadatak 7

/* Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
*/

let sedmiDan = (n) => {
    switch ( n % 7 ){
        case 0:
            console.log(`Odabrani dan je nedelja.`);
        break;
        case 1:
            console.log(`Odabrani dan je ponedeljak.`);
        break;
        case 2:
            console.log(`Odabrani dan je utorak.`);
        break;
        case 3:
            console.log(`Odabrani dan je sreda.`);
        break;
        case 4:
            console.log(`Odabrani dan je cetvrtak.`);
        break;
        case 5:
            console.log(`Odabrani dan je petak.`);
        break;
        case 6:
            console.log(`Odabrani dan je subota.`);
        break;
        default:
            console.log (`Unesite ceo broj.`);

    }
}

//sedmiDan(23);

// Zadatak 15
/* Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

*/
let plata = (n, a) => {
    let ukupno = n * a;
    let d = 1000;
    for ( let i = 0; i < n; i++ ){
        ukupno += i * d; 
    }
    return ukupno;
}

console.log (plata(4, 10000));

// Zadatak 16
/* Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s
*/

let most = ( t, p, n ) => {
    if (p >= t || p + n <= t ) {
        return 0;
    }
    else {
        return Math.abs( p + n - t);
    }
}