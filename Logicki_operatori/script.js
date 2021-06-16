let a = 12;
let b = 5;
let c = 3;
if (a > 0 && a < 10){ // konjunkcija, tacan ako su oba tacna
    console.log("Oba logicka uslova su zadovoljena.");
}
else {
    console.log("Bar jedan uslov je netacan.");
}
if ( b < 0 || b > 15){ // disjunkcija, barem jedan je tacan
    console.log("Barem jedan logicki uslov je zadovoljen.");
}
else {
    console.log("Ni jedan ni drugi nisu tacni.");
}
if ( !(c < 0) ){ // negacija, tacna ako je izraz netacan
    console.log(`Broj ${c} je nenegativan.`);
}
else {
    console.log(`Broj ${c} je negativan.`);
}

//////////////////////
//Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan
let pol = "z";
let god = 18;

if ( pol == "m" && god >= 18 ){
    console.log("Osoba je muskog pola, i punoletna je.");
}
else if ( pol == "m" && god < 18 ){
    console.log("Osoba je muskog pola i maloletna je.");
}
else if ( pol == "z" && god >= 18 ){
    console.log("Osoba je zenskog pola i punoletna je.");
}
else {
    console.log("Osoba je zenskog pola i maloletna je.");
}

/* Naći koji je najveći od tri uneta broja 
a, b i c, korišćenjem logičkih operatora. */
// a, b, c su uvedene na vrhu - linije 1,2,3
if ( a > b && a > c ){
    console.log(`Broj ${a} je najveci broj.`);
}
else if ( b > a && b > c ){
    console.log(`Broj ${b} je najveci broj.`);
}
else{
    console.log(`Broj ${c} je najveci broj.`);
}

/* Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih. */
let t = 45;
if ( t < -15 || t > 40 ){
    document.body.innerHTML += `<h1>Ekstremna temperatura</h1>`;
}

/* Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400. */
let datum = new Date();
let godina = datum.getFullYear();
let x = godina % 4;
let y = godina % 100;
let z = godina % 400;
if ( (x == 0 && !( y == 0 )) || z == 0){
    console.log("Godina je prestupna.");
}
else {
    console.log("Godina nije prestupna.");
}
/* Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren. 
*/
let dan = datum.getDay();
let sat = datum.getHours();
if ( dan == 0 || dan == 6 ){
    if ( sat >=10 && sat < 18 ){
        console.log("Otvoreno.");
    }
    else {
        console.log("Zatvoreno.");
    }
}
else {
    if ( sat >=9 && sat < 20 ){
        console.log("Otvoreno.");
    }
    else {
        console.log("Zatvoreno.");
    }
}