import {CsvFileReader} from "./CsvFileReader";


const reader = new CsvFileReader("original.csv");
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    if ((match[1] == "Man United" && match[5] == "H") || (match[2] == "Man United" && match[5] == "A")) {
        manUnitedWins += 1;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
// console.log(reader.data);

