let divOrder = document.querySelector('#order');
let formOrder = document.querySelector('#order form');
let inputOrder = document.querySelector('#capacity');

let tabela = document.createElement('table');
    tabela.style.border ="2px solid black";

function getItems(resource, func) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            func(data);
        }
        else if ( this.readyState == 4 ){
            console.log("Could not fetch data");
        }
    })
    request.open('GET',resource);
    request.send();
}
let click1 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    // console.log(capacity);
    let itemsNoStock = [];

    getItems('json/stock.json', data => {
        // logika da se dohvate artikli koji nisu na stanju
        data.forEach ( item=>{
            if ( item.stock == 0 ){
                itemsNoStock.push(item.id);
            }
        });
        // console.log(itemsNoStock);
        getItems('json/weights.json', data=>{
            // logika za tezine artikala
            let totalWeight = 0;
            data.forEach ( item=>{
                // da li niz itemsNoStock sadrzi item.id
                if(itemsNoStock.includes(item.id)){
                    // ako se nalazi u nizu, potrebna je tezina items
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            if ( totalWeight > capacity ){
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in the truck.";
                vidOrder.appendChild(pMessage);
            }
            else {
                getItems('json/prices.json', data=>{
                    // logika za cene artikala
                    let totalPrice = 0;
                    data.forEach ( item=>{
                        if (itemsNoStock.includes(item.id)){
                            totalPrice += item.price;
                        }
                    });
                    let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = `Total order price: ${totalPrice} RSD`;
                vidOrder.appendChild(pMessage);
                });
            }
        });
    });
}

// f-ja click1 je tacna ali neprakticna (callback hell)

// promise je objekat koji ceka asinhroni poziv
// zahvaljujuci njemu postoje .then() i .catch() metode
function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) =>{
        let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if ( this.readyState == 4 ){
            reject("Could not fetch data");
        }
    })
    request.open('GET',resource);
    request.send();
    });
}

let click2 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    // console.log(capacity);
    let itemsNoStock = [];
    

    getItemsReturnPromise('json/stock.json')
    .then((data)=>{
        data.forEach ( item=>{
            if ( item.stock == 0 ){
                itemsNoStock.push(item.id);
            }
        });
        return getItemsReturnPromise('json/weights.json')
    })
    .then(data => {
        let totalWeight = 0;
            data.forEach ( item=>{
                // da li niz itemsNoStock sadrzi item.id
                if(itemsNoStock.includes(item.id)){
                    // ako se nalazi u nizu, potrebna je tezina items
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            if ( totalWeight > capacity ){
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in the truck.";
                divOrder.appendChild(pMessage);
            }
            else {
                return getItemsReturnPromise('json/prices.json');
            }
    })
    .then( data =>{
        if (data !== undefined){
            let totalPrice = 0;
                    data.forEach ( item=>{
                        if (itemsNoStock.includes(item.id)){
                            let tr = document.createElement('tr');
                            let td1 = document.createElement('td');
                            td1.textContent = item.item;
                            let td2 = document.createElement('td');
                            td2.textContent = item.price;
                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            tabela.appendChild(tr);
                            totalPrice += item.price;

                        }
                    });
                    let trLast = document.createElement('tr');
                    let td1Last = document.createElement('td');
                    let td2Last = document.createElement('td');
                    td1Last.textContent = "UKUPNO";
                    td2Last.textContent = totalPrice;
                    trLast.appendChild(td1Last);
                    trLast.appendChild(td2Last);
                    tabela.appendChild(trLast);

                //     let pMessage = document.createElement('p');
                // pMessage.style.fontWeight = "bold";
                // pMessage.style.fontSize = "24px";
                // pMessage.textContent = `Total order price: ${totalPrice} RSD`;
                // vidOrder.appendChild(pMessage);
        }
     
    })
    .catch(err=>{
        console.log(err);
    });
}
// divOrder.appendChild(tabela);

// formOrder.addEventListener('submit', click2);

//// TRECI NACIN

async function clickGetItems () {
    let data1 =  await getItemsReturnPromise ('json/stock.json');
    let capacity = inputOrder.value;
    // console.log(capacity);
    let itemsNoStock = [];
        data1.forEach ( item=>{
            if ( item.stock == 0 ){
                itemsNoStock.push(item.id);
            }
        });
    let data2 = await getItemsReturnPromise ('json/weights.json');
    let totalWeight = 0;
            data2.forEach ( item=>{
                // da li niz itemsNoStock sadrzi item.id
                if(itemsNoStock.includes(item.id)){
                    // ako se nalazi u nizu, potrebna je tezina items
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            let pMessage = document.createElement('p');
            if ( totalWeight > capacity ){
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in the truck.";
            }
            else {
                let data3 = await getItemsReturnPromise ('json/prices.json');
                let totalPrice = 0;
                    data3.forEach ( item=>{
                        if (itemsNoStock.includes(item.id)){
                            totalPrice += item.price;
                        }
                    });
                    pMessage.textContent = totalPrice;
            };
            return pMessage;ab
}
let click3 = event => {
    event.preventDefault();
    clickGetItems()
    .then( para =>{
        divOrder.appendChild(para);
    })
    .catch(err =>{
        console.log(err);
    })
}

formOrder.addEventListener ('submit', click3);