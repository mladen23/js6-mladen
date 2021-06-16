let getTodos = resource => {
// 1. Kreiranje XML objekta
    let request = new XMLHttpRequest ();
    // 2. Otvaranje kreiranog zahteva
    request.open ('GET', resource);
// 3. Saljemo request
    request.send();


    return new Promise( (resolve, reject)=> {
        request.addEventListener ('readystatechange', ()=>{
            if (request.readyState == 4 && request.status == 200){
            // Ako je sve ok
            //console.log(request.responseText);
            //callback(request.responseText, undefined);
            resolve (request.responseText);
            }
            else if ( request.readyState == 4){
             //   console.log('Reaching data failed.');
             //callback(undefined, "Ne mogu da dohvatim podatke.");
             reject ("Ne mogu da dohvatim podatke.");
            }
        });
    });
}

getTodos ("../JSON/fruits.json").then(data => {
    console.log('Promise fruits resolved.', data);
    return getTodos ("../JSON/vegetables.json"); // promena putanje ( sledeci JSON file )
}).then(data => {
    console.log('Promise vegetables resolved.', data);
    return getTodos ("../JSON/cereals.json");
}).then ( data =>{
    console.log('Promise cereals resolved.', data);
}).catch(err =>{
    console.log("Promise rejected.", err);
});