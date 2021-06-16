let sportista1 = {
    imePrezime: "Aleksandar Djordjevic",
    visina: 2.05,
    timovi: [ "Partizan", "Real Madrid", "Barcelona" ]
};

let sportista2 = {
    imePrezime: "Zeljko Rebraca",
    visina: 2.12,
    timovi: [ "Partizan", "Maccabi", "Minesota", "Barcelona" ]
};

let sportista3 = {
    imePrezime: "Nenad Krstic",
    visina: 1.98,
    timovi: [ "CSKA", "Barcelona", "Bayern" ]
};

let sportisti = [ sportista1, sportista2, sportista3 ];

function prosecnaVisina ( sportisti ) {
    let ukVisina = 0;
    let brSportista = 0;
    sportisti.forEach ( sportista =>{
        ukVisina += sportista.visina;
        brSportista ++;
    });
    return ukVisina / brSportista;
};

console.log ( prosecnaVisina (sportisti));

function igraliZaTim ( sportisti, imeTima ) {
    let timBroj = 0;
    sportisti.forEach ( sportista => {
        sportista.timovi.forEach ( tim => {
            if ( imeTima == tim ){
                timBroj ++;
            }
        });
    });
    return timBroj;
};

console.log ( igraliZaTim (sportisti, "Barcelona"));

function najmanjeTransfera ( sportisti ) {
    sportisti.forEach ( spotrista =>{
        brTransfera = sportista.timovi.length;
        if ( brTransfera < najmanje ){
            najmanje = brTransfera;
        }
    });
}

console.log ( najmanjeTransfera(sportisti));


function visiTimPodela ( sportisti ) {
    let tim1 = [];
    let tim2 = [];
    if ( sportisti.length % 2 == 0 ){

    }
}