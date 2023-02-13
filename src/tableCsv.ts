function tableCsv(CSV: Array<Array<string>>, hasHeaders: boolean) {
  let tableStart: HTMLTableElement = document.createElement("table");
  if (hasHeaders) {
    console.log("deal with headers here");
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

// const parseRow = (row: Array<string>) => {
//   const rowElt: HTMLTableRowElement = document.createElement("tr");
//   row.forEach((val: string) => {
//     const data: HTMLTableCellElement = document.createElement("td");
//     data.textContent = val;
//     rowElt.appendChild(data);
//   });
//   tableStart.appendChild(rowElt);
// };
export { tableCsv };
