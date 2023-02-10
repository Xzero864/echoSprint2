function tableCsv(CSV:Array<Array<string>>, hasHeaders: boolean){
    if (hasHeaders) {
        console.log("deal with headers here")

    } else {
        CSV.forEach(parseRow);
    }
    return tableStart;
}
let tableStart:HTMLTableElement = document.createElement("table");

const parseRow = (row: Array<string>) => {
    const rowElt: HTMLTableRowElement = document.createElement("tr")
    row.forEach((val:string) => {
        const data :HTMLTableDataCellElement = document.createElement("td")
        data.textContent = val;
        rowElt.appendChild(data);


    })
    tableStart.appendChild(rowElt);
}
export {tableCsv};
