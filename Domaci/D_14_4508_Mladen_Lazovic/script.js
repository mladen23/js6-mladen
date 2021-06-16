// Formirati objekat dan

let dan1 = {
    datum: `2021/05/17`,
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [ 8, 11, 15, 17, 24, 24, 22, 19, 16 ]
};

let dan2 = {
    datum: `2021/05/18`,
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [ 12, 17, 25, 26, 27, 22, 17, 12 ]
};

let dan3 = {
    datum: `2021/05/19`,
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [ 8, 11, 15, 18, 21, 20, 12 ]
};

let dan4 = {
    datum: `2021/05/20`,
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [ 8, 11, 15, 22, 27, 26, 25, 18, 13, 8 ]
};

let dan5 = {
    datum: `2021/05/21`,
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [ 11, 11, 15, 17, 22, 22, 23, 17, 13, 11 ]
};

// Napraviti niz dan objekata (niz od najmanje 3 objekta).

let dani = [ dan1, dan2, dan3, dan4, dan5 ];

// Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.


let danMaxMerenja = dani => {
    let brMerenja = 0;
    let datum;
    dani.forEach ( dan => {
        if ( dan.temperature.length > brMerenja ){
            brMerenja = dan.temperature.length;
        }
    });
    
    dani.forEach (dan =>{
        if ( dan.temperature.length == brMerenja ){
            datum = dan.datum;
        }
    });
    console.log (datum);
    
    };

danMaxMerenja(dani);

// Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let vremenskiUslovi = dani => {
    let kisa = 0;
    let sunce = 0;
    let oblacno = 0;

    dani.forEach ( dan => {
        if ( dan.kisa ) {
            kisa++;
        }
        if ( dan.sunce ){
            sunce++;
        }
        if ( dan.oblacno ){
            oblacno++;
        }
    });
    console.log ( `Kisnih dana: ${kisa}.` );
    console.log ( `Sunce dana: ${sunce}.` );
    console.log ( `Oblancih dana: ${oblacno}.` );
}

vremenskiUslovi(dani);

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.

let natprosecni = dani => {
    let globalAverage;
    let globalSum = 0;
    let brojMerenja = 0;
    let danAverage;
    let brojDana = 0;
    dani.forEach ( dan=> {
        let temperature = dan.temperature;
        temperature.forEach ( elem=>{
            globalSum += elem;
            brojMerenja++;
        });
    });
    globalAverage = globalSum / brojMerenja;

    dani.forEach ( dan=> {
        let sum = 0;
        dan.temperature.forEach ( temp => {
            sum += temp;
        });
        danAverage = sum / dan.temperature.length;
        // console.log (danAverage); - provera vrednosti
        if ( danAverage > globalAverage ){
            brojDana++;
        }
    });
    // console.log (globalAverage); - provera vrednosti
    return brojDana;
}
console.log (natprosecni(dani));