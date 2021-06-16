/* Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
Naziv knige,
Autora knjige,
Putanja do sličice,
Polje – indikator da li je knjiga pročitana ili ne (true ili false).
*/


let knjiga1 = {
    naziv: "Gozba",
    autor: "Platon",
    slika: "img/gozba.jpg",
    polje: true
};
let knjiga2 = {
    naziv: "Tako je govorio Zaratustra",
    autor: "Nice",
    slika: "img/zaratustra.jpg",
    polje: true
};
let knjiga3 = {
    naziv: "Hobit",
    autor: "Tolkin",
    slika: "img/hobit.jpg",
    polje: false
};
let knjiga4 = {
    naziv: "Serlok Holms",
    autor: "Artur Konan Dojl",
    slika: "img/serlok.jpg",
    polje: true
};


let knjige = [knjiga1, knjiga2, knjiga3, knjiga4]


/*
Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.

U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
*/

let body = document.getElementsByTagName ('body');
let tabela = document.createElement ('table');
document.body.appendChild (tabela);
knjige.forEach ( ( knjiga, i ) =>{
    let red = document.createElement ('tr');

    let celija1 = document.createElement ('td');
    let slika = document.createElement ('img');
    slika.setAttribute ('src', knjiga.slika);
    celija1.appendChild(slika);
    red.appendChild (celija1);

    let celija2 = document.createElement ('td');
    let p = document.createElement ('p');
    p.textContent = `${knjiga.naziv}` + " - " + `${knjiga.autor}`;
    celija2.appendChild (p);
    red.appendChild (celija2);
    tabela.appendChild (red);

/*
Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.
Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.
*/

    if ( knjiga.polje ) {
        p.style.color = "blue";
    }
    else {
        p.style.color = "gray";
    }
    if ( i % 2 == 0 ){
        red.style.backgroundColor = "lightyellow";
    }
    else {
        red.style.backgroundColor = "olive";
    }
});

// nije deo zadatka, ali izgleda malo lepse

let ivice = document.querySelectorAll ('table, td');
ivice.forEach ( elem => {
    elem.style.border = "2px solid black";
    elem.style.padding = "5px";
});