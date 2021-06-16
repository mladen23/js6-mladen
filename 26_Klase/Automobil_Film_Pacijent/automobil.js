class Auto {
    // Konstruktor je ugradjeni metod koji klasa mora da poseduje da bi kreirala objekat
    constructor (b, m) {
        this._boja = b;
        this._marka = m;
    }

    sviraj() {
        console.log("Bip! Bip!");
    }
}

// Kreiranje novog objekta - Kada se kreira novi objekat prvo se poziva konstruktor klase. Stoga za kreiranje u zagradama prosledjujemo vrednosti koje zelimo da prosledimo konstruktoru
let auto1 = new Auto("red","Fiat");
console.log(auto1);
console.log(auto1._boja);
console.log(auto1["_boja"]);
auto1.sviraj();

let auto2 = new Auto("white", "Peugeot");
console.log(auto2._marka);

let auto3 = new Auto("blue","Toyota");

let automobili = [auto1,auto2,auto3];
console.log(automobili);

// let auto2 = new Auto (["red", "orange", "yellow"], "Opel");
// console.log(auto2);