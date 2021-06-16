import {Knjiga} from "./knjiga.js";

let knjiga1 = new Knjiga ('Bajke', 'Hans Kristijan Andersen', 2004, 714, 500);

knjiga1.stampaj();
console.log("Da li je knjiga obimna: " + knjiga1.obimna());
console.log("Da li je knjiga skupa: " + knjiga1.skupa());
console.log(`Ime autora je ${knjiga1.autor}; Da li je ime dugacko: ${knjiga1.dugackoIme()} `);

let knjiga2 = new Knjiga ('Hajdi', 'Johana Spiri', 1994, 304, 600);
let knjiga3 = new Knjiga ('Orlovo rano lete', 'Branko Copic', 2020, 186, 400);

let arrKnjige = [knjiga1, knjiga2, knjiga3];
console.log(arrKnjige);
// Ispis svih podataka pozivanjem metode 'stampaj'
// prvi nacin
arrKnjige.forEach ( knjiga =>{
    knjiga.stampaj();
});
// drugi nacin
for ( let i = 0; i < arrKnjige.length; i++){
    arrKnjige[i].stampaj(); // arrKnjige[i] je objekat
};
// Kolika je ukupna cena svih knjiga
let ukupnaCena = niz => {
    let suma = 0;
    niz.forEach ( element =>{
        suma += element.cena; // .cena je getter, pozivamo bez zagrada
    });
    return suma;
}
console.log("Ukupna cena svih knjiga iz niza je: ", ukupnaCena(arrKnjige));

// Kolika je prosecna cena knjige
let prosecnaCena = niz => {
    let ukupna = ukupnaCena(niz);
    let brojKnjiga = niz.length;
    return ukupna / brojKnjiga;
}
console.log(prosecnaCena(arrKnjige));

// Prosecna cena stranice knjige

let prosecnaCenaStranice = niz => {
    let ukupna = ukupnaCena(niz);
    let brStranica = 0;
    niz.forEach ( element =>{
        brStranica += element.brStrana;
    });
    return ukupna / brStranica;
}
console.log("Jedna stranica u proseku kosta: " + prosecnaCenaStranice(arrKnjige));