const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//nés années 70 :

console.log('"Les entrepreneurs qui sont nés dans les années 70 sont : "');
let filter70 = entrepreneurs.filter(entrepreneur => (entrepreneur.year >= 1970 && entrepreneur.year < 1980));
filter70.forEach(entrepreneur => console.log(" - " + entrepreneur.first + " " + entrepreneur.last + " " + entrepreneur.year));

//array nom et prenom entrepreneurs
console.log("\nArray nom et prenom entrepreneurs");
let nomsPrenoms = []
entrepreneurs.forEach(entrepreneur => nomsPrenoms.push(entrepreneur.first + " " + entrepreneur.last));
console.log(nomsPrenoms);

//age des inventeurs aujourd'hui
console.log("\nAge des inventeurs aujourd'hui");
entrepreneurs.forEach(entrepreneur => console.log(" - " + entrepreneur.first + " " + entrepreneur.last + " aurait " + (new Date().getFullYear() - entrepreneur.year) + " ans aujourd'hui"));

//entrepreneurs rangé par ordre alphabetique du nom de famille:
console.log("\nEntrepreneurs rangés par ordre alphabétique du nom de famille");
let triesParNom = entrepreneurs.sort((entr1, entr2) => (entr1.last.localeCompare(entr2.last) ));
triesParNom.forEach(entrepreneur => console.log(" - " + entrepreneur.first + " " + entrepreneur.last));