let a = 5;
let b = 7;

if (a==b){
    console.log("a i b su jednaki.");
}
else{
    console.log("a i b nisu jednaki.");
}

// Dodavanje HTML elementa iz script file-a
document.body.innerHTML = "<h1>Ovo je if-else naredba grananja.</h1>";
document.body.innerHTML += "<h3>Zadatci</h3>";
// ako ne upisemo += samo ce nalepiti zadnju komandu preko prethodne.
// Ukoliko dodamo samo otvoren tag automatski ce ga zatvoriti, i obratno. >>>
// document.body.innerHTML += "<p>";
// document.body.innerHTML += "Zadatci za vezbanje.";
// document.body.innerHTML += "</p>";
let v = 2021;
document.body.innerHTML +=
`<p>
Ovo je neki paragraf.
</p>
<p>
    Godina je ${v}
</p>
`;

// IF - ELSE IF - ELSE
let broj = -5;
if(broj < 0) {
    console.log("Broj je manji od nule.");
}
else if(broj == 0) {
    console.log("Broj je jednak nuli.");
}
else {
    console.log("Broj je veci od nule.");
}