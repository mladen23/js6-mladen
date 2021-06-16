// 1. Za dva uneta broja ispisati koji je veći a koji je manji.
let a = 13;
let b = 16;
if ( a > b ){
    console.log("a je vece od b.");
}
else{
    console.log("b je vece od a.");
}

// 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let t = 3;
if ( t >= 0 ){
    console.log("Temperatura je u plusu.");
}
else{
    console.log("Temperatura je u minusu.");
}

// 3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.
let p = 1;
if (p == 1){
    document.body.innerHTML += `<img src="male.png">`;
}
else{
    document.body.innerHTML += `<img src="female.png">`;
}
// Moze i sa stringovima "male", pa p=="male".

//4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.
let datum= new Date();
let sati = datum.getHours();
if(sati <= 12){
    console.log("Prepodne.");
}
else{
    console.log("Popodne.");
}

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let god = datum.getFullYear();
let godina = 1988;
let razlika = god - godina;
if(razlika >= 18){
    console.log("Osoba je punoletna.");
}
else{
    console.log("Osoba je maloletna.");
}

// 6. Odrediti najveći od tri uneta broja.
let br1 = 45;
let br2 = 65;
let br3 = 91;
if(br1>br2){
    if(br1>br3){
        console.log(br1);
    }
    else{
        console.log(br3);
    }   
}
else{
    if(br2>br3){
        console.log(br2);
    }
    else{
        console.log(br3);
    }
}

// Moze preko finkcije Math.max
// ILI OVAKO:
// let maks = br1; ( pretpostavka )
// if(br2>maks){
//  maks = br2;
// }
// if(br3 > maks){
//     maks = br3;
// }
// console.log(maks);

// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let dan = datum.getDay();
if ( dan == 0 ){
    console.log("Danas je nedelja.");
}
else if ( dan == 6 ){
    console.log("Danas je subota.");
}
else {
    console.log("Danas je radni dan.");
}

/* Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.
*/
let vreme = datum.getHours();
if ( vreme < 12 ) {
    console.log("Dobro jutro.");
}
else if ( vreme < 18 ) {
    console.log("Dobar dan.");
}
else {
    console.log("Dobro vece.");
}

// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

/* if ( 9 < vreme & vreme < 17 ) {
    console.log("Otvoreno.");
}
else {
    console.log("Zatvoreno.");
} */

if (vreme < 9) {
    console.log("Zatvoreno.");
}
else if (vreme >= 17) {
    console.log("Zatvoreno.");
}
else {
    console.log("Otvoreno.");
}

// Uporediti dva uneta datuma i ispisati koji od njih je raniji.

let dat1 = "2021-04-23";
let dat2 = "2021-05-01";
if(dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if(dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
}
else {
    console.log(`${dat1} i ${dat2} su isti.`);
}
// nacin 2
let dan1 = 01;
let mes1 = 06;
let god1 = 2021;

let dan2 = 03;
let mes2 = 06;
let god2 = 2021;

if( god1 < god2){
    console.log("Datum 1 je bio ranije.");
}
else if ( god2 < god1 ){
    console.log("Datum 2 je bio ranije.");
}
// posto su godine iste - nisu upale ni u jedan uslov do sada, prelazimo na mesece
else if ( mes1 < mes2 ){
    console.log("Datum 1 je bio ranije.");
}
else if ( mes2 < mes1 ) {
    console.log("Datum 2 je bio ranije.");
}
// ako su meseci isti, prelazimo na dane
else if ( dan1 < dan2 ){
    console.log("Datum 1 je bio ranije.");
}
else if ( dan2 < dan1){
    console.log("Datum 2 je bio ranije.");
}
else {
    console.log("Datum 1 i datum 2 su isti.");
}

///////////////////
// Ugnjezdeno grananje
let pol = "m";
let godd = 32;

if (pol == "z") {
    console.log("Osoba zenskog pola.");
    if(godd>=18){
        console.log("Osoba je punoletna.");
    }
    else {
        console.log("Osoba je maloletna");
    }
}
else {
    console.log("Osoba muskog pola.");
    if(godd>=18){
        console.log("Osoba je punoletna.");
    }
    else {
        console.log("Osoba je maloletna");
    }
}

// Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
let p1 = 14;
let k1 = 20;
let p2 = 7;
let k2 = 12;

if (k1 < p2) {
    console.log("Ne.");
}
else if (k2 < p1) {
    console.log("Ne.");
}
else {
    console.log("Da.");
}

///////////////////
// Ispitivanje deljivosti - bitno je da je ostatak nula
let broj1 = 7;
let broj2 = 3;
if ( broj1 % broj2 == 0){
    console.log(`Broj ${broj1} je deljiv brojem ${broj2}.`);
}
else {
    console.log("Prvi broj nije deljiv drugim brojem.");
}