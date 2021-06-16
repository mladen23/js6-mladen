console.log("IF - naredba grananja");

let a = 7;
let b = 10;

if(a < b){
    console.log("a je manje od b");
}

let x = 15;
let y = 30;
if(x == y){
    console.log("Brijevi x = " + x + " i y = " + y + " su jednaki.");
    console.log(`Brojevi x = ${x} i y = ${y} su jednaki`);
}
// == poredi po vrednosti.
let x1 = "15";
if(x==x1){
    console.log("Brojevi x i x1 imaju istu vrednost");
}
// === poredi po tipu i vrednosti.
if(x===x1){
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost.`);
    // x i x1 imaju istu vrednost ali nemaju isti tip - number , string
}