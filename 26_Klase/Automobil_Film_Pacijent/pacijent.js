class Pacijent {
    constructor (i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime (x){
        this._ime = x;
    }
    set visina (x){
        if ( x > 0 && x < 250 ){
        this._visina = x;
        }
        else {
            this._visina = 0;
        }
    }
    set tezina (x){
        if (x > 0 && x < 550){
        this._tezina = x;
        }
        else {
            this._tezina = 0;
        }
    }

    get ime (){
        return this._ime;
    }
    get visina (){
        return this._visina;
    }
    get tezina (){
        return this._tezina;
    }

    stampaj(){
        console.log(this.ime, this.visina, this.tezina);
    }

    bmi (){
        let bmi = this.tezina / ((this.visina/100)**2);
        return bmi;
    }

    kritican(){
        let x = this.bmi();
        if ( x < 15 && x > 40 ){
            return true;
        }
        else {
            return false;
        }
    }
    
}

let pacijent1 = new Pacijent ('Charles', 202, 128);
let pacijent2 = new Pacijent ('Jason', 172, 95);
let pacijent3 = new Pacijent ('Marc', 180, 115);

console.log(pacijent1._tezina);
pacijent1.stampaj();
console.log(pacijent1.bmi());
console.log(pacijent1.kritican());