const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

export const splitString = (input: string): string[] => {
  const firstCompoartment = input.slice(0, input.length / 2);
  const secondCompartment = input.slice(input.length / 2);
  return [firstCompoartment, secondCompartment];
};

export const splitIntoGroups = (input: string): Array<Array<string>> => {
  const sections = input.split(/\r?\n/);
  const returnArr: string[][] = [];
  sections.forEach((a, index) => {
    if ((index % 3 === 0)) {
      returnArr.push([a, sections[index + 1], sections[index + 2]]);
    }
  });
  return returnArr;
};

export const findCommonIteminArray = (input: string[]): string => {
  const duplicateLetter = input[0].split("").reduce((acc, current) => {
    const expr = new RegExp(current);
    const contains1 = expr.test(input[1]);
    const contains2 = expr.test(input[2]);
    if (contains1 && contains2) {
      acc = current;
    }
    return acc;
  }, "");
  return duplicateLetter;
};

export const findDuplicateLetters = (input: string[]): string => {
  const secondHalf = input[1];
  const duplicateLetter = input[0].split("").reduce((acc, current) => {
    const expr = new RegExp(current);
    const contains = expr.test(secondHalf);
    if (contains) {
      acc = current;
    }
    return acc;
  }, "");
  return duplicateLetter;
};

export const findCharValue = (input: string): number => {
  if (input.charCodeAt(0) > 97) {
    return input.charCodeAt(0) - 96;
  } else {
    //x - 65 + 27
    return input.charCodeAt(0) - 38;
  }
};

export const firstStar = (file: string): number => {
  const sections = file.split(/\r?\n/);
  let current = 0;

  sections.forEach((a) => {
    const split = splitString(a);
    const duplicate = findDuplicateLetters(split);
    const charVal = findCharValue(duplicate);

    current = current + charVal;
  });

  return current;
};
export const secondStar = (file: string): number => {
  const groups = splitIntoGroups(file);
  let current = 0;

  groups.forEach((a) => {
    const commonItem = findCommonIteminArray(a);
    const charVal = findCharValue(commonItem);
    current = current + charVal;
  });

  return current;
};

console.log("first ⭐: ", firstStar(await fetchFile()));
console.log("second ⭐: ", secondStar(await fetchFile()));
