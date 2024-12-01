"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.part1 = part1;
exports.part2 = part2;
const numberSort = (a, b) => a - b;
const countOccurrences = (arr, target) => {
    return arr.filter((num) => num === target).length;
};
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
