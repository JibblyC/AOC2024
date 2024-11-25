"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayOfStrings = getArrayOfStrings;
const fs = require("fs");
function getArrayOfStrings(pathToFile) {
    var inputOfStrings = [];
    const data = fs.readFileSync(pathToFile, "utf8");
    inputOfStrings = data.split(/\r?\n/);
    return inputOfStrings;
}
