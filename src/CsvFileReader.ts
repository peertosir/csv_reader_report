import fs from "fs";


export abstract class CsvFileReader<T> {

    data: T[] = [];

    constructor(public filename: string) {
    }

    abstract mapRow(arr: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.filename, {encoding: "utf-8"})
            .split("\n")
            .map((item: string): string[] => item.split(","))
            .map(this.mapRow);
    }
}