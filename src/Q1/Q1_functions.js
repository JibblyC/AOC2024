"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.part1 = part1;
exports.part2 = part2;
function part1(input) {
    let leftList = [];
    let rightList = [];
    let totalNumber = 0;
    for (const str of input) {
        let split = str.split(" ");
        leftList.push(Number(split[0]));
        rightList.push(Number(split[3]));
    }
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);
    for (let index = 0; index < leftList.length; index++) {
        totalNumber += Math.abs(leftList[index] - rightList[index]);
    }
    return totalNumber;
}
function part2(input) {
    let leftList = [];
    let rightList = [];
    let totalNumber = 0;
    let countOccurrences = (arr, target) => {
        return arr.filter((num) => num === target).length;
    };
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
