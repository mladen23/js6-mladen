/* 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
*/

let btnBrojac = document.querySelector ('#brojac');
let br = 1;
btnBrojac.addEventListener ('click' , () => {
    console.log (br);
    br++;
});

// 2. Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let btnBrojac1 = document.getElementById ('brojac1');
let pIspisBrojaca1 = document.getElementById ('ispisBrojaca1');
let br1 = 0;

pIspisBrojaca1.innerHTML = br1; // ako zelim da imam pocetnu vrednost prilikom ucitavanja stranice

btnBrojac1.addEventListener ( 'click', () => {
    br1++;
    // pIspisBrojaca1.innerHTML += `${br1}`; - nadovezuje brojeve
    pIspisBrojaca1.innerHTML = br1; // ovako ispisuje novu vrednost preko stare
});

/* 3. Napraviti dugme + i dugme -. 
Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
*/
let btnPlus = document.getElementById ('plus');
let btnMinus = document.getElementById ('minus');
let brojac = 0;
let ispisPlusMinus = document.getElementById ('ispisPlusMinus');
ispisPlusMinus.innerHTML = brojac;

// btnPlus.addEventListener ( 'click' , () =>{
//     brojac ++;
//     ispisPlusMinus.innerHTML = brojac;
// });
// btnMinus.addEventListener ( 'click', () =>{
//     brojac--;
//     ispisPlusMinus.innerHTML = brojac;
// });

// - zakomentarisamo da ne smeta sledecem zadatku


// 4. Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

btnPlus.addEventListener ( 'click' , () =>{
    brojac ++;
    ispisPlusMinus.innerHTML = brojac;
});
btnMinus.addEventListener ( 'click', () =>{
    if ( brojac == 0 ){
        brojac = 0;
    }
    else {
        brojac--;
    }
    ispisPlusMinus.innerHTML = brojac;
});

/* 5. Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
*/

let inputUpis = document.getElementById('inputUpis');
let btnInput = document.getElementById ('zdravoInput');
let pInput = document.getElementById ('ispisInput');

btnInput.addEventListener ( 'click' , () => {
    let ime = inputUpis.value;
    if ( ime.length == 0 ){
        pInput.innerHTML = " ";
    }
    else {
    pInput.innerHTML = `Zdravo` + ` ` + `${ime}`;
    }
});

// 5. Zadatak, DRUGI nacin ( ova polja su u okviru form-e )

let inputPrezime = document.getElementById ('prezime');
let btnPosaljiPrezime = document.getElementById ('posaljiPrezime');
let pPrikaziPrezime = document.getElementById ('prikaziPrezime');

btnPosaljiPrezime.addEventListener ( 'click', (e) =>{  // Event parametar... moze i bez zagrada posto je jedan parametar
    e.preventDefault(); // sprecava formu da refreshule stranicu
    pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
});

// 6. Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.

btnInput.addEventListener ('dblclick' , () =>{
    alert ('Why double click man?!');
});

// 7. Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.

let inpKvadriraj = document.getElementById ('iKvadriraj');
let btnKvadriraj = document.getElementById ('bKvadriraj');
let rez = document.getElementById ('pRezultat');

btnKvadriraj.addEventListener('click', () =>{
    if ( inpKvadriraj.value == 0 ){
        alert('Unesite vrednost / broj');
    }
    else {
    let br = inpKvadriraj.value ** 2;
    rez.innerHTML += `Rezultat kvadriranja broja ${inpKvadriraj.value} je: ${br}. <br>`;
    }
    inpKvadriraj.value = "";
});

let inpPrepolovi = document.getElementById ('iPrepolovi');
let btnPrepolovi = document.getElementById ('bPrepolovi');

btnPrepolovi.addEventListener ('click', ()=> {
    if ( inpPrepolovi.value == 0 ){
        alert('Unesite vrednost / broj');
    }
    else {
    let br = inpPrepolovi.value / 2;
    rez.innerHTML += `Polovina vrednosti broja ${inpPrepolovi.value} je broj: ${br} <br>`;
    }
    inpPrepolovi.value = "";
});

let inpPovrsina = document.getElementById ('iPovrsina');
let btnPovrsina = document.getElementById ('bPovrsina');

btnPovrsina.addEventListener ('click', () =>{
    if ( inpPovrsina.value == 0 ){
        alert('Unesite vrednost / broj');
    }
    else {
    let br = inpPovrsina.value ** 2 * Math.PI; // ugradjena P f-ja
    rez.innerHTML += `Povrsina kruga poluprecnika ${inpPovrsina.value} je: ${br}.<br>`;
    }
    inpPovrsina.value = "";
});

let btnClear = document.querySelector ('#obrisi');
btnClear.addEventListener('click', ()=>{
    rez.innerHTML = " ";
});

// Za reset, recimo forme, damo formi id > dohvatimo > mojaForma.reset() = resetuje sva polja forme === linija 165

// PRIMER

let forma = document.getElementById ('forma');
let inputJelo = document.getElementById ('jelo');
let inputPice = document.getElementById ('pice');
let pIspis = document.getElementById ('ispis');

forma.addEventListener ('submit', e=>{ // vezujemo event za formu, ne za dugme - sada forma "slusa" kada je forma submitovana preko dugmeta ( klikom / enterom )
    e.preventDefault();
    pIspis.innerHTML = 
    `<ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno pice: ${inputPice.value}</li>
    </ul>`;
    forma.reset();
});