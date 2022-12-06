const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

export const extractInitalStacks = (input: string): string[][] => {
  const sections = input.split(/\r?\n/);
  const returnArr: string[][] = [];
  sections.forEach( e => {
      const isInstruction = !e.includes("[");
      if (isInstruction) return;
    e.split("    ").forEach( e => {
      returnArr.push(e.split(" "));
    });
  });
  
return returnArr; 
}
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
