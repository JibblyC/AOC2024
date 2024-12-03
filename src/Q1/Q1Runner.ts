import * as fs from "fs";
import path from "path";
import { part1, part2 } from "./Q1Functions";

const filePath: string = path.resolve(__dirname, "Q1_realData.txt");
const arrayOfInput: string[] = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

console.log("Part1 : " + part1(arrayOfInput));

console.log("Part2 : " + part2(arrayOfInput));
