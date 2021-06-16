export class Knjiga {
    constructor (naslov, autor, godIzdanja, brStrana, cena){
        // Pozivamo settere
        this.naslov = naslov;
        this.autor = autor;
        this.godIzdanja = godIzdanja;
        this.brStrana = brStrana;
        this.cena = cena;
    }
    // Setteri
    set naslov(naslov){
        this._naslov = naslov;
    }
    set autor(autor){
        this._autor = autor;
    }
    set godIzdanja(godIzdanja){
        this._godIzdanja = godIzdanja;
    }
    set brStrana(brStrana){
        this._brStrana = brStrana
    }
    set cena(cena){
        this._cena = cena;
    }
    // Getteri
    get naslov(){
        return this._naslov;
    }
    get autor(){
        return this._autor;
    }
    get godIzdanja(){
        return this._godIzdanja;
    }
    get brStrana(){
        return this._brStrana;
    }
    get cena(){
        return this._cena;
    }
    // Metode
    stampaj (){
        console.log(this.naslov, this.autor, this.godIzdanja, this.brStrana, this.cena);
    }
    obimna(){
        if ( this.brStrana > 600 ){
            return true;
        }
        else {
            return false;
        }
    }
    skupa (){
        return this.cena > 8000; // u suprotnom vratice false
    }
    dugackoIme(){
        let brKarakteraImena = this.autor.length;
        return brKarakteraImena > 18; // opet, ako ispuni, vraca true, ako ovo nije tacno - vratice false
    }
}
