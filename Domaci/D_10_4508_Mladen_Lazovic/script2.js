/* Savladati Switch naredbu (prezentaciju za Switch naredbu možete pronaći u materijalima). Uraditi sve zadatke koji se nalaze u toj prezentaciji.
Svaki od rezultata u ovom zadatku ispisati u konzoli.
*/

// 1. Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

let dan = 2;
switch ( dan ) {
    case 1:
        console.log (`Ponedeljak.`);
        break; 
    case 2:
        console.log (`Utorak.`);
        break; 
    case 3:
        console.log (`Sreda.`);
        break; 
    case 4:
        console.log (`Cetvrtak.`);
        break; 
    case 5:
        console.log (`Petak.`);
        break; 
    case 6:
        console.log (`Subota.`);
        break; 
    case 7:
        console.log (`Nedelja.`);
        break; 
    default:
        console.log (`Unesite redni broj dana. Pocevsi od ponedeljka (1).`);
}

// 2. Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 3;
switch ( ocena ) {
    case 1:
        console.log (`Uspeh ucenika je nedovoljan.`);
        break;
    
    case 2:
        console.log (`Uspeh ucenika je dovoljan.`);
        break;
    
    case 3:
        console.log (`Uspeh ucenika je dobar.`);
        break;
    
    case 4:
        console.log (`Uspeh ucenika je vrlodobar.`);
        break;
    case 5:
        console.log (`Uspeh ucenika je odlican.`);
        break;
    
    default:
        console.log (`Unesite vrednost od 1 do 5.`);
}

// 3. Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

let broj = 6;
switch ( broj ) {
    case 0:
        console.log(`Uneti broj je nula (0).`);
        break;
    case 2:
        console.log(`Uneti broj je dva (2).`);
        break;
    case 4:
        console.log(`Uneti broj je cetiri (4).`);
        break;
    case 6:
        console.log(`Uneti broj je sest (6).`);
        break;
    case 8:
        console.log(`Uneti broj je osam (8).`);
        break;
    default:
        console.log(`Broj mora biti paran / manji od 10.`);
    
}

// 4. Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let br1 = 16;
let br2 = 0;
let operacija = `d`;
switch ( operacija ) {
    case `m`:
        console.log(`Mnozenjem brojeva ${br1} i ${br2} dobijamo ${br1 * br2}`);
        break;
    case `d`: {
        switch ( br2 == 0 ){
            case true:
            console.log (`Deljenje nulom nije moguce.`);
            break;
        default:
            console.log(`Deljenjem brojeva ${br1} i ${br2} dobijamo ${br1 / br2}`);
    }
    break;
}
    case `s`:
        console.log(`Sabiranjem brojeva ${br1} i ${br2} dobijamo ${br1 + br2}`);
        break;
    case `o`:
        console.log(`Oduzimanjem brojeva ${br1} i ${br2} dobijamo ${br1 - br2}`);
        break;
    default:
        console.log(`Unesite dva broja i pocetno slovo zeljene operacije.`);
}

// 5. Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let vreme = new Date();
let danas = vreme.getDay();
switch ( danas ) {
    case 1:
        console.log(`Ponedeljak je - jos pet dana do vikenda.`);
        break;
    case 2:
        console.log(`Utorak je - jos cetiri dana do vikenda.`);
        break;
    case 3:
        console.log(`Sreda je - jos tri dana do vikenda.`);
        break;
    case 4:
        console.log(`Cetvrtak je - jos dva dana do vikenda!`);
        break;
    case 5:
        console.log(`Petak je - jos samo danas!`);
        break;
    case 6:
        console.log(`Danas je subota - vikend je stigao!`);
        break;
    case 0:
        console.log(`Danas je nedelja - vikend je stigao!`);
        break;
    default:
        console.log(`Doslo je do greske / neocekivana vrednost.`);
}

// 6. Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let mesec = vreme.getMonth()+1;
switch ( mesec ) {
    case 1:
        console.log (`Ovo je ${mesec}. mesec u godini - Januar.`);
        break;
    case 2:
        console.log (`Ovo je ${mesec}. mesec u godini - Februar.`);
        break;
    case 3:
        console.log (`Ovo je ${mesec}. mesec u godini - Mart.`);
        break;
    case 4:
        console.log (`Ovo je ${mesec}. mesec u godini - April..`);
        break;
    case 5:
        console.log (`Ovo je ${mesec}. mesec u godini - Maj.`);
        break;
    case 6:
        console.log (`Ovo je ${mesec}. mesec u godini - Jun.`);
        break;
    case 7:
        console.log (`Ovo je ${mesec}. mesec u godini - Jul.`);
        break;
    case 8:
        console.log (`Ovo je ${mesec}. mesec u godini - Avguat.`);
        break;
    case 9:
        console.log (`Ovo je ${mesec}. mesec u godini - Septembar.`);
        break;
    case 10:
        console.log (`Ovo je ${mesec}. mesec u godini - Oktobar.`);
        break;
    case 11:
        console.log (`Ovo je ${mesec}. mesec u godini - Novemar.`);
        break;
    case 12:
        console.log (`Ovo je ${mesec}. mesec u godini - Decembar.`);
        break;
    default:
        console.log (`Doslo je do greske / neocekivana vrednost.`);   
}

// 7. Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.

let brMesec = vreme.getMonth();
let godina = vreme.getFullYear();
switch ( brMesec ) {
    case 0: case 2: case 4: case 6: case 7: case 9: case 11:
        console.log(`Ovaj mesec ima 31 dan.`);
        break;
    case 1: {
        switch ( ( godina % 4 == 0 && godina % 100 != 0 ) || godina % 400 == 0 ) {
            case true:
                console.log(`Ovaj mesec ima 29 dana.`);
                break;
            default:
                console.log(`Ovaj mesec ima 28 dana.`);
        }
        break;
    }
    case 3: case 5: case 8: case 10:
        console.log(`Ovaj mesec ima 30 dana.`);
        break;
    default:
        console.log(`Neispravno unet datum.`);

}

// 8. Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.
let boja = "blue";
switch ( boja ) {
    case "red":
        console.log("%cOvo je crveni paragraf.", `color:${boja}` );
        break;
    case "green":
        console.log("%cOvo je zeleni paragraf.", `color:${boja}`);
        break;
    case "blue":
        console.log("%cOvo je plavi paragraf.", `color:${boja}`);
        break;
    default:
        console.log("%cOvo je zuti paragraf.", `color:yellow`);
}