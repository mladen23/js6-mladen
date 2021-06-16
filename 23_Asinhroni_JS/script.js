let request = new XMLHttpRequest();

/*
request.addEventListener ('readystatechange', ()=> { // listener prati promenu
    if (request.readyState == 1) {
        console.log('Uspostavljena konekcija');
    }
    else if (request.readyState == 2) {
        console.log('Poslat zahtev serveru');
    }
    else if (request.readyState == 3) {
        console.log('Odgovor je u statusu preuzimanja');
    }
    else if (request.readyState == 4) {
        console.log('Preuzet je odgovor');
        console.log(request.responseText); // string koji je vratio server 
    }
});
*/

request.addEventListener ('readystatechange', ()=> {
    if (request.readyState === 4 && request.status === 200){ // status 200 znaci status = OK
        let odgovor = request.responseText; // odgovor je uvek string
        odgovorJS = JSON.parse(odgovor); // konvertuje string u objekat / niz objekata
        // console.log (odgovor);
        console.log (odgovorJS);
    }
    else if (request.readyState === 4){
        console.log ('Nemoguce dobiti odgovor sa servera');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users'); // uspostavljanje konekcije (0 - 1)
request.send(); // slanje HTTP zahteva (1 - 2)

console.log ('Nesto posle 1');
console.log ('Nesto posle 2');