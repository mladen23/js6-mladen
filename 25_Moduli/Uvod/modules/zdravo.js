let ime = "Mladen";

function ispis(poruka) {
    console.log(poruka);
}

function zdravo (ime) {
    ispis(ime);
}

// Nudim promenljivu ime i f-ju zdravo
export {ime, zdravo};

// moze i ovako:
// export let ime = "Mladen";