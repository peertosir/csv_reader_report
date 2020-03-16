"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader("original.csv");
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if ((match[1] == "Man United" && match[5] == "H") || (match[2] == "Man United" && match[5] == "A")) {
        manUnitedWins += 1;
    }
}
console.log("Man United won " + manUnitedWins + " games");
// console.log(reader.data);
