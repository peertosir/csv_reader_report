"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map(function (item) { return item.split(","); })
            .map(this.mapRow);
    };
    CsvFileReader.prototype.mapRow = function (arr) {
        return [
            utils_1.dateStringToDate(arr[0]),
            arr[1],
            arr[2],
            parseInt(arr[3]),
            parseInt(arr[4]),
            arr[5],
            arr[6]
        ];
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
