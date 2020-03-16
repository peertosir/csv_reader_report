import {CsvFileReader} from "./CsvFileReader";
import {MatchResults} from "./MatchResults";
import {dateStringToDate} from "./utils";

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchData>{
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