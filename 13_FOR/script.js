let i;
for ( let i = 1; i <= 5; i++ ){
    console.log(`Na redu je broj ${i}`);
}
// SCOPE - OBLAST VAZENJA
// let - oblast vazenja unutar bloka ( unutar viticastih zagrada ) u kome je deklarisana
// var - oblast vazenja unutar funkcije


// 3. Ispisati parne brojeve od 1 do 20
// nacin 1
for ( i=1; i <= 20; i++ ){
    if ( i % 2 == 0 ){
        console.log(i);
    }
 }

 // nacin 2
 for ( i = 2; i <= 20; i += 2 ){
     console.log(i);
 }

 // 4. Ispisati dvostruku vrednost brojeva od 5 do 15
 for ( i = 5; i <= 15; i++ ){
     console.log(i*2);
 }

 // 5. Odrediti sumu brojeva od 1 do n
 let n = 5;
 let suma = 0;
 for ( i = 1; i <= n; i++ ){
     suma += i;
 }
 console.log(suma);

 // 6. Odrediti sumu brojeva od n do m
 n = 3;
 let m = 6;
 suma = 0;
 for ( i = n; i <= m; i++ ){
    suma += i;
 }
 console.log(suma);

 // 7. Odrediti proizvod brojeva od n do m
 n = 2;
 m = 5;
 let proizvod = 1;
 for ( i = n; i <= m; i++ ){
     proizvod *= i;
 }
 console.log(proizvod);

 // 8. Odrediti sumu kvadrata brojeva od n do m
 n = 3;
 m = 7;
 suma = 0;
 for ( i = n; i <= m; i++ ){
    suma += i**2;
 }
 console.log(suma);

 /* 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
*/
for ( i = 1; i <= 4; i++ ){
    document.body.innerHTML += `<img src="pic/${i}.jpg"> `
}

// ili ovako
n = 8;
for (i = 1; i <= n; i++){
    if( i % 3 == 1 ){
        document.body.innerHTML += `<img src="pic/1.jpg"> `
    }
    else if ( i % 3 == 2 ){
        document.body.innerHTML += `<img src="pic/2.jpg"> `
    }
    else {
        document.body.innerHTML += `<img src="pic/3.jpg"> `
    }
}

// ili
for (i = 0; i < n ; i++){
    let k = i % 3; // k = 0, 1, 2, 0 , 1, 2...
    document.body.innerHTML += `<img src="pic/${k + 1}.jpg"> `
}

// 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
proizvod = 1;
for ( i = 22; i >= 20 && i <= 100; i += 11 ){
    proizvod *= i;
}
console.log(proizvod); // ili i++ i u IF (i % 11 == 0 )

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150
let brojac = 0;
for ( i = 13; i <= 150; i += 13 ){
    brojac ++;
}
console.log(brojac);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.
n = 12;
m = 15;
suma = 0;
brojac = 0; 
for ( i = n; i<=m; i++ ){
    suma += i;
    brojac += 1;
}
console.log(suma / brojac);

// ili
n = 2;
m = 5; // Broj brojeva izmenju n i m je m-n+1
let arsr = 0;
for(i = n; i <= m; i++ ){
    arsr += i;
}
arsr /= ( m - n + 1 );
console.log(arsr);

// 13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -8;
m = 8;
let negBrojac = 0;
let pozBrojac = 0;
for ( i = n; i <=m; i++ ){
    if ( i < 0 ){
        negBrojac += 1;
    }
    else if ( i > 0 ){
        pozBrojac += 1;
    }
}
console.log(`U rasponu od ${n} do ${m} imamo ${negBrojac} negativnih, i ${pozBrojac} pozitivnih brojeva.`);

// 14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
// zasebno prebrojavanje
n = 5;
m = 50;
brojac1 = 0;
brojac2 = 0;
for ( i = n; i <= m; i++ ){
    if( i % 3 == 0 ){
        brojac1 += 1;
    }
    if( i % 5 == 0 ){
        brojac2 += 1;
    }
}
console.log( `Od broja ${n} do broja ${m} ima ${brojac1} brojeva deljivih sa 3, i ${brojac2} brojeva deljivih sa 5.` );

