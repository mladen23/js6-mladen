console.log("D_6_4508_ML");
// Zadatak 1

// Farenheit to Kelvin
let far = 45;
let cel = ( far - 32 ) * ( 5/9 );
let kel = cel + 273.15;
console.log(far + " Farenheit is " + kel + " Kelvin.");

// Kelvin to Farenfeit
let kel1 = 412;
let cel1 = kel1 - 273.15;
let far1 = cel1 / ( 5/9 ) + 32;
console.log(kel1 + " Kelvin is " + far1 + " Farenfeit.");


// Zadatak 2

let n = 24;
let a = 5;
let rest = n - ( 2*a+2 );
console.log("You have " + rest + " more chapters to read.");

// Zadatak 3

let p = 1500;
let m = 2000;
let k = 710;
let dz = ( p + m - k ) / 2;
let pk = p - dz;
let mk = m - dz;
console.log("Pera dobija kusur od " + pk + " dinara.");
console.log("Mika dobija kusur od " + mk + " dinara.");