/* Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem 3 i neparni su (to su brojevi 3 i 15)
Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3 (3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.
*/

let x = 150;
let i = 1; 
let brojac = 0;
while ( i <= x ){
    if ( x % i == 0 ){
        if ( i % 3 == 0 && i % 2 == 1 ) {
            brojac += 1;
           // console.log(i);
        }
    }
    i+=1;
}
console.log(brojac);

// posto 1 i 2 ne zadovoljavaju parametre zadatka, `i` moze da krene od 3, i da se povecava za 3

x = 150;
i = 3; 
brojac = 0;
while ( i <= x ){
    if ( x % i == 0 ){
        if ( i % 2 == 1 ) {
            brojac += 1;
          //  console.log(i);
        }
    }
    i+=3;
}
console.log(brojac);