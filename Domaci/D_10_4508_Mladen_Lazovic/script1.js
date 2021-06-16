/*
Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.

Ulaz (vrednosti koje samostalno dodeljujete promenljivama) : 
Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i pocMinLek1)
Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i krajMinLek1)
Počezak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i pocMinLek2)
Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i krajMinLek1)

Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
Početak radnog vremena prvog lekara (izraženo u satima i minutima)
Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
Početak radnog vremena drugog lekara (izraženo u satima i minutima)
Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.
*/

let pocSatLek1 = 17;
let pocMinLek1 = 15;
let krajSatLek1 = 23;
let krajMinLek1 = 45;

let pocSatLek2 = 10;
let pocMinLek2 = 30;
let krajSatLek2 = 18;
let krajMinLek2 = 45;

let pocVreme1 = pocSatLek1 * 60 + pocMinLek1;
let krajVreme1 = krajSatLek1 * 60 + krajMinLek1;
let pocVreme2 = pocSatLek2 * 60 + pocMinLek2;
let krajVreme2 = krajSatLek2 * 60 + krajMinLek2;
let preklapanje;
let tabela =
`
<table id="tabela">
<tr>
<th colspan="4">NASI LEKARI</th>
</tr>
<tr>
<td colspan="2"> P.Petrovic </td>
<td colspan="2"> M.Markovic </td>
</tr>
<tr>
<td colspan="4"> Radno vreme: </td>
</tr>
<tr>
<td>od  ${pocSatLek1} : ${pocMinLek1}</td>
<td>do ${krajSatLek1} : ${krajMinLek1}</td>
<td>od ${pocSatLek2} : ${pocMinLek2}</td>
<td>do ${krajSatLek2} : ${krajMinLek2}</td>
</tr>
<tr>
`;
if ( pocVreme2 >= krajVreme1 ){
        tabela +=
        `
        <td colspan="4" rowspan="2">Danas nema <br> preklapanja smena</td>
        `;
}
else if ( pocVreme1 >= krajVreme2 ){
    tabela +=
    `
    <td colspan="4" rowspan="2">Danas nema <br> preklapanja smena</td>
    `;
}
else {
    if ( pocVreme1 < pocVreme2 && krajVreme1 < krajVreme2){
        preklapanje= krajVreme1 - pocVreme2;
        let h = Math.floor(preklapanje / 60);
        let m = preklapanje % 60;
        tabela+=
        `
        <td colspan="4">Preklapanje smena iznosi <br> ${h}h : ${m}m</td>
        `;
    }
    else if ( pocVreme2 < pocVreme1 && krajVreme2 < krajVreme1 ){
        preklapanje= krajVreme2 - pocVreme1;
        let h = Math.floor(preklapanje / 60);
        let m = preklapanje % 60;
        tabela+=
        `
        <td colspan="4">Preklapanje smena iznosi <br> ${h}h : ${m}m</td>
        `;
    }
    else if ( pocVreme1 < pocVreme2 && krajVreme2 < krajVreme1 ){
        preklapanje= krajVreme2 - pocVreme2;
        let h = Math.floor(preklapanje / 60);
        let m = preklapanje % 60;
        tabela+=
        `
        <td colspan="4">Preklapanje smena iznosi <br> ${h}h : ${m}m</td>
        `;
    }
    else if ( pocVreme2 < pocVreme1 && krajVreme1 < krajVreme2 ){
        preklapanje= krajVreme1 - pocVreme1;
        let h = Math.floor(preklapanje / 60);
        let m = preklapanje % 60;
        tabela+=
        `
        <td colspan="4">Preklapanje smena iznosi <br> ${h}h : ${m}m</td>
        `;
    }
}
tabela += 
        `
        </tr>
        </table>
        `;
document.body.innerHTML += tabela;