"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileParsingFunctions_1 = require("utils/fileParsingFunctions");
var pathToFile = "tests/util/sampletextData.txt";
describe("getArrayOfStrings", function () {
    it("should return an array", function () {
        var result = (0, fileParsingFunctions_1.getArrayOfStrings)(pathToFile);
        expect(Array.isArray(result)).toBe(true);
    });
});
