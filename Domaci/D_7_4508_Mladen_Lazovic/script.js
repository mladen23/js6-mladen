/* Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve vi n određujete sami. 
Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.
*/

let v = 100;
let n = 34;
let x = v / n;
let y = Math.ceil( n - v/3 );
if ( x >= 3 ) {
    document.body.innerHTML += `<h2 style="color: green;">DA.</h2>`;
}
else {
    document.body.innerHTML += `<h2 style="color: red;">NE.</h2>`;
    document.body.innerHTML += `<h3 style="color: red;">Potrebno je da lokal napusti ${y} osoba/e.</h3>`;
}

/* Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
*/

let datum = new Date();
let godina = datum.getFullYear();
let godiste = 2003;
let a = godina - godiste;
if ( a >= 18 ) {
    console.log(`Osoba je punoletna.`);
}
else {
    console.log(`Osoba je maloletna.`);
}