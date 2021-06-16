let blog = {
    title: 'Objekti',
    content: 'Ovo su objekti...',
    author: 'Mladen'
};

console.log (blog);
console.log (typeof blog); // provera kojeg je tipa. typeof radi za bilo koju promenljivu

// Pristup property-ju u objektu

console.log (blog.title);
console.log (blog['content']);

// Izmena jedne osobine / property-ja

blog.content = "Objekti su slozeni tipovi podataka.";
console.log (blog.content);

blog['author'] = 'Mladen Lazovic';
console.log (blog['author']);

//////

let user = {
    username: 'Mladen',
    age: 33,
    blogs: ['Naslov1', 'Naslov2', 'Naslov3'],
    login: function(){ // kada je f-ja u objektu, ona se naziva METOD
        console.log ('Ulogovani ste');
    },
    logBlogs: function() {
        // console.log (this.blogs); // kada smo u objektu, njegovim propertijima pristupamo sa this.+property
        this.blogs.forEach ( elem =>{
            console.log (elem);
        });
    },
    test: function () {
        console.log (this);
    }
};

user.login();
user.logBlogs();
user.test(); // daje info o objektu u kome se nalazi
console.log (this); // izvan objekta ova komanda daje info o Window objektu