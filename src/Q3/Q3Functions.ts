export function part1(input: string[]): number {
  let totalCount = 0;
  for (const str of input) {
    const arrayOfMults: string[] = str.match(/(mul\(\d+\,\d+\))/g) ?? [];
    totalCount = arrayOfMults
      .map((element) => element.match(/\d+/g)?.map(Number) ?? [])
      .filter((numbers) => numbers.length >= 2)
      .reduce((sum, numbers) => sum + numbers[0] * numbers[1], 0);
  }
  return totalCount;
}

export function part2(input: string[]): number {
  let totalCount = 0;
  let processing: boolean = true;
  for (const str of input) {
    const arrayOfMults: string[] =
      str.match(/(mul\(\d+\,\d+\))|(don\'t\(\))|(do\(\))/g) ?? [];

    for (const element of arrayOfMults) {
      if (element.match(/(don\'t\(\))/g)) {
        processing = false;
      } else if (element.match(/(do\(\))/g)) {
        processing = true;
      } else {
        if (processing) {
          const extractedNumbers: number[] =
            element.match(/\d+/g)?.map(Number) ?? [];
          totalCount += extractedNumbers[0] * extractedNumbers[1];
        }
      }
    }
  }
  return totalCount;
}
