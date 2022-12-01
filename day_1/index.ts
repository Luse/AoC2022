const file = await Deno.readTextFile("./input.txt")

type resultObject = {
  [key: number]: string;
};

export const countCalories = (input: string) => {
  const sections = input.split(/\r?\n/);
  let current = 0;
  const ordered = sections.reduce((acc, val) => {
    if (val === "") {
      current = current + 1;
    } else {
      acc[current as keyof resultObject] =
        (parseInt(
          acc[current as keyof resultObject]
            ? acc[current as keyof resultObject]
            : "0",
        ) + parseInt(val)).toString();
    }

    return acc;
  }, {} as resultObject);
  const asNumberArray = Object.values(ordered).map(a => parseInt(a))
  return Math.max(...asNumberArray).toString();
};

console.log(countCalories(file))