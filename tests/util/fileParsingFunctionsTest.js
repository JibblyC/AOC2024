"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileParsingFunctions_1 = require("utils/fileParsingFunctions");
const pathToFile = "./tests/util/sampletextData.txt";
describe("getArrayOfStrings", () => {
    it("should return an array", () => {
        const result = (0, fileParsingFunctions_1.getArrayOfStrings)(pathToFile);
        expect(Array.isArray(result)).toBe(true);
    });
});
