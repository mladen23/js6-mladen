// Dohvati promenljivu "ime" i f-ju "zdravo" iz modula zdravo.js

import {ime, zdravo} from "../modules/zdravo.js";
// import {hello} from "./hello.js";      ... redosled importovanja fajlova nije bitan

let prezime = "Lazovic";

console.log(ime + " " + prezime);

zdravo("Mica");
zdravo(ime);