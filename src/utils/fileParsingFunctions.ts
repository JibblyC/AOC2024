import * as fs from "fs";

export function getArrayOfStrings(pathToFile: string): string[] {
  const data = fs.readFileSync(pathToFile, "utf8");
  return data.split(/\r?\n/);
}
