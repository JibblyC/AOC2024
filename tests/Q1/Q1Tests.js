"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q1_functions_1 = require("../../src/Q1/Q1_functions");
const fileParsingFunctions_1 = require("utils/fileParsingFunctions");
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.resolve(__dirname, "Q1TestData.txt");
const arrayOfInput = (0, fileParsingFunctions_1.getArrayOfStrings)(filePath);
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
