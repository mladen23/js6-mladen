/*
Dohvatiti prvi paragraf na stranici.
Dohvatiti prvi div tag sa klasom „error“.
Dohvatiti poslednji red u tabeli.
Dohvatiti sve linkove na stranici.
Dohvatiti sve slike na stranici.

Sve elemente ispisati u konzoli.

*/

let prviParagraf = document.querySelector('p:first-of-type');
console.log (prviParagraf);

let prviDivErr = document.querySelector ('div.error');
console.log (prviDivErr);

let poslednjiRed = document.querySelector ('table tr:last-of-type');
console.log(poslednjiRed);

let linkovi = document.querySelectorAll ('a');
let linkovi1 = document.links;
console.log (linkovi);
console.log (linkovi1);

let slike = document.querySelectorAll ('img');
let slike1 = document.images;
console.log(slike);
console.log(slike1);

/*
Selektovati sve paragrafe i svakom od njih dodati text "VAZNO!!!"
Svim divovima sa klason error dodati po jedan naslov najvece velicine sa textom "Greska!"
Neka je n broj paragrafa u dokumentu. U svakom i-tom paragrafu dodati broj i na kvadrat, za svako i = 1,2...n
Svim slikama dodati alternativni text
Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
Svim parnim paragrafina postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju

*/

// let n = document.getElementsByTagName('p');
// let paragrafi = Array.from(n);
let paragrafi = document.querySelectorAll ('p');

paragrafi.forEach ( paragraf => {
    paragraf.innerHTML += ' VAZNO!!!';
});

let divErr = document.querySelectorAll ('div.error');
divErr.forEach ( div => {
    div.innerHTML = '<h1>Greska!</h1>' + div.innerHTML;
});

paragrafi = document.querySelectorAll ('p'); // mora da se ponovi dodela vrednosti jer sam linijom 51 promenio Nod stablo :)
for ( let i = 0; i < paragrafi.length; i++){
    paragrafi[i].innerHTML += (i+1)**2;
}

paragrafi.forEach ( (paragraf, i) => {
    paragraf.innerHTML += (i+1) **2;
});

slike.forEach ( slika => {
    slika.setAttribute ('alt', 'drvo');
});

paragrafi.forEach ( paragraf=> {
    paragraf.style.color = 'purple';
});

paragrafi.forEach ((paragraf, i )=> {
    if ( i % 2 == 0 ){
        paragraf.style.backgroundColor= 'lightgreen';
    }
    else {
        paragraf.style.backgroundColor= 'red';
    }
});

/*
Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
*/

linkovi = document.querySelectorAll ('a');

linkovi.forEach ( link => {
    link.setAttribute ( 'style', 'padding: 5px; font-size: 28px; text-decoration: none;' );
});

slike.forEach ( slika => {
    if ( slika.src.includes('.jpg') || slika.src.includes('.JPG') ){
        slika.style.border = '2px solid red';
    };
});

// nacin 2
let slikeJpg = document.querySelectorAll ("img[src*='.jpg']"); // *= znaci da sadrzi
slikeJpg.forEach ( slika =>{
    slika.style.border = "2px solid red";
});

linkovi.forEach ( link => {
    if ( link.target == '_blank' ){
        link.setAttribute ('target', 'top');
    }
    else {
        link.setAttribute ('target' , '_blank');
    }
});
/*
Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

*/

let imena = [ 'Ivan', 'Marko', 'Stefan' ];


/*
Dat je sledeći stil u css-u:
.error {
   color: red !important;
   border: solid 1px red;
}
.success {
   color: green !important;
   border: solid 1px green;
}

Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
 if(p.textContent.includes(’success’))
Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

*/
paragrafi.forEach ( (paragraf, i) => {
    if ( i % 2 == 0 ){
        paragraf.classList.add ('error');
    }
    else {
        paragraf.classList.add ('success');
    }
});

paragrafi.forEach ( (paragraf, i) => {
    if ( i % 3 == 0 ){
        paragraf.style.fontSize = '15px';
    }
    else if ( i % 3 == 0 ){
        paragraf.style.fontSize = '20px';
    }
    else {
        paragraf.style.fontSize = '25px';
    }
});

