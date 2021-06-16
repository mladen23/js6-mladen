/* Zadatak 1

Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.
*/

function suma ( n, m ) {
    let zbir = 0;
    for ( i = n; i <= m; i++ ){
        zbir += i**3;
    }
    return zbir;
}

console.log ( suma(3, 5));

/* Zadatak 2

Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.
*/

function godine (godRodjenja) {
    let datum = new Date();
    let godina = datum.getFullYear();
    let brGodina = godina - godRodjenja;
    return brGodina;
}

console.log (godine(1995));

/* Zadatak 3

Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.
*/

function deljiv (n, m, k) {
    let brBrojeva = 0;
    for ( i = n; i <=m; i++ ){
        if ( i % k == 0 ){
            brBrojeva ++;
        }
    }
    document.body.innerHTML += `<p>Ukupan broj brojeva izmedju ${n} i ${m} koji su deljivi brojem ${k} je ${brBrojeva}.</p>`;
}

deljiv(3,15,3);