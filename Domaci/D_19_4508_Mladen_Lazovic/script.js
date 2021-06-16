// Napisati skript koji:

                    // 1. Dodaje nekoliko filmova u bazu

/*
let m4 = {
    name: "The Shawshank Redemption",
    director: {
        name: "Frank",
        surname: "Darabont"
    },
    release_year: 1994,
    genres: ["drama"],
    rating: 9.3
}
let m5 = {
    name: "Avengers: Endgame",
    director: {
        name: "Antony",
        surname: "Russo"
    },
    release_year: 2019,
    genres: ["action", "fantasy"],
    rating: 8.4
}

dBase.collection('movies').doc('movie-04')
.set(m4)
.then(()=>{
    console.log('Success!');
})
.catch(err=>{
    console.log(`Error! ${err}`);
});

dBase.collection('movies').doc('movie-05')
.set(m5)
.then(()=>{
    console.log('Success!');
})
.catch(err=>{
    console.log(`Error! ${err}`);
});
*/

                    // 2. Menja podatke o nekim filmovima u bazi

/*
dBase.doc('movies/movie-02')
.update({
    rating: 8.2
})
.then(()=>{
    console.log('Success!');
})
.catch(err=>{
    console.log(err);
});
*/

                    // 3. Dodaje žanr nekom filmu

/*
dBase.collection('movies').doc('movie-02')
.update({
    genres: firebase.firestore.FieldValue.arrayUnion("adventure")
})
.then(()=>{
    console.log('Success!');
})
.catch(err=>{
    console.log(`Error! ${err}`);
});
*/

                    // 4. Briše žanr nekom filmu

/*
let movie = dBase.doc('movies/movie-01');
movie.update({
    genres: firebase.firestore.FieldValue.arrayRemove('action')
})
.then(()=>{
    console.log('Success!');
})
.catch(err=>{
    console.log(`Error! ${err}`);
});
*/

                    // 5. Menja ime ili prezime nekom režiseru.

/*
dBase.collection('movies').doc('movie-05')
.update({
    director: {
        name: "Joe",
        surname: "Russo"
    }
})
.then(()=>{
    console.log('Success!');
})
.catch(err=>{
    console.log(`Error! ${err}`);
});
*/