"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayOfStrings = getArrayOfStrings;
const fs = require("fs");
function getArrayOfStrings(pathToFile) {
    const data = fs.readFileSync(pathToFile, "utf8");
    return data.split(/\r?\n/);
}
