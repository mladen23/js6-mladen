export class Radnik {
    constructor ( ime, plata ){
        this.ime = ime;
        this.plata = plata;
    }
    set ime (ime){ this._ime = ime };
    set plata (plata){ this._plata = plata };

    get ime(){ return this._ime };
    get plata() { return this._plata };
}