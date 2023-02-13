const firstCSV = [
  ["1", "2", "3", "4"],
  ["5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14"],
];

const petsCSV = [
  ["owner_name", "pet_one", "pet_two"],
  ["henry", "fido", "spot"],
  ["camilla", "waggy", "fido"],
  ["richard", "fido", "doggie"],
];

const csvMap = new Map();
csvMap.set("firstCSV", firstCSV);
csvMap.set("petsCSV", petsCSV);

//search hardcoding

const searchResults = new Map();

const colOneFido = [
  ["henry", "fido", "spot"],
  ["richard", "fido", "doggie"],
];

const colTwoFido = [["camilla", "waggy", "fido"]];

searchResults.set("1,fido", colOneFido);
searchResults.set("pet_one,fido", colOneFido);
searchResults.set("2,fido", colTwoFido);
searchResults.set("pet_two,fido", colTwoFido);
searchResults.set("1,waggy", [["camilla", "waggy", "fido"]]);

export { csvMap, searchResults };
