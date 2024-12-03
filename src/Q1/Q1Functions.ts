import * as fs from "fs";
import path from "path";

const filePath: string = path.resolve(__dirname, "Q1_realData.txt");
const arrayOfInput: string[] = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

const numberSort = (a: number, b: number) => a - b;

const countOccurrences = (arr: number[], target: number): number => {
  return arr.filter((num) => num === target).length;
};

export function part1(input: string[]): number {
  let leftList: number[] = [];
  let rightList: number[] = [];
  let totalNumber = 0;

  for (const str of input) {
    let split: string[] = str.split(" ");
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

export function part2(input: string[]): number {
  let leftList: number[] = [];
  let rightList: number[] = [];
  let totalNumber = 0;

  for (const str of input) {
    let split: string[] = str.split(" ");
    leftList.push(Number(split[0]));
    rightList.push(Number(split[3]));
  }

  for (const targetNum of leftList) {
    totalNumber += countOccurrences(rightList, targetNum) * targetNum;
  }

  return totalNumber;
}

console.log("Part1 : " + part1(arrayOfInput));

console.log("Part2 : " + part2(arrayOfInput));
