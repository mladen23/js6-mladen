class Film {
    constructor ( n, r , g, o){
        this.naslov = n;
        this.reziser = r;
        this.godina = g;
        this.ocene = o;
    }
    set naslov (x) {
        this._naslov = x;
    }
    set reziser (x){
        this._reziser = x;
    }
    set godina (x){
        if ( x >= 1800 ){
        this._godina = x;
        }
        else {
            this._godina = 1800;
        }
    }
    set ocene (o){
        this._ocene = o
    }

    get naslov (){
        return this._naslov;
    }
    get reziser (){
        return this._reziser;
    }
    get godina (){
        return this._godina;
    }
    get ocene(){
        return this._ocene;
    }

    stampaj() {
        console.log(this.naslov, this.reziser, this.godina);
    }
    // Napraviti metod prosek koji vraća prosečnu ocenu
    prosek(){
        let sum = 0;
        this.ocene.forEach ( o=>{
            sum += o;
        })
        return sum / this.ocene.length;
    }
}

let film1 = new Film ('Star Wars','G.Lucas',1987,[5.1,8,8.2,9.1,9.6,7]);
let film2 = new Film ('War horse','S.Spilberg',2013,[6.2, 7.6, 8.8, 7.9, 10]);
let film3 = new Film ('Godfather', 'F.Kopola',1978,[7.3,9,9.2,8.2,9.6]);

let arrFilm = [film1, film2, film3];

film1.stampaj();
// film1.godina = 1501; // setter postavlja vrednost na 1800, ukoliko je unetavrednost manja od ove vrednosti
film1.stampaj();
console.log(film2.naslov);
film2.stampaj();

console.log(film2.prosek());

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova = ( niz, vek ) => {
    niz.forEach ( film =>{
        // if ( Math.ceil ( film.godina/100 ) == vek )
        if ( film.godina <= vek*100 && film.godina > (vek-1)*100 ){
            film.stampaj();
        }
    });
}
vekFilmova ( arrFilm, 20 );

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = niz => {
    let zbirOcene = 0;
    let brOcene = 0;
    niz.forEach ( film => {
        film.ocene.forEach ( o =>{
            zbirOcene += o;
        });
        brOcene += film.ocene.length;
    });
    return zbirOcene / brOcene;
}

console.log(prosecnaOcena(arrFilm));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let najboljeOcenjeni = niz => {
    let naj = niz[0];
    niz.forEach ( film=> {
        if ( film.prosek() > naj.prosek() ){
            naj = film;
        }
    })
    return naj;
}
najboljeOcenjeni(arrFilm).stampaj(); // console.log bi vratio ceo objekat... stampaj metoda vraca podatke

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz => {
    let naj = najboljeOcenjeni(niz);
    let najnizaOcena = naj.ocene[0];
    naj.ocene.forEach ( o=>{
        if ( o < najnizaOcena ){
            najnizaOcena = o;
        }
    })
    return najnizaOcena;
}
console.log(najmanjaOcenaNajboljeg(arrFilm));

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let minOcena = niz[0].ocene[0];
    niz.forEach ( film =>{
        film.ocene.forEach ( o=>{
            if ( o < minOcena ){
                minOcena = o;
            }
        })
    });
    return minOcena;
}
console.log(najmanjaOcena(arrFilm));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.

let iznadOcene = (ocena, niz) => {
    let filmIznad = [];
    niz.forEach ( film =>{
        if ( film.prosek() > ocena ){
            filmIznad.push(film); // ili (film.naslov)
        }
    });
    return filmIznad;
}

console.log(iznadOcene( 8.1, arrFilm ));

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz => {
    let najblizi = niz[0]; // pretpostavka
    let prosecnaGlobal = prosecnaOcena(niz);
    let najbliziRazlika = Math.abs(najblizi.prosek() - prosecnaGlobal);
    niz.forEach ( film => {
        let razlikaTekuceg = Math.abs(film.prosek() - prosecnaGlobal);
        if ( najbliziRazlika > razlikaTekuceg) {
            najbliziRazlika = razlikaTekuceg;
            najblizi = film;
        }
    });
    return najblizi;
}

console.log(osrednjiFilm(arrFilm));

// provera
console.log(prosecnaOcena(arrFilm));
arrFilm.forEach ( film=>{
    console.log(film.prosek(), film.naslov)
})