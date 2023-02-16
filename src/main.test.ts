// all exports from main will now be available as main.X
import * as main from './main';
import * as csv from "./tableCsv";

test('is 1 + 1 = 2?', () => {    
  expect(1 + 1).toBe(2)  
})
test("csv table functionality", () => {
  const CSV = [    ['Name', 'Age', 'Country'],
    ['John', '25', 'USA'],
    ['Mary', '30', 'Canada'],
  ];

  const table:HTMLTableElement = csv.tableCsv(CSV, true);

  expect(table.tagName).toBe('TABLE');

  const headerRow = table.children[0];
  if (headerRow == null) return;
  expect(headerRow.tagName).toBe('TR');

  const nameHeader = headerRow.children[0];
  const ageHeader = headerRow.children[1];
  const countryHeader = headerRow.children[2];
  expect(nameHeader.tagName).toBe('TH');
  expect(nameHeader.textContent).toBe('Name');
  expect(ageHeader.tagName).toBe('TH');
  expect(ageHeader.textContent).toBe('Age');
  expect(countryHeader.tagName).toBe('TH');
  expect(countryHeader.textContent).toBe('Country');
})

test("csv no header",() => {
  const CSV = [    ['Name', 'Age', 'Country'],
    ['John', '25', 'USA'],
    ['Mary', '30', 'Canada'],
  ];

  const table:HTMLTableElement = csv.tableCsv(CSV, false);



  const headerRow = table.children[0];
  if (headerRow == null) return;
  expect(headerRow.tagName).toBe('TR');

  const nameHeader = headerRow.children[0];
  const ageHeader = headerRow.children[1];
  const countryHeader = headerRow.children[2];

  expect(nameHeader.tagName).toBe('TD');
  expect(nameHeader.textContent).toBe('Name');
  expect(ageHeader.tagName).toBe('TD');
  expect(ageHeader.textContent).toBe('Age');
  expect(countryHeader.tagName).toBe('TD');
  expect(countryHeader.textContent).toBe('Country');

})


// Notice: we're testing the keypress handler's effect on state and /nothing else/
//  We're not actually pressing keys!
//  We're not looking at what the console produces!
