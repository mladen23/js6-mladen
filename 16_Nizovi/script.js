let voce = ["jagoda", "jabuka", "malina", "kupina", "ananas"];
console.log (voce);
console.log (voce[2]);

voce[2] = "tresnja";
console.log(voce);

// Ispis elemenata niza
console.log (voce[0], voce[1], voce[2]);

// Ispis koriscenjem petlje

for ( let i = 0; i < voce.length; i++ ) { // ako koristimo length ide STROGO MANJE OD...
    console.log (voce[i]);
}

const povrce = ["tikvica", "boranija", "krompir"];
povrce[0] = "tikva";
console.log (povrce); // Iako je konstanta, mozemo da menjamo promenljive niza ALI NE MOZEMO da dodajemo u const

let razno = [3, -15.5 , false, "bla bla", ["a", "b", "c"]];
console.log(razno);

//////////////////////////////
// Zadatak 1
// Ispisati sve elemente niza od 5 stringova.

let niz = ["kuca", "drvo", "bicikla", "lopta", "nebo"];
for ( let i = 0; i < niz.length; i++ ){
    console.log (niz[i]);
}

// Zadatak 2
// Odrediti zbir elemenata celobrojnog niza.

let brojevi = [2, 42, 7, 13, 36, -7];
let zbir = 0;
for ( i = 0; i < brojevi.length; i++ ){
    zbir += brojevi[i];
}
console.log (zbir);

// funkcija
zbir = 0;
let zbirr = nizz => {
    for ( i = 0; i < brojevi.length; i++ ){
        zbir += brojevi[i];
    }
    return zbir;
}
console.log(zbirr(brojevi));

// Zadatak 3
// Odrediti proizvod elemenata celobrojnog niza.

// niz definisan - linija 36
let proizvod = 1;
for ( i = 0; i < brojevi.length; i++ ) {
    proizvod *= brojevi[i];
}
console.log (proizvod);

// Zadatak 4
// Odrediti srednju vrednost elemenata celobrojnog niza.
// brojevi = [2, 42, 7, 13, 36, -7]

zbir = 0;
for ( i = 0; i < brojevi.length; i++ ) {
    zbir += brojevi[i];
}
console.log (zbir / brojevi.length);

// funkcija za izracunavanje
let aritmeticka = niz => {
    let s = 0;
    let br = 0;
    for ( let i = 0; i < niz.length; i++){
        s += niz[i];
        br ++;
    }
    return s / br;
}
console.log (aritmeticka(brojevi));
console.log (aritmeticka([2, 4, -8]));

// Zadatak 5
// Odrediti maksimalnu vrednost u celobrojnom nizu.
// brojevi = [2, 42, 7, 13, 36, -7]

let max = brojevi[0];
for ( let i = 0; i < brojevi.length; i++ ){
    if ( brojevi[i] > max ){
        max = brojevi[i];
    }
}
console.log (max);

// funkcija
let maxBr = niz => {
    let maxi = niz[0];
    for ( let i = 0; i < niz.length; i ++ ){
        if ( niz[i] > maxi ){
            maxi = niz[i];
        }
    }
    return maxi;
}
console.log (maxBr([3, 13, 6, 2]));
console.log (maxBr(brojevi));

// Zadatak 6
// Odrediti minimalnu vrednost u celobrojnom nizu.
// brojevi = [2, 42, 7, 13, 36, -7]

let min = brojevi[0];
for ( let i = 0; i < brojevi.length; i++ ){
    if ( brojevi[i] < min ){
        min = brojevi[i];
    }
}
console.log (min);

// funkcija
let mini = niz => {
    let min2 = niz[0];
    for ( let i = 0; i < niz.length; i++ ){
        if ( niz[i] < min2 ){
            min2 = niz[i];
        }
    }
    return min2;
}
console.log (mini(brojevi));
console.log(mini([2,6,34,-12]));

// Zadatak 7
// Odrediti indeks maksimalnog elementa celobrojnog niza.
// brojevi = [2, 42, 7, 13, 36, -7]

// Prvi nacin
let index = 0;
for ( let i = 0; i < brojevi.length; i++ ){
    if ( max == brojevi[i] ){ // max iz zadatka 5
        index = i;
        break; // nema potrebe da ide dalje, izbacice prvi koji se poklapa...ako ne stavimo break, icice do kraja i izbaciti poslednji koji se poklapa (ako ima vise istih vrednosti)
    }
}
console.log (index);

