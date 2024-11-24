const fs = require("fs");

export function getArrayOfStrings(pathToFile: string): string[] {
  var inputOfStrings: string[] = [];
  const data = fs.readFileSync(pathToFile, "utf8");
  inputOfStrings = data.split(/\r?\n/);
  return inputOfStrings;
}
