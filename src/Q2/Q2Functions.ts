const isDescCheck = (num: number, i: number, arr: number[]) =>
  i == arr.length - 1 || num > arr[i + 1];

const isAscCheck = (num: number, i: number, arr: number[]) =>
  i == arr.length - 1 || num < arr[i + 1];

const isSafeDist = (num: number, i: number, arr: number[]) =>
  i == arr.length - 1 || Math.abs(num - arr[i + 1]) <= 3;

function isSafe(listToCheck: number[]): boolean {
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

export function part1(input: string[]): number {
  let totalCount = 0;
  for (const str of input) {
    const listofNums: number[] = str.match(/\d+/g)?.map(Number) || [];
    if (isSafe(listofNums)) totalCount++;
  }
  return totalCount;
}

export function part2(input: string[]): number {
  let totalCount = 0;
  for (const str of input) {
    const listofNums: number[] = str.match(/\d+/g)?.map(Number) || [];
    if (isSafe(listofNums)) {
      totalCount++;
    } else {
      //Remove an element and retest
      for (let index = 0; index < listofNums.length; index++) {
        if (
          isSafe([
            ...listofNums.slice(0, index),
            ...listofNums.slice(index + 1),
          ])
        ) {
          totalCount++;
          break;
        }
      }
    }
  }
  return totalCount;
}
