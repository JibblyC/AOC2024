import { part1, part2 } from "../../src/Q3/Q3Functions";
import { describe, it, expect } from "vitest";

const part1Input: string[] =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))".split(
    /\r?\n/
  );

describe("Question3 - Part1 - AOC2024", () => {
  it("Should return the numeric value 161", () => {
    const result = part1(part1Input);
    expect(result).toBe(161);
  });
});

const part2Input: string[] =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))".split(
    /\r?\n/
  );

describe("Question3 - Part2 - AOC2024", () => {
  it("Should return the numeric value 48", () => {
    const result = part2(part2Input);
    expect(result).toBe(48);
  });
});
