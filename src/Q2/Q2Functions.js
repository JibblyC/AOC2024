"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.part1 = part1;
exports.part2 = part2;
const isDescCheck = (num, i, arr) => i == arr.length - 1 || num > arr[i + 1];
const isAscCheck = (num, i, arr) => i == arr.length - 1 || num < arr[i + 1];
const isSafeDist = (num, i, arr) => i == arr.length - 1 || Math.abs(num - arr[i + 1]) <= 3;
function isSafe(listToCheck) {
    let inSequence = listToCheck.every(isDescCheck);
    if (!inSequence) {
        inSequence = listToCheck.every(isAscCheck);
    }
    if (inSequence) {
        if (listToCheck.every(isSafeDist)) {
            return true;
        }
    }
    return false;
}
function part1(input) {
    var _a;
    let totalCount = 0;
    for (const str of input) {
        const listofNums = ((_a = str.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(Number)) || [];
        if (isSafe(listofNums))
            totalCount++;
    }
    return totalCount;
}
function part2(input) {
    var _a;
    let totalCount = 0;
    for (const str of input) {
        const listofNums = ((_a = str.match(/\d+/g)) === null || _a === void 0 ? void 0 : _a.map(Number)) || [];
        if (isSafe(listofNums)) {
            totalCount++;
        }
        else {
            //Remove an element and retest
            for (let index = 0; index < listofNums.length; index++) {
                if (isSafe([
                    ...listofNums.slice(0, index),
                    ...listofNums.slice(index + 1),
                ])) {
                    totalCount++;
                    break;
                }
            }
        }
    }
    return totalCount;
}
