"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Q2Functions_1 = require("../../src/Q2/Q2Functions");
const fileParsingFunctions_1 = require("utils/fileParsingFunctions");
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.resolve(__dirname, "Q2TestData.txt");
const arrayOfInput = (0, fileParsingFunctions_1.getArrayOfStrings)(filePath);
describe("Question2 - Part1 - AOC2024", () => {
    it("Should return the numeric value 2", () => {
        const result = (0, Q2Functions_1.part1)(arrayOfInput);
        expect(result).toBe(2);
    });
});
describe("Question2 - Part2 - AOC2024", () => {
    it("Should return the numeric value 4", () => {
        const result = (0, Q2Functions_1.part2)(arrayOfInput);
        expect(result).toBe(4);
    });
});
