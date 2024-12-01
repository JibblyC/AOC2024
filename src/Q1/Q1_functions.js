"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.part1 = part1;
exports.part2 = part2;
const fileParsingFunctions_1 = require("utils/fileParsingFunctions");
const path_1 = __importDefault(require("path"));
const numberSort = (a, b) => a - b;
const countOccurrences = (arr, target) => {
    return arr.filter((num) => num === target).length;
};
const filePath = path_1.default.resolve(__dirname, "Q1_realData.txt");
function part1(input) {
    let leftList = [];
    let rightList = [];
    let totalNumber = 0;
    for (const str of input) {
        let split = str.split(" ");
        leftList.push(Number(split[0]));
        rightList.push(Number(split[3]));
    }
    leftList.sort(numberSort);
    rightList.sort(numberSort);
    for (let index = 0; index < leftList.length; index++) {
        totalNumber += Math.abs(leftList[index] - rightList[index]);
    }
    return totalNumber;
}
function part2(input) {
    let leftList = [];
    let rightList = [];
    let totalNumber = 0;
    for (const str of input) {
        let split = str.split(" ");
        leftList.push(Number(split[0]));
        rightList.push(Number(split[3]));
    }
    for (const targetNum of leftList) {
        totalNumber += countOccurrences(rightList, targetNum) * targetNum;
    }
    return totalNumber;
}
const arrayOfInput = (0, fileParsingFunctions_1.getArrayOfStrings)(filePath);
console.log("Part1 : " + part1(arrayOfInput));
console.log("Part2 : " + part2(arrayOfInput));
