const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

export const firstStar = (file: string): any => {
  return "foo";
};

export const secondStar = (file: string): any => {
  return "bar";
};

console.log("first ⭐: ", firstStar(await fetchFile()));
console.log("second ⭐: ", secondStar(await fetchFile()));