// Drugi nacin

let maxVrednost = brojevi[0];
let maxIndex = 0;
for ( let i = 0; i < brojevi.length; i ++ ){
    if ( maxVrednost < brojevi[i] ){ // ovo ispisuje prvi index... ako umesto < stavimo <= dace poslednji index
        maxVrednost = brojevi[i];
        maxIndex = i;
    }
}
console.log (`Max vrednost je ${maxVrednost}, i u nizu ima index ${maxIndex}.`);

// funkcija

let indexMaxEl = nizz => {
    let index1 = 0;
    for ( let i = 0; i < nizz.length; i++ ){
        if ( max == nizz[i] ){
            index1 = i;
            break;
        }
    }
    return index1;
}
console.log (indexMaxEl(brojevi));

// Zadatak 8
// Odrediti indeks minimalnog elementa celobrojnog niza.

index = 0;
for ( i = 0; i < brojevi.length; i++ ){
    if ( min == brojevi[i] ) { // min iz sestog zadatka
        index = i;
        break;
    }
}
console.log (index);

// funkcija

let indexMinEl = nizz => {
    let index1 = 0;
    for ( i = 0; i < brojevi.length; i++ ){
        if ( min == nizz[i] ){
            index1 = i;
            // nema break-a... vraca poslednji, ako ima vise istih vrednosti
        }
    }
    return index1;
}
console.log (indexMinEl(brojevi));

// Zadatak 9
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
// brojevi = [2, 42, 7, 13, 36, -7]

let brBrojeva = 0;
zbir = 0;
for ( let i = 0; i < brojevi.length; i++ ){
    zbir += brojevi[i];
}
let arsr = zbir / brojevi.length;
for ( i = 0; i < brojevi.length; i++ ){
    if ( brojevi[i] > arsr ){
        brBrojeva++
    }
}
console.log (brBrojeva);

// iskoriscena funkcija "aritmeticka" - cetvrti zadatak

brBrojeva = 0;
for ( let i = 0; i < brojevi.length; i++ ){
    if ( brojevi[i] > aritmeticka(brojevi) ){
        brBrojeva++;
    }
}
console.log (brBrojeva);

// funkcija

let brVecih = nizz => {
    let brojV = 0;
    for ( let i = 0; i < nizz.length; i++ ) {
        if ( nizz[i] > aritmeticka(nizz) ){
            brojV ++
        }
    }
    return brojV;
}
console.log (brVecih(brojevi));

console.log ( brVecih([2,5,7,14,16,17,18]));

// Zadatak 10
// Izračunati zbir pozitivnih elemenata celobrojnog niza.
zbir = 0;
for ( let i = 0; i < brojevi.length; i++ ){
    if ( brojevi[i] > 0 ){
        zbir+= brojevi[i];
    }
}
console.log ( zbir );

// funkcija

let zbirPoz = nizz => {
    zbir = 0;
    for ( let i = 0; i < nizz.length; i++ ){
        if ( nizz[i] > 0 ){
            zbir+= nizz[i];
        }
    }
    return zbir;
}
console.log (zbirPoz(brojevi));

console.log ( zbirPoz([3, -7, 12, 0, -2, 1.5]) );

// Zadatak 11
// Odrediti broj parnih elemenata u celobrojnom nizu.
// brojevi = [2, 42, 7, 13, 36, -7]

let brParnih = 0;
for ( let i = 0; i < brojevi.length; i++ ){
    if ( brojevi[i] % 2 == 0 ){
        brParnih++;
    }
}
console.log ( brParnih );

// Zadatak 12

// Odrediti broj parnih elemenata sa neparnim indeksom.

let nizBrojeva = [10, 16, 15, 17, 12, -14 ];
let brElem = 0;
for ( let i = 0; i < nizBrojeva.length; i++ ){
    if ( nizBrojeva[i] % 2 == 0 && i % 2 != 0 ){
        brElem ++;
    }
}
console.log (brElem);

// Zadatak 13

// Izračunati sumu elemenata niza sa parnim indeksom.

// nizBrojeva = [10, 16, 15, 17, 12, -14 ]

let suma = 0;
for ( let i = 0; i < nizBrojeva.length; i++ ){
    if ( i % 2 == 0 ){
        suma += nizBrojeva[i];
    }
}
console.log ( suma );

// Zadatak 14

// Promeniti znak svakom elementu celobrojnog niza.

