type Point = {
  x: number;
  y: number;
};

const directionArray: Point[] = [];

function populateDirectionArray() {
  directionArray.push({ x: 1, y: 0 }); //right
  directionArray.push({ x: -1, y: 0 }); //left
  directionArray.push({ x: 0, y: 1 }); //up
  directionArray.push({ x: 0, y: -1 }); //down
  directionArray.push({ x: 1, y: 1 }); // right/up
  directionArray.push({ x: 1, y: -1 }); // right/down
  directionArray.push({ x: -1, y: 1 }); // left/up
  directionArray.push({ x: -1, y: -1 }); // left/down
}

function generate2DArrayWithPadding(input: string[]): string[][] {
  let arrayToReturn: string[][] = [];

  let borderArray: string[] = [];

  for (let index = 0; index < input[0].length + 2; index++) {
    borderArray.push(".");
  }
  arrayToReturn.push(borderArray);

  for (const element of input) {
    let tempArray: string[] = [];
    tempArray.push(".");
    for (let index = 0; index < element.length; index++) {
      tempArray.push(element.charAt(index));
    }
    tempArray.push(".");
    arrayToReturn.push(tempArray);
  }
  arrayToReturn.push(borderArray);

  return arrayToReturn;
}

export function part1(arrayOfInput: string[]): number {
  let totalCount = 0;
  populateDirectionArray();
  const traverseMap: string[][] = generate2DArrayWithPadding(arrayOfInput);

  for (let xIndex = 1; xIndex < traverseMap.length - 1; xIndex++) {
    for (let yIndex = 1; yIndex < traverseMap[xIndex].length - 1; yIndex++) {
      let currentValueToCheck: string = traverseMap[xIndex][yIndex];
      if (currentValueToCheck === "X") {
        for (const point of directionArray) {
          let currentX: number = xIndex + point.x;
          let currenty: number = yIndex + point.y;
          if (traverseMap[currentX][currenty] === "M") {
            currentX += point.x;
            currenty += point.y;
            if (traverseMap[currentX][currenty] === "A") {
              currentX += point.x;
              currenty += point.y;
              if (traverseMap[currentX][currenty] === "S") {
                totalCount += 1;
              }
            }
          }
        }
      }
    }
  }
  return totalCount;
}

const rightUp: Point = { x: 1, y: 1 }; // right/up
const rightDown: Point = { x: 1, y: -1 }; // right/down
const leftUp: Point = { x: -1, y: 1 }; // left/up
const leftDown: Point = { x: -1, y: -1 }; // left/down

export function part2(arrayOfInput: string[]): number {
  let totalCount = 0;
  populateDirectionArray();
  const traverseMap: string[][] = generate2DArrayWithPadding(arrayOfInput);

  for (let xIndex = 1; xIndex < traverseMap.length - 1; xIndex++) {
    for (let yIndex = 1; yIndex < traverseMap[xIndex].length - 1; yIndex++) {
      let currentValueToCheck: string = traverseMap[xIndex][yIndex];
      if (currentValueToCheck === "A") {
        const axisOne: string =
          traverseMap[xIndex + leftUp.x][yIndex + leftUp.y] +
          currentValueToCheck +
          traverseMap[xIndex + rightDown.x][yIndex + rightDown.y];
        const axisTwo: string =
          traverseMap[xIndex + leftDown.x][yIndex + leftDown.y] +
          currentValueToCheck +
          traverseMap[xIndex + rightUp.x][yIndex + rightUp.y];

        if (axisOne === "MAS" || axisOne === "SAM") {
          if (axisTwo === "MAS" || axisTwo === "SAM") {
            totalCount++;
          }
        }
      }
    }
  }
  return totalCount;
}
