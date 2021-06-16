// 1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)
let response = fetch("./JSON/fruits.json").then(response=>{
    return response.json();
}).then(data=>{
    data.forEach(fruit=>{
        if ( fruit.name.includes("berries")){
            console.log(fruit.name);
        }
    })
}).catch(err=>{
    console.log(err);
});

// 2. U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)
fetch("./JSON/fruits.json").then( response =>{
    return response.json();
}).then( data =>{
    let br = 0;
    data.forEach(fruit=>{
        if (!fruit.name.includes("berries")){
            br++;
        }
    })
    console.log(br);
}).catch(err=>{
    console.log('Not working.', err);
});

// 3. Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).
/*
let fruitsAndVege = async () => {
    let body = document.body;
    let response = await fetch ("./JSON/fruits.json");
    if (response.status != 200){
        throw new Error();
    }
    else {
        let data = await response.json();
        data.forEach(fruit=>{
            let ime = document.createElement ('p');
            ime.textContent = fruit.name;
            body.appendChild (ime);
        });
    }
    response = await fetch("./JSON/vegetables.json");
    if (response.status != 200){
        throw new Error();
    }
    else {
        let data = await response.json();
        data.forEach( vege =>{
            let ime = document.createElement ('p');
            ime.textContent = vege.name;
            body.appendChild(ime);
        });
    }
}
fruitsAndVege().then(data =>{
    //
})
.catch(err=>{
    console.log('Error!', err);
})
Zakomentarisan da ne smeta ispisu cetvrtog */

// 4. Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).
/*
let lista = async () => {
    let h3fruits = document.createElement ('h3');
    h3fruits.textContent = 'Fruits';
    document.body.appendChild(h3fruits);
    let response = await fetch('./JSON/fruits.json');
    if (response.status != 200){
        throw new Error();
    }
    else {
        let ul = document.createElement ('ul');
        let data = await response.json();
        data.forEach ( fruit =>{
            let li = document.createElement ('li');
            li.textContent = fruit.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    }
    let h3vege = document.createElement ('h3');
    h3vege.textContent = 'Vegetables';
    document.body.appendChild(h3vege);
    response = await fetch('./JSON/vegetables.json');
    if (response.status != 200){
        throw new Error();
    }
    else {
        let ul = document.createElement('ul');
        let data = await response.json();
        data.forEach ( vege=>{
            let li = document.createElement ('li');
            li.textContent = vege.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    }
}
lista().then().catch(err=>console.log(err));
Zakomentarisan da ne smeta petom */

// 5. Nadovezati se na prethodni zadatak i nakon ispisane liste voća u paragrafu ispisati ukupnu težina svog voća u kilogramima. Zatim, ispod liste povrća u paragrafu ispisati ukupnu težinu povrća u kilogramima. Postaviti da asinhrona funkcija vraća zbir količina voća i povrća u kilogramima. Pri pozivu asinhrone funkcije, ispisati  ovu vrednost.

let lista = async () => {
    let h3fruit = document.createElement('h3');
    h3fruit.textContent = 'Fruits';
    document.body.appendChild(h3fruit);

    let sumFruits = 0;
    let sumVege = 0;

    let ul = document.createElement ('ul');
    let p = document.createElement('p');
    let response = await fetch('./JSON/fruits.json');
    if (response.status !=200){
        throw new Error();
    }
    else {
        let data = await response.json();
        data.forEach ( fruit=>{
            let li = document.createElement ('li');
            li.textContent = fruit.name;
            ul.appendChild(li);
            sumFruits += fruit.number;
        });
    }
    p.textContent = `Tezina voca u kilogramima je ${sumFruits} kg.`;
    document.body.appendChild(ul);
    document.body.appendChild(p);

    let h3vege = document.createElement('h3');
    h3vege.textContent = 'Vegetables';
    document.body.appendChild(h3vege);

    let ul2 = document.createElement('ul');
    let p2 = document.createElement('p');

    response = await fetch('./JSON/vegetables.json');
    if (response.status !=200){
        throw new Error();
    }
    else {
        let data = await response.json();
        data.forEach ( vege=>{
            let li = document.createElement('li');
            li.textContent = vege.name;
            ul2.appendChild(li);
            sumVege += vege.number;
        })
    }
    p2.textContent = `Tezina povrca u kilogramima je ${sumVege} kg.`;
    document.body.appendChild(ul2);
    document.body.appendChild(p2);
    return sumFruits + sumVege;
}
lista().then(data=>{
    console.log(`Ukupna tezina voca i povrca je:`, data, 'kg.');
}).catch(err=> console.log(err));