for ( let i = 0; i < nizBrojeva.length; i++ ){
    nizBrojeva[i] = -nizBrojeva[i];
}
console.log (nizBrojeva);


// Zadatak 15

// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

nizBrojeva = [10, 16, 15, 17, 12, -14 ]

for ( let i = 0; i < nizBrojeva.length; i++ ){
    if ( nizBrojeva[i] % 2 != 0 && i % 2 == 0 ){
        nizBrojeva[i] = -nizBrojeva[i];
    }
}
console.log ( nizBrojeva );

// Zadatak 16

// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let nizKupovina = ["mleko", "sir", "brasno", "kafa", "cokolada"];
let lista = `<ul>`;
for ( let i = 0; i < nizKupovina.length; i++ ){
    lista +=
    `
    <li>${nizKupovina[i]}</li>
    `;
}
lista += `</ul>`;
document.body.innerHTML += lista;

// Zadatak 17

// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let nizTim = ["Obradovic", "Djordjevic", "Drobnjak", "Tomasevic", "Gurovic"];
let tabela = 
`
<table>
<tr>
<th> Jugoslavija </th>
</tr>
`;

for ( let i = 0; i < nizTim.length; i++ ) {
    tabela +=
    `
    <tr>
    <td>${nizTim[i]}</td>
    </tr>
    `;
}

tabela += `</table>`;

document.body.innerHTML += tabela;

// Zadatak 18

// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let nizSlike = ["img/theBad.jpg", "img/theGood.jpg", "img/theUgly.jpg"];

for ( let i = 0; i < nizSlike.length; i++ ){
    document.body.innerHTML += `<img src="${nizSlike[i]}">`;
}

// Zadatak 19

// Ispisati dužinu svakog elementa u nizu stringova.

let nizRandom = ["Ilija", "kuca", "SAD", "elektrodistribucija", "c"];

for ( let i = 0; i < nizRandom.length; i++ ) {
    console.log ( nizRandom[i].length );
}

// Zadatak 20

// Odrediti element u nizu stringova sa najvećom dužinom.

let maxDuzina = nizRandom[0];

for ( let i = 0; i < nizRandom.length; i ++ ) {
    if ( maxDuzina.length < nizRandom[i].length ){
        maxDuzina = nizRandom[i];
    }
}
console.log (`Element u nizu sa najvecom duzinom je ${maxDuzina}, i ima ${maxDuzina.length} karaktera.`);

// Zadatak 21

// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let nizBiljke = ["breza", "ruza", "luk", "bokvica", "lipa", "bagrem"];

let zbirBiljke = 0;

for ( let i = 0; i < nizBiljke.length; i++ ) {
    zbirBiljke += nizBiljke[i].length;
}
let prosek = zbirBiljke / nizBiljke.length;

console.log ( `Prosecna duzina stringova je ${prosek}.` ) // provera vrednosti

let brojDuzih = 0;
for ( let i = 0; i < nizBiljke.length; i++ ) {
    if ( nizBiljke[i].length > prosek ){
        brojDuzih ++;
    }
}
console.log (`Broj stringova cija duzina je veca od prosecne duzine je ${brojDuzih}.`);

// Zadatak 22

// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

// nizBiljke = ["breza", "ruza", "luk", "bokvica", "lipa", "bagrem"]

let element = "";
let brojElemBiljke = 0;

for ( let i = 0; i < nizBiljke.length; i++ ){

    element = nizBiljke[i];

    for ( let g = 0; g < element.length; g++ ){
        if ( element[g] == "a" || element[g] == "A" ){
            brojElemBiljke++;
            break;
        }
    }
}

console.log (brojElemBiljke);

// nacin 2
// rec.includes ("a")  - vraca true ukoliko element sadrzi slovo "a"
let brojStringovaSaA = 0;
for ( let i = 0; i < nizBiljke.length; i++ ){
    let rec = nizBiljke[i];
    if (rec.includes("a") || rec.includes("A")){ // izvrsice ovo ako je "true"
        brojStringovaSaA ++;
    }
}
console.log (brojStringovaSaA);

// Zadatak 23

// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

let nizPrvoSlovo = ["nebo", "Ana", "papir", "ako", "ali", "Aca", "casa" ];

let brElemSlovo = 0;

for ( let i = 0; i < nizPrvoSlovo.length; i++ ) {
    let rec = nizPrvoSlovo[i];
    if ( rec[0] == "a" || rec[0] == "A" ){
        brElemSlovo ++;
    }
}
console.log (brElemSlovo);