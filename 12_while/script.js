// Ispis brojeva od jedan do pet

let n = 1;
while ( n <= 5 ) {
    console.log(n);
    n++;
}
console.log(`Vrednost promenljive n nakon while petlje je ${n}`);

/* Ispisati brojeve od 1 do 20:
1- Svaki u istom redu
Svaki u novom redu
*/

// 1.
let x = 1;
while ( x <=20 ){
    console.log(x); 
    x++;
}
// 2.
let res = ""; // formiranje praznog stringa
n = 1;
while ( n <= 20 ){
    res = res + n + " "; // ili res += (n + " ");
    n++;
}
console.log(res); // ovo ide van petljeda ne bi ispisivalo res za svaku iteraciju

// Ispisati brojeve od 20 do 1.

let y = 20;
while ( y >= 1 ){
    console.log(y);
    y--;
}
//ili
y = 1;
while ( y <= 20 ){
    console.log(21 - y);
    y++;
}

// Ispisati parne brojeve od 1 do 20.

let z = 1;
while ( z <= 10 ) {
    console.log( z*2 );
    z++;
}
//ili
z = 1;
while( z <= 20 ){
    if ( z % 2 == 0 ){
        console.log(z);
    }
    z++;
}
// ili
z = 2;
while (z <= 20) {
    console.log(z);
    z+=2; // z = z + 2;
}

// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje.

document.body.innerHTML += `<h1>While petlja.</h1>`;
let o = 1;
let v = 5;
while ( o <= v ){
    /*
    0 % 3 = 0
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    ... */
    if ( o % 3 == 1 ){
        document.body.innerHTML += `<p style="color: red;">Ovo je ${o} paragraf.</p>`;
    }
    else if ( o % 3 == 2 ){
        document.body.innerHTML += `<p style="color: green;">Ovo je ${o} paragraf.</p>`;
    }
    else {
        document.body.innerHTML += `<p style="color: blue;">Ovo je ${o} paragraf.</p>`;
    }
    
    o += 1;
}

// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira.

o = 1;
v = 6;
while ( o <= v ){

    /*
    1 % 2 = 1;
    2 % 2 = 2;
    3 % 2 = 1;
    4 % 2 = 0;
    ...
    */
   if ( o % 2 == 1 ){
    document.body.innerHTML += `<img src="slika.jpg" class="okvir1">`;
   }
   else {
    document.body.innerHTML += `<img src="slika.jpg" class="okvir2">`;
   }

    
    o+= 1;
}

// Ciklicno prikazivanje slike
let i = 1;
n = 7;
while ( i <= n ){
     /*
    0 % 3 = 0
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    ... */
    let ost = i % 3;
    document.body.innerHTML += `<img src="${ost}.jpg">`;
    i += 1;
}

// Odrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0;
while ( i <= 100 ){
    suma += i;
    i += 1;
}
console.log(suma);

// n * ( n + 1 ) / 2
// formula za sabiranje brojeva od 1 do n

/*
Odrediti proizvod brojeva od 1 do 5
*/
i = 1;
let proizvod = 1;
while ( i <= 5){
    proizvod *= i;
    i+=1;
}
console.log(proizvod);

// Odrediti sumu brojeva od 1 do n
i = 1;
n = 23;
suma = 0;
while( i <= n ){
    suma += i;
    i += 1;
}
console.log(suma);

// Odrediti sumu brojeva od n do m
suma = 0;
n = 3;
m = 21;
while ( n <= m ){
    suma += n;
    n += 1;
}
console.log(suma);

// Odrediti proizvod brojeva od n do m
n = 3;
m = 6;
proizvod = 1;
while ( n <= m) {
    proizvod *= n;
    n += 1;    
}
console.log(proizvod);

// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 4;
m = 13;
suma1 = 0;
suma2 = 0;
while ( n <= m ) {
    if ( n % 2 == 0 ){
        suma1 += n**2;
    }
    else {
        suma2 += n**3;
    }
    n +=1;
}
console.log(suma1);
console.log(suma2);

// Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 11;
i = 1;
brojac = 0;
while ( i <= k ){
    if ( k % i == 0 ){
        brojac += 1;
        console.log(brojac);
    }
    i += 1;
}

// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 15;
i = 2;
while ( i <= n / 2 ){
    if( n % i == 0 ){
        console.log(`Broj ${n} nije prost.`);
        break; // Prekida dalje izvrsenje petlje u kojoj se nasao.
    }
    i++;
}
if ( i > n / 2 ){ // ako nismo ulsi u IF unurat WHILE-a...
    // ako je broj prost `i` prolazi kroz sve iteracije, i na kraju preuzima vrednost i++ ... sto je vise od n / 2 u while uslovu... ako dodjemo dotle - to je nas uslov
    console.log(`Broj ${n} je prost broj.`);
}

// ili
n = 24;
i = 2;
let prime = true; // indicator ( flag ) da li je br. n prost
while ( prime && i <= n / 2 ){ // "prime == true" ... moze samo "prime"
    if ( n / i == 0 ){
        prime = false;
    }
    i++;
}
if (prime){ // ako prime nije preuzelo "false" vrednost, to je to
    console.log(`Broj je prost.`);
}
else {
    console.log(`Broj nije prost.`);
}