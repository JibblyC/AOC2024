import { getArrayOfStrings } from "../../src/utils/fileParsingFunctions";
import { describe, it, expect } from "vitest";

const pathToFile: string = "./tests/util/sampletextData.txt";

describe("getArrayOfStrings", () => {
  it("should return an array", () => {
    const result = getArrayOfStrings(pathToFile);
    expect(Array.isArray(result)).toBe(true);
  });
});
