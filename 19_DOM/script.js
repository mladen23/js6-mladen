// u DOM-u svaki HTML element je jedan JS objekat

console.log (document);
console.log (typeof document);

console.log (document.URL); // string
console.log (document.body); // objekat iz DOM stabla
console.log (document.documentElement) // objekat iz DOM stabla

console.log (document.anchors); // HTML collection
console.log (document.links); // HTML collection

let r1 = document.getElementById(`div1`);
console.log (r1);

let r2 = document.getElementsByClassName("container");
console.log (r2); // HTMLCollection

let r3 = document.getElementsByTagName('div');
console.log (r3); // HTMLCollection

let r4 = document.getElementsByName('link');
console.log(r4); // Nodelist

// Prolazak kroz HTMLCollection mora da se vrsi FOR petljom

for (let i =0; i < r2.length; i++){
    console.log (r2[i]);
}

// moze se HTMLCollection convertovati u Array, pa za Array koristiti forEach petlju

let r2array = Array.from(r2);

r2array.forEach (obj => {
    console.log (obj);
});

// Elementima NodeList-e moze se pristupiti i preko for i preko forEach

r4.forEach (obj =>{
    console.log (obj);
});

for (let i = 0; i < r4.length; i++) {
    console.log (r4[i]);
}

let r5 = document.querySelector(".container");
console.log (r5);

let r6 = document.querySelectorAll(".container");
console.log (r6);

r6.forEach ( elem => {
    console.log (elem);
});

let r7 = document.querySelectorAll("a");
console.log (r7);

// document.getElementsByName("link"); ==
let r8 = document.querySelectorAll("[name='link']");
console.log (r8);

// document.getElementById("#div1");
let r9 = document.querySelector('#div1'); // uvek vraca OBJEKAT
console.log (r9);

let r10 = document.querySelectorAll("#div1"); // uvek vraca NodeList-u, cak i kada se ona sastoji od jednog elementa
console.log (r10);

/////////////////////
// menjanje elemenata iz HTML-a
console.log ( r1.id );
console.log (r1.innerHTML);
// r1.innerHTML = "Sadrzaj DIV elementa je text dodat iz JS-a.";
r1.innerHTML += "Dodati sadrzaj u DIV element.";

let prviLink = document.querySelector ("a");
prviLink.href = "http://www.wikipedia.com"; // posle tacke mozemo da dodamo bilo koje svojstvo koje bi stavili u otvoreni tag

prviLink.setAttribute ('target', '_blank'); // ovako, preko metode
prviLink.target = "_blank"; // ili ovako
prviLink.setAttribute ('href', 'http://www.wikipedia.org');
prviLink.innerHTML = 'Wikipedia';

prviLink.style.color = 'red';
prviLink.style.backgroundColor = 'green'; // nema '-' kod slozenih css propertija
prviLink.style.textDecoration = 'none';
prviLink.style.border = '3px solid black';

prviLink.setAttribute ('style', 'color: red; background-color: lightgreen; text-decoration: none; border: 3px solid black;'); // ovo radi kao inline css


// Postaviti crveni border svim linkovima na stranici

r7.forEach ( link => { // ovo je NodList-a pa moze forEach petlja
    link.style.border = "3px solid red";
} );

// ili recimo

let linkovi = document.getElementsByTagName ('a'); // ovo je HTMLCollection - ne moze forEach... moze for petlja
for ( let i = 0; i < linkovi.length; i++ ){
    linkovi[i].style.border = "3px solid green";
}

////////////////////////

//////////////////////

// dohvatanje roditeljskog cvora

linkovi = document.querySelectorAll('a');

linkovi.forEach ( link =>{
    console.log (link.parentNode);
    link.parentNode.style.border = '2px solid red';
});

// Dohvatanje deteta nekog cvora

let prviDiv = document.querySelector ("div.container");
prviDiv.childNodes.forEach ( child => {
    console.log (child);
});

let n = prviDiv.childNodes.lenght;
for ( let i = 0; i < n; i++ ){
    console.log (prviDiv.childNodes[i]);
}

let link1 = prviDiv.childNodes[1];
console.log (link1.previousSibling);
console.log (link1.nextSibling);
console.log (link1.nextSibling.nextSibling);
console.log (link1.nextSibling.nextSibling.style.fontSize = "24px");


// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let paragr = document.querySelectorAll ('p');

paragr.forEach (( p, i ) => {
    if ( i % 2 == 0 ){
        p.classList.add ('error');
    }
    else {
        p.classList.add ('success');
    }
});

/////////////////////////

// Dodavanje elementa

let noviParagraf = document.createElement ('p');
noviParagraf.classList.add ('klasa');
noviParagraf.id = 'aj-di';
noviParagraf.textContent = 'Ovo je text novog paragrafa.';

let noviDiv = document.getElementById ('div2');
noviDiv.appendChild (noviParagraf);