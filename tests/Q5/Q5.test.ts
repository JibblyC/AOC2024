import { part1, part2 } from "../../src/Q5/Q5Functions";
import { describe, it, expect } from "vitest";
import * as fs from "fs";
import path from "path";

const filePath: string = path.resolve(__dirname, "Q5TestData.txt");
const arrayOfInput: string[] = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

describe("Question5 - Part1 - AOC2024", () => {
  it("Should return the numeric value 143", () => {
    const result = part1(arrayOfInput);
    expect(result).toBe(143);
  });
});

describe("Question5 - Part2 - AOC2024", () => {
  it("Should return the numeric value 123", () => {
    const result = part2(arrayOfInput);
    expect(result).toBe(123);
  });
});
