console.log(3);
console.log(-15.234);

console.log("Ovo je neki tekst");
console.log('Opet neki tekst.');
console.log("Mark's pen.");

console.log(3 + 5); // radi kao sabiranje
console.log("3" + "5"); // + radi kao konkatenacija stringova
console.log(3 + "5") // broj se konvertuje u string pa se vrsi konkatenacija stringova

console.log(true); // Logicke vrednosti
console.log(false);

let x; // Deklarisanje promenljive
x = 3; // x dobija vrednost 3
console.log(x);

x = 5;
console.log(x);

x = "Pera";
let y = true;
console.log(x, y);

const pi = 3.14;
console.log(pi);

// pi = 3.1415; 
// kada jednom deklariseno konstantu, ne mozemo da joj promenimo vrednost

let a;
console.log(a); // nedefinisana vrednost promenljive

// console.log(b); // nedefinisana promenljiva

recenica = "Java script kaze \" Hello world! \" ";
console.log(recenica);

recenica = `JS kaze: " Ili kupi alat, il' ostavi zanat! " `;
console.log(recenica);


let god;
console.log(god, god + 3); // undefined, NaN - not a number

let god1 = null;
console.log(god1, god1 + 3);

// konkatenacija / nadovezivanje stringova

let ime = "Mladen"
let prezime = "Lazovic"
let imePrezime =  ime + " " + prezime
console.log(imePrezime);
console.log(ime.length);

// osnovne aritmeticke operacije

let p = 7;
let q = 3;
let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

// +=

p += 3; // p = p + 3
console.log(p);

//++
p++;
console.log(p);

let r = 50;
console.log(r++) // 50 // r++ prvo ispise pa poveca
console.log(r); // 51

let k = 50;
console.log(++k) // 51 // ++k prvo uveca pa ispise

/* 7 / 3 = 2 ( ost. 1 ) */
x = 7;
y = 3;
ost = 7 % 3; //  racunanje ostatka pri deljenju
console.log(ost);

stepen = y**4;
console.log(stepen); // stepenovanje

let rezultat = 26 + "godina";
console.log(rezultat);

let rezultat2 = 26 + 1 + "godina" // prvo sabere 26+1 pa doda godina
console.log(rezultat2);

let rezultat3 = 26 + "godina" + 1
console.log(rezultat3);