"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q1_functions_1 = require("../../src/Q1/Q1_functions");
const fileParsingFunctions_1 = require("utils/fileParsingFunctions");
const arrayOfInput = (0, fileParsingFunctions_1.getArrayOfStrings)("./tests/Q1/Q1TestData.txt");
describe("Question1 - Part1 - AOC2024", () => {
    it("Should return the numeric value 11", () => {
        const result = (0, Q1_functions_1.part1)(arrayOfInput);
        expect(result).toBe(11);
    });
});
describe("Question1 - Part2 - AOC2024", () => {
    it("Should return the numeric value 31", () => {
        const result = (0, Q1_functions_1.part2)(arrayOfInput);
        expect(result).toBe(31);
    });
});
