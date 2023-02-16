function tableCsv(CSV: Array<Array<string>>, hasHeaders: boolean) {
  let tableStart: HTMLTableElement = document.createElement("table");
  if (hasHeaders) {
    const rowElt: HTMLTableRowElement = document.createElement("tr");
    if (CSV.length > 0) {
      let headers: Array<string> = CSV[0];
      headers.forEach((val:string) => {
          const data: HTMLTableCellElement = document.createElement("th");
          data.textContent = val;
          rowElt.appendChild(data);
          }
      )
      CSV.shift()
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
