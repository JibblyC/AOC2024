import { part1, part2 } from "../../src/Q4/Q4Functions";
import { describe, it, expect } from "vitest";
import * as fs from "fs";
import path from "path";

const filePath: string = path.resolve(__dirname, "Q4TestData.txt");
const arrayOfInput: string[] = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

describe("Question4 - Part1 - AOC2024", () => {
  it("Should return the numeric value 18", () => {
    const result = part1(arrayOfInput);
    expect(result).toBe(18);
  });
});

describe("Question4 - Part2 - AOC2024", () => {
  it("Should return the numeric value 9", () => {
    const result = part2(arrayOfInput);
    expect(result).toBe(9);
  });
});
