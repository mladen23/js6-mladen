/*
Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
U realizaciji ovog zadatka koristiti for petlju.
*/
let i;
let n = 1;
let polje = " ";
for ( i = 1; i <= 64; i++ ){
    if ( i % 2 == 1 && n % 2 == 1 ){
        polje += 
        `
        <span> ${i}</span>
        `;
    }
    else if ( i % 2 == 0 && n % 2 == 1 ) {
        polje +=
        `
        <span class="crniSpan">
        ${i}
        </span>
        `;
        if ( i % 8 == 0 ){
            polje += 
            `
            <br>
            `;
            n++;
        }
    }
    else if ( i % 2 == 1 && n % 2 == 0 ){
        polje += 
        `
        <span class="crniSpan"> ${i}</span>
        `;
    }
    else if ( i % 2 == 0 && n % 2 == 0 ) {
        polje +=
        `
        <span>
        ${i}
        </span>
        `;
        if ( i % 8 == 0 ){
            polje += 
            `
            <br>
            `;
            n++;
        }
    }
}
document.body.innerHTML += polje;