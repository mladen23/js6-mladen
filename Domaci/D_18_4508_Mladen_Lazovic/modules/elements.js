export {generateTable, generateRow, generateData, generateGreska};

let generateTable = parent => {
    let table = document.createElement ('table');
    let th1 = document.createElement('th');
    th1.textContent = 'Naziv';
    table.appendChild(th1);
    let th2 = document.createElement('th');
    th2.textContent = 'Stanje';
    table.appendChild(th2);
    let th3 = document.createElement('th');
    th3.textContent = 'Cena';
    table.appendChild(th3);
    parent.appendChild(table);
    return table;
}

let generateRow = parent => {
    let row = document.createElement('tr');
    parent.appendChild(row);
    return row;
}

let generateData = ( parent, text ) => {
    let cell = document.createElement('td');
    cell.textContent = text;
    parent.appendChild(cell);
    return cell;
}

let generateGreska = parent => {
    let p = document.createElement ('p');
    p.textContent = 'Doslo je do greske.';
    parent.appendChild(p);
    return p;
}