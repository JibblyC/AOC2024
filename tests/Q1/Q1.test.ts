import { part1, part2 } from "../../src/Q1/Q1Functions";
import { describe, it, expect } from "vitest";
import * as fs from "fs";
import path from "path";

const filePath: string = path.resolve(__dirname, "Q1TestData.txt");
const arrayOfInput: string[] = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

describe("Question1 - Part1 - AOC2024", () => {
  it("Should return the numeric value 11", () => {
    const result = part1(arrayOfInput);
    expect(result).toBe(11);
  });
});

describe("Question1 - Part2 - AOC2024", () => {
  it("Should return the numeric value 31", () => {
    const result = part2(arrayOfInput);
    expect(result).toBe(31);
  });
});
