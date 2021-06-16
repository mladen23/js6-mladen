let blog1 = {
    title: 'HTML',
    likes: 50,
    dislikes: 3
};
let blog2 = {
    title: 'CSS',
    likes: 170,
    dislikes: 5
}
let blog3 = {
    title: 'JS',
    likes: 205,
    dislikes: 110
}

let user1 = {
    username: 'Stefan',
    age: 31,
    blogs: [ blog1, blog2, blog3 ],

    logBlogs: function () {
        this.blogs.forEach ( elem => {
            console.log(elem.title);
        });
    },
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach ( blog => {
            sum += blog.likes;
        });
        return sum;
    }
};
user1.logBlogs();

// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let user2 = {
    username: 'Jelena',
    age: 26,
    blogs: [ blog2, blog3 ],

    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach ( blog => {
            sum += blog.likes;
        });
        return sum;
    }
};

let user3 = {
    username: 'Milena',
    age: 14,
    blogs: [ blog1 ],

    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach ( blog => {
            sum += blog.likes;
        });
        return sum;
    }
};

let users = [ user1, user2, user3 ];

// Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach ( elem => {
    let godine = elem.age;
    if ( godine < 18 ){
        console.log (elem.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach ( elem => {
    let userBlogs = elem.blogs; // izdvajamo niz blogova tekuceg korisnika
    userBlogs.forEach ( blog => {
        if ( blog.likes > 50 ){
            console.log (blog.title, elem.username);
        }
    });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach ( elem => {
    let name = elem.username;
    let userBlogs = elem.blogs;
    if ( name == 'Stefan' ){
        console.log ( userBlogs );
    }
});

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
// Nacin 1
users.forEach ( user => {
    let userBlogs = user.blogs;
    let sumLikes = 0;
    userBlogs.forEach(blog => {
        sumLikes += blog.likes;
    });
    if ( sumLikes > 100 ) {
        console.log ( user.username );
    }
});

// Nacin 2
// Napravimo metod za svakog user-a koji vraca ukupan br like-ova
/* 
sumLikes: function () {
        let sum = 0;
        this.blogs.forEach ( blog => {
            sum += blog.likes;
        });
        return sum;
    }
        */
users.forEach ( user => {
    if (user.sumLikes() > 100){
        console.log ( user.username );
    }
});

// Nacin 3
// napravimo f-ju koja ce vracati ukupan br like-ova
let sum = blogs => {
    let s = 0;
    blogs.forEach (blog => {
        s += blog.likes;
    });
    return s;
}
users.forEach ( user => {
    let userBlogs = user.blogs;
    let likes = sum(userBlogs);
    if ( likes > 100 ){
        console.log ( user.username );
    }
});


// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let avgGeneral; // Prosecna ocena u odnosu na sve blogove svih korisnika
let sumGeneral = 0;
let countGeneral = 0;
// PRVI NACIN odredjivanja prosecnog broja
users.forEach ( user => {
    user.blogs.forEach ( blog =>{
        sumGeneral += blog.likes;
        countGeneral ++;
    });
});
avgGeneral = sumGeneral / countGeneral;
console.log (avgGeneral);

users.forEach ( user => {
    user.blogs.forEach (blog => {
        if ( blog.likes > avgGeneral ){
            console.log (blog.title);
        }
    });
});

/* DRUGI NACIN, koriscenjem metode

users.forEach (user => {
    sumGeneral += user.sumLikes();
    countGeneral += user.blogs.length;
});
avgGeneral = sumGeneral / countGeneral;
console.log (avgGeneral);
*/

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

users.forEach ( elem => {
    let userBlogs = elem.blogs;
    let sumLikes = 0;
    let sumDislikes = 0;
    let noBlogs = 0;
    userBlogs.forEach ( blog => {
        sumLikes += blog.likes;
        sumDislikes += blog.dislikes;
        noBlogs ++;
    });
    let averageLikes = sumLikes / noBlogs;
    let averageDislikes = sumDislikes / noBlogs;
    userBlogs.forEach ( blog =>{
        if ( blog.likes > averageLikes && blog.dislikes < averageDislikes ){
            console.log (blog.title, elem.username);
        }
    });
    
});



