console.log(db);

// pristup kolekciji

let coll1 = db.collection('customers');
console.log(coll1);

// pristup dokumentu

let doc1 = coll1.doc('customer-01');
console.log(doc1);

// moze i direktno iz baze, samo paziti na putanju
let doc2 = db.doc('customers/customer-02');
console.log(doc2);

/* za pristup dokumentu
let doc = db.collection ('...').doc('...');
Kod dokumentata imamo sledece metode:
 CRUD ( Create, Read, Update, Delete )
 doc.set(...)    ->    Create
 doc.get(...)    ->    Read
 doc.update(...) ->    Update
 doc.delete(...) ->    Delete

Sve ce tiri metode kao rezultat vracaju PROMISE
Nakon poziva potrebno je lancati .then() i .catch()
*/

// 1. Create
let c4 = {
    name: "Cole",
    age: 42,
    addresses: ["Dalas", "Toronto"],
    salary: 345.66
}; // JS objekat ... na osnovu njega saljemo dokument u bazu

// za timestamp koji se nalazi u bazi, moramo da kreiramo DATE objekat

let date1 = new Date('2021-06-15 11:15:00');
let date2 = new Date('2021-06-15 13:00:00');

db.collection('customers').doc('customer-04')
.set(c4)
.then(function () {
    console.log("Success!!!");
})
.catch(function (error){
    console.log(`Error while adding a document: ${error}`);
});

db.collection('tasks').doc('task-02')
.set({
    title: "Riding a bicycle",
    start_date: firebase.firestore.Timestamp.fromDate(date1),
    due_date: date2,
    priority: false,
    description: "Recreation before the class"
}, {merge: true})
.then(()=>{
    console.log("Success!!");
})
.catch(err =>{
    console.log(err);
});

// domaci --- 19-ti i 21-vi slide