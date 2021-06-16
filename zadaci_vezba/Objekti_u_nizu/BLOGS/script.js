let blog = {
    title : "Funkcije",
    likes: 21,
    dislikes: 1
}

let blogs = [
    {title : "Nizovi", likes: 16, dislikes: 5},
    {title : "grananje", likes: 14, dislikes: 0}
];

console.log (blogs);

//////////////////

let blog1 = {
    title: "Musaka od tikvica",
    likes: 105,
    dislikes: 31
};

let blog2 = {
    title: "Lazanja",
    likes: 66,
    dislikes: 13
};

let blog3 = {
    title: "Zapecena boranija!",
    likes: 60,
    dislikes: 32
};

// Ispis objekat iz niza objekata
let blogsArr = [blog1, blog2, blog3];
blogsArr.forEach( element => {
    console.log (element);
});

// Ispis naslova iz niza objekata
console.log (blog1.title);
blogsArr.forEach ( elem => {
    console.log (elem.title);
} );

// Ispis naslova iz niza blogova for petljom

console.log (blogsArr[0]); // vraca objekat sa indexom 0 u nizu
console.log (blogsArr[0].title); // vraca naslov ovog Arr-a

for ( let i = 0; i < blogsArr.length; i++ ){
    console.log(blogsArr[i].title);
}

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova.

let sumaLajkova = nizObj => {
    let ukupnoLajkova = 0;

    nizObj.forEach( elem => {
        ukupnoLajkova += elem.likes;
    });

    return ukupnoLajkova;
}
console.log (sumaLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLajkova = nizObj => {
    let sum = sumaLajkova(nizObj);
    let br = nizObj.length;
    return sum / br;
}
console.log (prosekLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let nasloviSaViseLajkova = niz => {
    for ( let i = 0; i < niz.length; i++ ){
        if ( niz[i].likes > niz[i].dislikes ){
            console.log (blogsArr[i].title);
        }
    }
}
nasloviSaViseLajkova (blogsArr);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let najmanjeDuplo = niz => {
    blogsArr.forEach ( elem => {
        if ( elem.likes > elem.dislikes * 2 ){
            console.log ( elem.title );
        }
    });
}
najmanjeDuplo (blogsArr);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let rec = "Hello!";
let poslednjiKarakter = rec[rec.length - 1];
console.log (poslednjiKarakter);
// moze i ovako
let poslednjiKarakter1 = rec.slice(-1); // ugradjena f-ja slice.. sa '-' krece sa zadnje strane... sa pozitivnim brojevima krece od pocetka (odseca deo stringa)

// ili ugradjena f-ja charAt
let poslednjiKarakter2 = rec.charAt(rec.length - 1); // vraca karakter na odredjenom indexu

let poslednjiKarakter3 = rec.endsWith("!"); // vraca true / false

let = uzvicnik = niz => {
    niz.forEach ( elem => {
        let naslov = elem.title;
        if (naslov[naslov.length - 1] == "!") {
            console.log (naslov);
        }
    } )
}
uzvicnik(blogsArr);