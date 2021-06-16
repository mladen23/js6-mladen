/* Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati metod koji vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false. */

/* Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) vrednosti temperature iz datog niza temperatura. 
Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom. */

let dan = {
    datum: `2021/05/19`,
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [ 8, 11, 15, 17, 25, 24, 25, 18, 8 ],

    neuobicajen: function () {
        let mozda = false;
        for ( let i = 0; i < this.temperature.length; i++ ){
            if ( this.kisa && this.temperature[i] < -5 ){
                mozda = true;
                break;
            }
            else if ( this.oblacno && this.temperature[i] > 25 ){
                mozda = true;
                break;
            }
            else if ( ( this.kisa && this.sunce ) && this.oblacno ){
                mozda = true;
                break;
            }
        }
        return mozda;
    },
    lista: function () {
        let lista = 
        `
        <ul>
        `;
        let max = this.temperature[0];
        this.temperature.forEach ( elem => {
            if ( elem > max ){
                max = elem;
            }
        });
        let min = this.temperature[0];
        this.temperature.forEach ( elem => {
            if ( elem < min ){
                min = elem;
            }
        });
        this.temperature.forEach ( elem => {
            if ( elem == max ){
                lista += 
                `
                <li style="color:red">
                ${elem}
                </li>
                `;
            }
            else if ( elem == min ){
                lista += 
                `
                <li style="color:blue">
                ${elem}
                </li>
                `;
            }
            else {
                lista +=
                `
                <li>
                ${elem}
                </li>
                `;
            }
        });
        document.body.innerHTML += lista;
    }

};

// pozivi
// dan.lista();
// console.log ( dan.neuobicajen());