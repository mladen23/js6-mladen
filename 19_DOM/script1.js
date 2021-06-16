// Dohvatiti prvi paragraf na stranici.

let a1 = document.querySelector("p:first-of-type");
console.log (a1);

// Dohvatiti prvi div tag sa klasom „error“.

let a2 = document.querySelector(".error");
console.log (a2);

// Dohvatiti poslednji red u tabeli.

let a3 = document.querySelector ('table tr:last-child');
a3 = document.querySelector ('table tr:last-of-type');
console.log (a3);

// Selektovati sve paragrafe i svakom od njih dodati text "VAZNO!!!"

let paragrafi = document.getElementsByTagName("p");
for ( let i = 0; i < paragrafi.length; i++ ){
    paragrafi[i].innerHTML += 'VAZNO!!!';
}

// Svim divovima sa klason error dodati po jedan naslov najvece velicine sa textom "Greska!"

let divError = document.querySelectorAll ('div.error');
divError.forEach ( div => {
    div.innerHTML += '<h1>Greska!</h1>'
} );

// Neka je n broj paragrafa u dokumentu. U svakom i-tom paragrafu dodati broj i na kvadrat, za svako i = 1,2...n

for ( i = 0; i < paragrafi.length; i++ ){
    paragrafi[i].innerHTML += (i+1) ** 2;
}
// ili preko forEach
let paragrafi1 = Array.from(paragrafi);
paragrafi1.forEach (( paragraf, i )=>{
    paragraf.innerHTML += (i+1)**2;
});
// svim slikama dodati alternativni text

let slike = document.querySelectorAll ('img');
slike.forEach ( slika => {
    slika.setAttribute ('alt', 'drvo');
});

// svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom

for ( let i = 0; i < paragrafi.length; i++ ){
    paragrafi[i].style.color = 'purple';
};

// Svim parnim paragrafina postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju

for ( let i = 0; i < paragrafi.length; i++ ){
    if ( i % 2 == 0 ){
        paragrafi[i].style.backgroundColor = 'green';
    }
    else {
        paragrafi[i].style.backgroundColor = 'red';
    }
};

// Svim linkovima postaviti padding 5px, font size 28px, text decoration none

let linkovi = document.querySelectorAll ('a');

linkovi.forEach ( link => {
    link.setAttribute ( 'style', 'padding: 5px; font-size: 28px; text-decoration: none;' );
});
for ( let i = 0; i < linkovi.length; i++){
    if ( i % 2 == 0 ){
        linkovi[i].style.color = 'purple'; // ako ovde postavimo setAttribute ponisticemo ( prelepicemo ) prethodne komande... npr. liniju 70... --- .style. radi kao +=
        linkovi[i].style.backgroundColor = 'green';
    }
    else {
        linkovi[i].style.color = 'white';
        linkovi[i].style.backgroundColor = 'blue';
    }
}

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju.

slike = document.querySelectorAll ('img');
// prvi nacin
slike.forEach ( slika => {
    if ( slika.src.includes('.jpg') || slika.src.includes('.JPG') ){
        slika.style.border = '2px solid red';
    };
});

// drugi nacin

let slikeJpg = document.querySelectorAll ("img[src*='.jpg']"); // *= znaci da sadrzi
slikeJpg.forEach ( slika =>{
    slika.style.border = "2px solid red";
});

// Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank.

linkovi.forEach ( link=> {
    if ( link.target == '_blank' ){
        link.setAttribute ( 'target', 'top' );
        // ili link.target = "_top";
    }
    else {
        link.setAttribute ( 'target', 'blank' );
    }
});

/* Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
*/

let imena = [ 'Veljko', 'Stanko', 'Marko', 'Stefan', 'Ivan' ];

imena.forEach ( ime => {
    if ( ime[0] == "S" ){
        document.body.innerHTML += `<a href="http://www.google.com" target="_blank">${ime}</a> <br>`;
    }
    else {
        document.body.innerHTML += `<a href="http://www.google.com">${ime}</a><br>`;
    }
});

let result = "<ul>";
imena.forEach (( ime,i ) => {
    if ( i % 2 == 0 ){
        result += `<li style="color: blue">${ime}</li>`;
    }
    else {
        result += `<li style="color: red">${ime}</li>`;
    }
});
result += '</ul>';
document.body.innerHTML += result;


