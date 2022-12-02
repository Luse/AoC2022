const file = await Deno.readTextFile("./input.txt");

type symbolValueObject = {
  type: string;
  value: number;
};

enum Types {
  ROCK = "Rock",
  PAPER = "Paper",
  SCISSORS = "Scissors",
}

const determineStringSymbolValue = (
  input: string,
): symbolValueObject | null => {
  switch (input) {
    case "A":
    case "X":
      return {
        type: Types.ROCK,
        value: 1,
      };
    case "B":
    case "Y":
      return {
        type: Types.PAPER,
        value: 2,
      };
    case "C":
    case "Z":
      return {
        type: Types.SCISSORS,
        value: 3,
      };
    default:
      return null;
  }
};

export const determineOutcome = (input: string): number => {
  const firstVal = determineStringSymbolValue(input[0]);
  const secondVal = determineStringSymbolValue(input[2]);
  if (firstVal === null || secondVal === null) {
    return 0;
  }
  if (secondVal.type === firstVal.type) {
    return secondVal.value + firstVal.value;
  }

  if (secondVal.type === Types.SCISSORS) {
    if (firstVal.type === Types.PAPER) {
      return secondVal.value + 6;
    } else {
      return secondVal.value;
    }
  }
  if (secondVal.type === Types.ROCK) {
    if (firstVal.type === Types.SCISSORS) {
      return secondVal.value + 6;
    } else {
      return secondVal.value;
    }
  }
  if (secondVal.type === Types.PAPER) {
    if (firstVal.type === Types.ROCK) {
      return secondVal.value + 6;
    } else {
      return secondVal.value;
    }
  }

  return 0;
};

export const firstStar = (file: string): number => {
  const fileToArray = file.split(/\r?\n/);
  let totalSum = 0;

  fileToArray.forEach((a) => {
    if (determineOutcome(a) === 0) {
      return;
    }
    const localSum = determineOutcome(a);
    totalSum = totalSum + localSum;
  });

  return totalSum;
};

console.log("first ⭐: ", firstStar(file));
//console.log("second ⭐: ", secondStar(file));