// zajedno ... 'ili'
brojac = 0;
for ( i = n; i <= m; i++ ){
    if( i % 3 == 0 || i % 5 == 0 ){
        brojac += 1;
    }
}
console.log( `Od broja ${n} do broja ${m} ima ${brojac} brojeva deljivih sa 3 ili sa 5.` );

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n = 1;
m = 34;
brojac = 0;
suma = 0;
for ( i = n; i<=m; i++ ){
    if ( i % 10 == 4 || i % 10 == -4 ){
        brojac ++;
        suma += i;
    }
}
console.log(`U rasponu od ${n} do ${m} postoji ${brojac} brojeva cija je poslednja cifra 4.`);
console.log(`Njihov zbig je ${suma}.`);

// ili ako radimo samo sa pozitivnim brojevima
n = 1;
m = 34;
brojac = 0;
suma = 0;
for ( i = 4; i<=m; i += 10 ){
    if ( i >= n ){
        brojac ++;
        suma += i;
    }
}
console.log(`U rasponu od ${n} do ${m} postoji ${brojac} brojeva cija je poslednja cifra 4.`);
console.log(`Njihov zbig je ${suma}.`);

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 5;
m = 9;
a = 3;
suma = 0;
for ( i = n; i <= m; i++ ){
    if ( i % a != 0 ){
        suma += i;
    }
}
console.log(`Zbir brojeva od ${n} do ${m} koji nisu deljivi sa ${a} je ${suma}`);

// 17. Odrediti proizvod brojeva od n do m koji su deljivi brojem a
n = 3;
m = 8;
a = 2;
proizvod = 1;
for ( i = n; i <= m; i++ ){
    if ( i % a == 0 ){
        proizvod *= i;
    }
}
console.log(`Proizvod brojeva koji nisu deljivi sa ${a} je ${proizvod}.`);

/* 18. Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
*/
/*
<table>
    <tr>
        <td> Tekst</td>
        <td> Tekst</td>
    </tr>
    <tr>
        <td> Tekst</td>
        <td> Tekst</td>
    </tr>
    ...
</table>
*/
// NACIN 1
let redovi = 6;
let tabela = `<table>`;
for( i = 1; i <= redovi; i++){
    if( i % 2 == 0 ){
        tabela += 
        `
        <tr class="obojen">
            <td> Tekst</td>
            <td> Tekst</td>
        </tr> 
        `;
    }
    else {
        tabela += 
    `
    <tr>
        <td> Tekst</td>
        <td> Tekst</td>
    </tr> 
    `;
    }
    
}
tabela += `</table>`;
document.body.innerHTML += tabela;

// lakse, posto se deo html koda ponavlja...
redovi = 6;
tabela = `<table>`;
for( i = 1; i <= redovi; i++){
    if( i % 2 == 0 ){
        tabela += `<tr class="obojen">`;
    }
    else {
        tabela += `<tr>`;
    }
    tabela +=
    `
    <td> Tekst</td>
        <td> Tekst</td>
    </tr> 
    `;
}
tabela += `</table>`;
document.body.innerHTML += tabela;

////////////////////////

let element = document.getElementById("naslov");
element.innerHTML += "*****"; // += dodaje, samo = menja vrednost
// za dodavanje pre onog sto je u elementu 
// element.innerHTML = "*****" + element.innerHTML;

// NACIN 2

let htmlTabela = document.getElementById("mojaTabela");

for(i=1; i <= redovi; i++){
    if(i % 2 == 0){
        htmlTabela.innerHTML += 
        `
            <tr class="obojen">
                <td>Text</td>
                <td>Text</td>
            </tr>
        `;
    }
    else {
        htmlTabela.innerHTML +=
        `
        <tr class="obojen2">
            <td>Text</td>
            <td>Text</td>
        </tr>
    `;
    }
}

/* Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
*/
let brLI = 10;
let lista = `<ul>`;
for (i = 1; i <= brLI; i++){
    lista += `<li> Element ${i}`;
    if(i % 3 == 2){
        i++;
        lista +=
        `
        <ul>
            <li class="purple">Element ${i} </li>
        </ul>
        `
    } 
    lista += `</li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista; // nemoj da zaboravis ovaj red

/*
Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.
*/
let brSpan = 64;
for ( i = 1; i <= brSpan ; i++ ){
    document.body.innerHTML += `<span>${i}</span>`;
    if ( i % 8 == 0 ){
        document.body.innerHTML += `<br>`;
    }
}
document.body.innerHTML += span;

// dalje je css