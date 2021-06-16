let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [ 24,28,35,24,34 ],
     //[10, 15, 17, 21, 18, 13, 11],
    // 1. Metoda: Odredjuje prosecnu T koja je izmerena tog dana
    prosecna: function(){
        let suma = 0;
        this.temperature.forEach ( temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    },
    // 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecna: function () {
        let avg = this.prosecna();
        let br = 0;
        this.temperature.forEach ( element => {
            if ( element > avg ) {
                br ++;
            }
        });
        return br;
    },
    // 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna: function () {
        let max = this.temperature[0];
        let brMax = 0;
        this.temperature.forEach ( element => {
            if ( element > max ){
                max = element;
            }
        });
        this.temperature.forEach ( element => {
            if ( max == element ){
                brMax++;
            }
        });
        return brMax;
    },
    // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    brMerenja: function ( a, b ) {
        let brMerenja = 0;
        this.temperature.forEach ( element =>{
            if ( element > a && element < b ){
                brMerenja++;
            }
            // ili pisemo else if granu, ili trebacimo vrednosti a i b kroz tmp ( temporary ) promenljive - da osiguramo da je a < b
            else if ( element > b && element < a ) {
                brMerenja++;
            }
        });
        return brMerenja;
    },
    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    iznadProseka: function () {
        brIznad = this.natprosecna();
        if ( brIznad > this.temperature.length / 2 ){
            return true;
        }
        else {
            return false;
        }
    },
    // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function () {
        let tf = true;
        for ( let i = 0; i < this.temperature.length; i++ ){
            if ( this.temperature[i] > 0 ){
                tf = false;
                break;
            }
        }
        return tf;
        // ili
        /* 
        for ( let i = 0; i < this.temperature.length; i++ ){
            if ( this.temperature[i] > 0 ){
                return false; -- nema potrebe za break, zaustavlja se na return, ne izvrsava dalje
            }
        }
        return true;
*/
    },
    // 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropski: function () {
        let trop = true;
        for ( let i = 0; i < this.temperature.length; i++ ){
            if ( this.temperature[i] < 24 ){
                trop = false;
                break;
            }
        }
        return trop;
    },
    // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljan: function () {
        let nepovoljan = false;
        for ( let i = 0; i < this.temperature.length - 1; i++ ){ // -1 zbog poslednje iteracije, da ne bismo izasli iz niza sa 'i+1'
            if ( this.temperature[i] - this.temperature[i+1] > 8 ){
                nepovoljan = true;
                break;
            }
            else if ( this.temperature[i] - this.temperature[i+1] < -8 ){ // moze Math.abs i sve stane u jedan red
                nepovoljan = true;
                break;
            }
        }
        return nepovoljan;
    },
    // 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
};

    



console.log (dan.prosecna());
console.log (dan.natprosecna());
console.log (dan.maksimalna());
console.log (dan.brMerenja(21, 15));
console.log (dan.iznadProseka());
console.log (dan.leden());
console.log (dan.tropski());
console.log (dan.nepovoljan());