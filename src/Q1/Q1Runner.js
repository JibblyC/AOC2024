"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileParsingFunctions_1 = require("utils/fileParsingFunctions");
const path_1 = __importDefault(require("path"));
const Q1Functions_1 = require("./Q1Functions");
const filePath = path_1.default.resolve(__dirname, "Q1_realData.txt");
const arrayOfInput = (0, fileParsingFunctions_1.getArrayOfStrings)(filePath);
console.log("Part1 : " + (0, Q1Functions_1.part1)(arrayOfInput));
console.log("Part2 : " + (0, Q1Functions_1.part2)(arrayOfInput));
