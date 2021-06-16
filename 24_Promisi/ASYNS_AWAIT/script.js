// fetch vraca promise
// upada u catch granu samo ako je doslo do network error-a

// Sled od 4 koraka:
// 1. Fetch json file-a
// 2. return response.json()
// 3. uzeti podatke iz response.json
// 4. catch error

fetch ("../JSON/todos.json").then(response => { // 'response' je objekat sa velikim br. propertija i f-ja... jedan od njih je response.json
    console.log("resolved", response); 
    return response.json(); // 'response.json' je promise... dalje mozemo da lancamo promise... radimo then and catch
}).then(data => {
    console.log(data);
}).catch(err =>{
    console.log("rejected", err);
});

// ASYNC & AWAIT
// asinhrona f-ja se prosledjuje kao parametar i ima zagrade
// definise se recju 'async', kao rezultat vraca promise
let getTodos = async() => {
    let response = await fetch("../JSON/todos.json"); // Fetch vraca response pa nakon toga koristimo then and catch
    // Await = ( zaustavi izvrsavanje koda u ovoj niti ) cekaj dok se ne izvrsi komanda iza komande await
    // Await radi iskljucivo u asinhronoj f-ji
    //console.log(response);

    // kada dobijemo response mozemo da vrsimo ispitivanje statusa
    if ( response.status != 200 ){
        throw new Error("Ne mogu da dohvatim podatke");
    } 
    else {
    let data = await response.json();
    console.log(data);
    // response.json()  -- vraca promise
        // ovde bi smo koristili data = unutar ove else grane
    }

    // ako nam treba novi...
    response = await fetch("../JSON/fruits.json");
    data = await response.json();
    //
    return data; // vraca promise. sto znaci da moram da radim then and catch
}
getTodos().then( data => {
    console.log('resolved', data);
}).catch( err =>{
    console.log('rejected' , err);
});

// kada f-ja ima samo jedan red, ne mora da ima zagrade, ali ni tacka-zarez
/*
getTodos()
    .then( data => console.log('resolved', data))
    .catch( err => console.log('rejected' , err));
*/