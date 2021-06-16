import { getPromise } from './modules/getPromise.js';
import { generateTable, generateRow, generateData, generateGreska} from './modules/elements.js';

let container = document.querySelector('#container');
let naziv = document.querySelector('#nazivProizvoda');
let pocetnaCena = document.querySelector('#pocetnaCena');
let krajnjaCena = document.querySelector('#krajnjaCena');
let forma = document.querySelector('#forma');

forma.addEventListener('submit', e => {
    e.preventDefault();

    let naStanju = [];
    let naStanjuCena = [];
    let rezultat = [];
    let ime = naziv.value;
    let cenaStart = pocetnaCena.value;
    let cenaKraj = krajnjaCena.value;

    if ( cenaKraj == 0 ) { cenaKraj = 20000 };
    container.removeChild(container.lastChild);
    let list = generateTable(container);

    getPromise('json/stanje.json')
        .then(data => {
            data.forEach(proizvod => {
                if (proizvod.stock != 0) {
                    naStanju.push(proizvod.id);
                }
            });
            return getPromise('json/cene.json');
        })
        .then(data => {
            data.forEach(proizvod => {
                if (proizvod.price >= cenaStart && proizvod.price <= cenaKraj && naStanju.includes(proizvod.id) ) {
                    naStanjuCena.push(proizvod.id);
                };
            });
            return getPromise('json/nazivi.json');
        })
        .then(data => {
            data.forEach(proizvod => {
                if (proizvod.name.includes(ime) && naStanjuCena.includes(proizvod.id)) {
                    rezultat.push(proizvod.id);
                    let tr = generateRow (list);
                    let td = generateData(tr, proizvod.name);
                }
            });
            return getPromise('json/stanje.json');
        })
        .then( data =>{
            let redovi = document.querySelectorAll ('tr');
            let trBroj = 0;
            for ( let i = 0; i < data.length; i++){
                if (  rezultat.includes(data[i].id) ){
                    let td = generateData(redovi[trBroj], data[i].stock)
                    trBroj++;
                }
            }
            return getPromise('json/cene.json');
        })
        .then ( data =>{
            let redovi = document.querySelectorAll ('tr');
            let trBroj = 0;
            for ( let i = 0; i < data.length; i++){
                if (  rezultat.includes(data[i].id) ){
                    let td = generateData(redovi[trBroj], `${data[i].price} RSD`)
                    trBroj++;
                }
            }
            forma.reset();
        })
        .catch(err =>{
             err (generateGreska(container));
        });
});