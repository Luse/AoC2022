const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

export const extractInitalStack = (input: string): string[][] => {
  const sections = input.split(/\r?\n/);
  const returnArr: string[][] = [];
  sections.forEach((section) => {
    if (section === "") return;
    const sectionContainsBrackets = section.includes("[");
    if (!sectionContainsBrackets) return;
    const currentSection: string[] = [];
    section.split("    ").forEach((char) => {
      char.split(" ").forEach((char) => {
        const findCharWithBrackets = char.match(/\[(.*?)\]/);
        if (findCharWithBrackets) {
          currentSection.push(char);
        } else {
          currentSection.push("-");
        }
      });
    });
    returnArr.push(currentSection);
  });
  return returnArr;
};

export const extractInstructions = (input: string): string[] => {
  const sections = input.split(/\r?\n/);
  const returnArr: string[] = [];
  sections.forEach((section) => {
    if (section === "") return;
    const sectionContainsBrackets = section.includes("[");
    if (sectionContainsBrackets) return;
    returnArr.push(section);
  });
  return returnArr;
};

type moveInstruction = {
  amount: number;
  from: number;
  to: number;
};
export const translateInstructionsToMoves = (
  instructions: string[],
): moveInstruction[] => {
  const returnArr: moveInstruction[] = [];
  instructions.forEach((instruction) => {
    const instructionArr = instruction.split(" ");
    try {
      returnArr.push({
        amount: parseInt(instructionArr[1]),
        from: parseInt(instructionArr[3]),
        to: parseInt(instructionArr[5]),
      });
    } catch (e) {
      console.error(e);
    }
  });
  return returnArr;
};

const fillRowWithEmptySlots = (amount: number): string[] => {
  const returnArr: string[] = [];
  for (let i = 0; i < amount; i++) {
    returnArr.push("-");
  }
  return returnArr;
};

export const executeInstructions = (
  initalStack: string[][],
  moves: moveInstruction[],
): string[][] => {
  const returnArr = initalStack;
  moves.forEach((move) => {
    const from = move.from - 1;
    const to = move.to - 1;
    const amount = move.amount;
    for (let i = 0; i < amount; i++) {
      let destinationIsFilled = returnArr.map((row) => row[to]).findIndex((
        char,
      ) => char !== "-");
      if (destinationIsFilled === -1) {
        destinationIsFilled = returnArr.length;
      }
      if (destinationIsFilled && !returnArr[0].every((char) => char === "-")) {
        returnArr.unshift(fillRowWithEmptySlots(returnArr[0].length));
      }
      let firstFilledSlot = returnArr.map((row) => row[from]).findIndex((
        char,
      ) => char !== "-");
      console.table(returnArr);
      console.log("from: ", from, firstFilledSlot);

      console.log("to: ", to, destinationIsFilled);

      if (firstFilledSlot === -1) {
        firstFilledSlot = returnArr.length;
      }

      const firstEmptySlot = returnArr.map((row) => row[to]).reverse().findIndex((
        char,
      ) => char === "-");

      returnArr[firstEmptySlot][to] = returnArr[firstFilledSlot][from];

      returnArr[firstFilledSlot][from] = "-";
      console.table(returnArr);
    }
  });

  return returnArr;
};

export const firstStar = (file: string): string => {
  // const stack = extractInitalStack(file);
  // const instructions = extractInstructions(file);
  // const moves = translateInstructionsToMoves(instructions);
  // const finalStack = executeInstructions(stack, moves);

  // console.table(finalStack);
  return "foo";
};

export const secondStar = (file: string): any => {
  return "bar";
};

console.log("first ⭐: ", firstStar(await fetchFile()));
console.log("second ⭐: ", secondStar(await fetchFile()));
