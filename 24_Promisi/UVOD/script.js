// 1. Kreiranje XML objekta

let request = new XMLHttpRequest ();

// 2. Otvaranje kreiranog zahteva

request.open ('GET', './JSON/todos.json');

// 3. Saljemo request

request.send();

// 4.

request.addEventListener ('readystatechange', ()=>{
    if (request.readyState == 4 && request.status == 200){
        // Ako je sve ok
    console.log(request.responseText);
    }
    else if ( request.readyState == 4){
        console.log('Reaching data failed.');
    }
});

//////////////////

// PRIMER CALLBACK FUNKCIJA

// F-ja myFunc prima kao parametar drugu f-ju ( callbackFunction )
// myFunc more da poziva f-ju koja joj je prosledjena kao parametar i da joj prosledjuje parametre
let myFunc = callbackFunction => {
    let value1 = 5;
    let value2 = 6;
    callbackFunction(value1, value2);
}
// Kada pozivamo myFunc ona ocekuje da joj prosledimo drugu f-ju... mi joj prosledjujemo realizaciju ( telo funkcije )
myFunc((val1, val2)=>{
    console.log (val1 + val2);
});