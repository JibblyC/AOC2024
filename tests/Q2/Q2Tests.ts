import { part1, part2 } from "../../src/Q2/Q2Functions";
import { getArrayOfStrings } from "utils/fileParsingFunctions";
import path from "path";

const filePath: string = path.resolve(__dirname, "Q2TestData.txt");
const arrayOfInput: string[] = getArrayOfStrings(filePath);

describe("Question2 - Part1 - AOC2024", () => {
  it("Should return the numeric value 2", () => {
    const result = part1(arrayOfInput);
    expect(result).toBe(2);
  });
});

describe("Question2 - Part2 - AOC2024", () => {
  it("Should return the numeric value 4", () => {
    const result = part2(arrayOfInput);
    expect(result).toBe(4);
  });
});
