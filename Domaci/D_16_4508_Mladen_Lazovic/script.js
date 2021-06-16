// 1. Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users
// 2. Ispisati u konzoli one korisnike čiji website ima domen „.com“

let zahtev1 = new XMLHttpRequest();

zahtev1.addEventListener ('readystatechange', ()=>{
    if ( zahtev1.readyState == 4 && zahtev1.status == 200){
        let data = JSON.parse (zahtev1.responseText);
        data.forEach ( user => {
            if ( user.website.includes('.com') ){
                console.log (user.name); // ili samo 'user' ako se trazi sve o ovim korisnicima
            }
        });
    }
    else if ( zahtev1.readyState == 4 ) {
        console.log ('Nije moguce pristupiti serveru.');
    }
});

zahtev1.open ( 'GET', 'https://jsonplaceholder.typicode.com/users' );
zahtev1.send();

// 3. Ispisati korisnike čije ime sadrži reč „Clementin“.

let zahtev2 = new XMLHttpRequest();

zahtev2.addEventListener ('readystatechange', ()=>{
    if (zahtev2.readyState == 4 && zahtev2.status == 200){
        let data = JSON.parse (zahtev2.responseText);
        data.forEach ( user => {
            if ( user.name.includes('Clementin')){
                console.log ( user.name );
            }
        });
    }
    else if ( zahtev2.readyState == 4 ){
        console.log('Server ne moze da obradi zahtev.');
    }
});

zahtev2.open ( 'GET', 'https://jsonplaceholder.typicode.com/users' );
zahtev2.send();

// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

let zahtev3 = new XMLHttpRequest();

zahtev3.addEventListener ( 'readystatechange', ()=> {
    if ( zahtev3.readyState == 4 && zahtev3.status == 200 ){
        let data = JSON.parse (zahtev3.responseText);
        data.forEach( user =>{
            if ( user.company.name.includes('Group') || user.company.name.includes ('LLC')){
                console.log(user.name);
            }
        });
    }
    else if ( zahtev3.readyState == 4 ){
        console.log('Server ne moze da obradi zahtev.');
    }
});

zahtev3.open ( 'GET', 'https://jsonplaceholder.typicode.com/users' );
zahtev3.send();

// 5. Ispisati sve različite gradove u kojima rade ovi korisnici.

let zahtev4 = new XMLHttpRequest();

zahtev4.addEventListener ('readystatechange', ()=>{
    if ( zahtev4.readyState == 4 && zahtev4.status == 200 ){
        let data = JSON.parse (zahtev4.responseText);
        let gradovi = [];
        data.forEach( user=>{
            if ( !gradovi.includes(user.address.city) ){
                gradovi.push(user.address.city);
            };
        });
        gradovi.forEach( grad =>{
            console.log (grad);
        });
    }
    else if ( zahtev4.readyState == 4 ){
        console.log('Server ne moze da obradi zahtev.');
    }
});

zahtev4.open ( 'GET', 'https://jsonplaceholder.typicode.com/users' );
zahtev4.send();

// 6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

let zahtev5 = new XMLHttpRequest();

zahtev5.addEventListener ('readystatechange', ()=> {
    if ( zahtev5.readyState == 4 && zahtev5.status == 200 ){
        let data = JSON.parse (zahtev5.responseText);
        let broj = 0;
        data.forEach ( user=> {
            if ( user.address.geo.lat < 0 && user.address.geo.lng < 0 ){
                broj ++;
            }
        });
        console.log ('Broj korisnika koji zive na negativnoj geografskoj duzini i sirini je: ' + broj);
    }
    else if ( zahtev5.readyState == 4 ){
        console.log('Serverski problem. Zahtev nije obradjen.');
    }
});

zahtev5.open ( 'GET', 'https://jsonplaceholder.typicode.com/users' );
zahtev5.send();