// dohvatanje jednog elementa iz kolekcije
/*
db.collection('customers').doc('customer-01')
.get()
.then(doc=>{
    if(doc.exists){
        let t = doc.data();
        console.log(t);
    }
    else {
        console.log(`No document with id: ${doc.id}`);
    }
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
// dohvatanje svih dokumenata iz kolekcije
/*
db.collection('customers')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(t);
        console.log(`Document ${id}: ${t}`);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
// dohvatanje svih dokumentata iz kolekcije u nekom redosledu
/*
db.collection('users')
.orderBy('surname', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
// sortiranje po vise polja ( parametara )
/*
db.collection('users')
.orderBy('surname', 'asc')
.orderBy('name','asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/

// dohvatanje ogranicenog broja dokumenata iz kolekcije
/*
db.collection('users')
.orderBy('surname', 'asc')
.orderBy('name','asc')
.limit(2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/

// dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene uslove ( filtriranje )

// dohvati sve korisnike mladje od 30 godina
/*
db.collection('customers')
.where('age', '<' , 30)
// .orderBy('age', 'asc')

// - where i orderBy mogu da se kombinuju po razlicitim poljima, ali to povlaci: 1 - da se sva polja navedena u where nalaze i u orderBy; 2 - da postoji kompozitni index za sva polja i redoslede navedene u orderBy

// .orderBy('name', 'desc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
// dohvatiti sve korisnike kojima je adresa NY
/*
db.collection('customers')
.where ('addresses', 'array-contains', 'New York')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
// Dohvatiti sve korisnike koji imaju 25 ili 31 godinu
/*
db.collection('customers')
.where ('age', 'in', [25, 31])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
// Dohvatiti sve korisnike koji se zovu Cole ili Phil
/*
db.collection('customers')
.where ('name', 'in', ['Phil', 'Cole'])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/
//  Dohvatiti sve korisnike koji zive u NY ili Torontu
/*
db.collection('customers')
.where ('addresses', 'array-contains-any', ['New York', 'Toronto'])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});
*/


// ZADATCI

// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.

// db.collection('customers')
// .orderBy('name', 'asc')
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u NY

// db.collection('customers')
// .where('addresses', 'array-contains', 'New York')
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Imaju platu veću ili jednaku od 500

// db.collection('customers')
// .where('salary', '>=', 500)
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Imaju platu između 300 i 800

// db.collection ('customers')
// .where('salary', '>=', 300)
// .where('salary', '<=', 800)
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Imaju platu manju od 900, i imaju 30 godina

// db.collection('customers')
// .where('salary', '<', 900)
// .where('age', '==' , 30)
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Imaju adresu u Bostonu ili NY

// db.collection('customers')
// .where('addresses', 'array-contains-any', ['Boston', 'New York'])
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Imaju 22, 25 ili 28 godina

// db.collection('customers')
// .where('age', 'in', [22, 25, 28])
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Iz kolekcije tasks, pročitati sve zadatke, i koji:

// Su prioritetni

// db.collection('tasks')
// .where('priority', '==', true )
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Treba da se izvrše u tekućoj godini

let sada = new Date();
let godina = sada.getFullYear();
let datum1 = new Date(godina, 0 , 1); // prvi januar tekuce godine
let datum2 = new Date( godina+1, 0 , 1 ); // prvi januar sledece godine
// let datum = new Date('2021-12-31 23:59:59');

db.collection('tasks')
.where ( 'due_date', '<', datum2 )
.where('due_date', '>=', datum1 )
.get()
.then( documents=>{
    documents.forEach(doc => {
        let d = doc.data();
        console.log(d);        
    });
})
.catch(err=>{
    console.log(`ERROR! ${err}`);
});

// Su završeni

// let datum = new Date();

// db.collection('tasks')
// .where( 'due_date', '<', datum )
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

// Tek treba da počnu.

// let datum = new Date();

// db.collection('tasks')
// .where( 'start_date', '>', datum )
// .get()
// .then( documents=>{
//     documents.forEach(doc => {
//         let d = doc.data();
//         console.log(d);        
//     });
// })
// .catch(err=>{
//     console.log(`ERROR! ${err}`);
// });

