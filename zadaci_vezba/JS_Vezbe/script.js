/* Zadatak 1
 Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 
*/
let s = 13;
let m = 47;
let u = s * 60 + 47;
console.log("Proslo je " + u + " minuta od ponoci.");

/* Zadatak 2
Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 
g - 12-hour format of an hour (1 to 12)
G - 24-hour format of an hour (0 to 23)
h - 12-hour format of an hour (01 to 12)
H - 24-hour format of an hour (00 to 23)
        	i - Minutes with leading zeros (00 to 59)
date_default_timezone_set('Europe/Belgrade'); - promena vremenske zone

 $sati = date('G');
 $minuti = date('i');

*/

/* Zadatak 3
Za unetu cenu robe, unetu novčanicu kojom kupac plaća račun ispisati koliki kusur kasirka treba da mu vrati.
*/
let cena = 1345;
let novac = 2000;
let kusur = novac - cena;
console.log("Vas kusur je " + kusur + " dinara.");

/* Zadatak 4
Konverzija valute iz evra u dinare (i obrnuto).
*/
let evro = 430;
let kursEvra = 117.4;
let dinar = evro * kursEvra;
console.log("Iznos: " + dinar);

let dinara = 44202;
let evra = Math.round(dinara / kursEvra);
console.log("Iznos: " + evra + " evra.");

/* Zadatak 5
Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 
*/
let dinarEvro = 117.58;
let dinarDolar = 97.74;
let evro1 = 140;
let dolar = evro1 * dinarEvro / dinarDolar;
console.log("Za " + evro1 + " evra dobijate " + dolar + " dolara." );

let dolar1 = 168;
let evro2 = dolar1 * dinarDolar / dinarEvro;
console.log(evro2);

/* Zadatak 6
Izvršiti konverziju zapremine iz galona u litre i obratno, ako važi da je:
1 galon = 3.785 litara.
*/
let galonLitara = 3.785;
let litar = 40;
let galon = litar / galonLitara;
console.log(galon);

let galon1 = 320;
let litar1 = galon1 * galonLitara;
console.log(litar1);