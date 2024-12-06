type beforeAfterValues = {
  before: Set<number>;
  after: Set<number>;
};

const numberTracker: Map<number, beforeAfterValues> = new Map();
const updatesList: number[][] = [];

function generateMapOfValues(arrayOfInput: string[]) {
  if (numberTracker.size > 0) {
    return;
  }

  for (const element of arrayOfInput) {
    let numbers: number[];
    if (element.includes("|")) {
      numbers = element.split("|").map(Number);
      let leftSide = numbers[0];
      let rightSide = numbers[1];
      if (!numberTracker.has(leftSide)) {
        numberTracker.set(leftSide, {
          before: new Set<number>(),
          after: new Set<number>(),
        }); // Initialize the set if key doesn't exist
      }
      if (!numberTracker.has(rightSide)) {
        numberTracker.set(rightSide, {
          before: new Set<number>(),
          after: new Set<number>(),
        }); // Initialize set array if key doesn't exist
      }
      numberTracker.get(leftSide)!.after.add(rightSide);
      numberTracker.get(rightSide)!.before.add(leftSide);
    } else {
      numbers = element.split(",").map(Number);
      updatesList.push(numbers);
    }
  }
}

function checkForCorrectList(currentList: number[]): boolean {
  for (let index = 0; index < currentList.length; index++) {
    //Split the array in half to check both sides
    const leftSide = currentList.slice(0, index);
    const rightSide = currentList.slice(index);

    const keyToCheck: number = currentList[index];
    for (const left of leftSide) {
      if (numberTracker.get(keyToCheck)?.after.has(left)) {
        return false;
      }
    }

    for (const right of rightSide) {
      if (numberTracker.get(keyToCheck)?.before.has(right)) {
        return false;
      }
    }
  }
  return true;
}

function swapBadValues(currentList: number[]): number[] {
  for (let index = 0; index < currentList.length; index++) {
    //Split the array in half to check both sides
    const leftSide = currentList.slice(0, index);
    const rightSide = currentList.slice(index);

    const keyToCheck: number = currentList[index];
    for (const left in leftSide) {
      if (numberTracker.get(keyToCheck)?.after.has(leftSide[left])) {
        [currentList[index], currentList[left]] = [
          currentList[left],
          currentList[index],
        ];
        return currentList;
      }
    }

    for (let right = 0; right < rightSide.length; right++) {
      if (numberTracker.get(keyToCheck)?.before.has(rightSide[right])) {
        [currentList[index], currentList[index + right]] = [
          currentList[index + right],
          currentList[index],
        ];
        return currentList;
      }
    }
  }
  return currentList;
}

export function part1(arrayOfInput: string[]): number {
  let totalCount = 0;
  generateMapOfValues(arrayOfInput);

  for (let index = 0; index < updatesList.length; index++) {
    const listToCheck: number[] = updatesList[index];
    if (checkForCorrectList(listToCheck)) {
      totalCount += listToCheck[Math.floor(listToCheck.length / 2)];
    }
  }

  return totalCount;
}

export function part2(arrayOfInput: string[]): number {
  let totalCount = 0;
  generateMapOfValues(arrayOfInput);

  for (let index = 0; index < updatesList.length; index++) {
    let listToCheck: number[] = updatesList[index];
    if (!checkForCorrectList(listToCheck)) {
      while (!checkForCorrectList(listToCheck)) {
        listToCheck = swapBadValues(listToCheck);
      }
      totalCount += listToCheck[Math.floor(listToCheck.length / 2)];
    }
  }
  return totalCount;
}
