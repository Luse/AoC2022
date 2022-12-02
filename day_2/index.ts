const file = await Deno.readTextFile("./input.txt");

type symbolValueObject = {
  type: Types;
  value: number;
  symbol: string;
  reqOutcome: Outcomes;
};

enum Types {
  ROCK = "Rock",
  PAPER = "Paper",
  SCISSORS = "Scissors",
}

enum Outcomes {
  WIN = "Win",
  LOSE = "Lose",
  DRAW = "Draw",
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
        symbol: "✌",
        reqOutcome: Outcomes.LOSE,
      };
    case "B":
    case "Y":
      return {
        type: Types.PAPER,
        value: 2,
        symbol: "✋",
        reqOutcome: Outcomes.DRAW,
      };
    case "C":
    case "Z":
      return {
        type: Types.SCISSORS,
        value: 3,
        symbol: "✊",
        reqOutcome: Outcomes.WIN,
      };
    default:
      return null;
  }
};

export const determinePredictedOutcome = (input: string): number => {
  const opponent = determineStringSymbolValue(input[0]);
  const requiredOutcome = determineStringSymbolValue(input[2])?.reqOutcome;
  if (!opponent || !requiredOutcome) {
    return 0;
  }
  switch (requiredOutcome) {
    case Outcomes.DRAW:
      return opponent.value + 3;
    case Outcomes.LOSE:
      switch (opponent.type) {
        case Types.PAPER:
          return 1;
        case Types.SCISSORS:
          return 2;
        case Types.ROCK:
          return 3;
        default:
          return 0;
      }
    case Outcomes.WIN:
      switch (opponent.type) {
        case Types.PAPER:
          return 3 + 6;
        case Types.SCISSORS:
          return 1 + 6;
        case Types.ROCK:
          return 2 + 6;
        default:
          return 0;
      }
    default:
      return 0;
  }
};

export const determineOutcome = (input: string): number => {
  const firstVal = determineStringSymbolValue(input[0]);
  const secondVal = determineStringSymbolValue(input[2]);
  if (firstVal === null || secondVal === null) {
    return 0;
  }
  if (secondVal.type === firstVal.type) {
    return secondVal.value + 3;
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

export const secondStar = (file: string): number => {
  const fileToArray = file.split(/\r?\n/);
  let totalSum = 0;

  fileToArray.forEach((a) => {
    if (determinePredictedOutcome(a) === 0) {
      return;
    }
    const localSum = determinePredictedOutcome(a);
    totalSum = totalSum + localSum;
  });

  return totalSum;
};

console.log("first ⭐: ", firstStar(file));
console.log("second ⭐: ", secondStar(file));
