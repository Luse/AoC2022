const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

export const findIndexOfFirstNonReapatingCharakter = (
  input: string,
): number => {
  const chars = input.split("");
  for (let i = 0; i < chars.length; i++) {
    if (i < 4) continue;
    const precidingChars = chars.slice(i - 4, i);
    const precidingCharsContainsDuplicates = precidingChars.some(
      (c, index) => precidingChars.indexOf(c) !== index,
    );

    if (!precidingCharsContainsDuplicates) {
      return i;
    }
  }
  return -1;
};

export const findIndexOfFirstOfFourteenNonReapatingCharakters = (
  input: string,
): number => {
  const chars = input.split("");
  for (let i = 0; i < chars.length; i++) {
    if (i < 14) continue;
    const precidingChars = chars.slice(i - 14, i);
    const precidingCharsContainsDuplicates = precidingChars.some(
      (c, index) => precidingChars.indexOf(c) !== index,
    );

    if (!precidingCharsContainsDuplicates) {
      return i;
    }
  }
  return -1;
};

export const firstStar = (file: string): number => {
  return findIndexOfFirstNonReapatingCharakter(file);
};

export const secondStar = (file: string): any => {
  return findIndexOfFirstOfFourteenNonReapatingCharakters(file);
};

console.log("first ⭐: ", firstStar(await fetchFile()));
console.log("second ⭐: ", secondStar(await fetchFile()));
