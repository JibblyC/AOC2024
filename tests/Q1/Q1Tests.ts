import { part1, part2 } from "../../src/Q1/Q1_functions";
import { getArrayOfStrings } from "utils/fileParsingFunctions";

const arrayOfInput: string[] = getArrayOfStrings("./tests/Q1/Q1TestData.txt");

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
