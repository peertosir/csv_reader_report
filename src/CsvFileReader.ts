import fs from "fs";
import {dateStringToDate} from "./utils";
import {MatchResults} from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];


export class CsvFileReader {

    data: MatchData[] = [];
    constructor(public filename: string) {
    }
    read(): void {
        this.data = fs.readFileSync(this.filename, {encoding: "utf-8"})
            .split("\n")
            .map((item: string): string[] => item.split(","))
            .map(this.mapRow);
    }

    mapRow(arr: string[]): MatchData {
        return [
            dateStringToDate(arr[0]),
            arr[1],
            arr[2],
            parseInt(arr[3]),
            parseInt(arr[4]),
            arr[5] as MatchResults,
            arr[6]
        ]
    }
}