class Auto {
    constructor (b,m,k){
        // Ovde pozivamo setter-e
        this.boja = b; // this.boja je setter, setter pozivamo kao promenljivu, bez navodjenja zagrada, iako je metod
        this.marka = m;
        this.krov = k;
    }

    // Setter - postavlja vrednost poljima
    // Pravimo setter za svako polje
    set boja(x){
        this._boja = x; 
    }
    set marka(x){
        this._marka = x;
    }
    set krov(x){
        if(x === true || x === false){
            this._krov = x;
        }
        else {
            this._krov = true;
        }
    }

    // Getter vraca vrednost polja - citaju vrednost iz polja
    get boja(){
        return this._boja;
    }
    get marka(){
        return this._marka;
    }
    get krov(){
        return this._krov;
    }

}

let auto1 = new Auto ("red", "Fiat", true);

// Ovo ne bi trebalo da se radi

// console.log(auto1._boja);
// auto1._boja = "white"; // ovako moze da se menja property ali ovo nije bas najbolja praksa
// console.log(auto1._boja);

// VEC OVAKO
// Pristup poljima preko getter-a i setter-a

console.log(auto1.boja); // getter-u pristupamo bez zagrada
auto1.boja = "white"; // pristupamo setter-u, bez zagrada
console.log(auto1.boja);