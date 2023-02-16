/**
 * Takes in a 2D array and returns a HTML table generated from it.
 * @param CSV A 2D array of Strings representing a CSV.
 * @param hasHeaders A boolean representing whether the CSV has headers.
 * @returns The HTML table corresponding to the 2D array.
 */
function tableCsv(CSV: Array<Array<string>>, hasHeaders: boolean) {
  let tableStart: HTMLTableElement = document.createElement("table");
  if (hasHeaders) {
    const rowElt: HTMLTableRowElement = document.createElement("tr");
    if (CSV.length > 0) {
      let headers: Array<string> = CSV[0];
      headers.forEach((val: string) => {
        const data: HTMLTableCellElement = document.createElement("th");
        data.textContent = val;
        rowElt.appendChild(data);
      });
      CSV.shift();
      tableStart.appendChild(rowElt);
    }
  } else {
    CSV.forEach(function (row: Array<string>) {
      const rowElt: HTMLTableRowElement = document.createElement("tr");
      row.forEach((val: string) => {
        const data: HTMLTableCellElement = document.createElement("td");
        data.textContent = val;
        rowElt.appendChild(data);
      });
      tableStart.appendChild(rowElt);
    });
  }
  return tableStart;
}
export { tableCsv };
