class FmRadio {
    constructor ( stanica, frekvencija, jacinaTona ){
        this.stanica = stanica;
        this.frekvencija = frekvencija;
        this.jacinaTona = jacinaTona;
    }
    set stanica (stanica){ this._stanica = stanica };
    set frekvencija (frekvencija){
        if ( frekvencija > 87.5 && frekvencija < 108 ){
        this._frekvencija = frekvencija}
        else {
            this._frekvencija = 87.5;
        }
    }
    set jacinaTona (jacinaTona){
        if ( jacinaTona > 0 && jacinaTona < 20 ){
        this._jacinaTona = jacinaTona}
        else {
            this._jacinaTona = 8;
        }
    }

    get stanica(){ return this._stanica };
    get frekvencija(){return this._frekvencija};
    get jacinaTona(){return this._jacinaTona};

    // Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. 

    promeniZvuk(x){
        if ( x == '+' ){
            this.jacinaTona = this.jacinaTona++;
        }
        else if ( x == '-' ){
            this.jacinaTona = this.jacinaTona--;
        }
    }
}
// dodati jednu promenljivu koja 'prenosi vrednost'
let radioStanica = new FmRadio ( 'Beograd1', 92.4, 10 );

console.log(radioStanica.jacinaTona);

radioStanica.promeniZvuk(`+`);

console.log(radioStanica.jacinaTona);


let nesto = "elektrodistribucija";
let nova = nesto.substring (2, 6);
let nova1 = nesto.substr (2, 6);
console.log(nova);
console.log(nova1);