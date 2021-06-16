let getSomething = () => {
    let obj = new Promise((resolve, reject)=>{
        //resolve("Nesto resolved...");
         reject("Nesto rejected...");
    }); // promise vraca ili RESOLVED ili REJECTED
    return obj;
};


// console.log(getSomething());

// getSomething vraca resolve ili reject
// ako vrati resolve, onda se izvrsava 'then' grana
getSomething().then( data => {
    console.log(data);
}).catch ( (err) => {
    console.log(err);
});