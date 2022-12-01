const file = await Deno.readTextFile("./input.txt");

type resultObject = {
  [key: number]: string;
};

const setup = (input: string) => {
  const sections = input.split(/\r?\n/);
  let current = 0;
  const parsed = sections.reduce((acc, val) => {
    if (val === "") {
      current = current + 1;
    } else {
      acc[current as keyof resultObject] = (parseInt(
        acc[current as keyof resultObject]
          ? acc[current as keyof resultObject]
          : "0",
      ) + parseInt(val)).toString();
    }

    return acc;
  }, {} as resultObject);
  return Object.values(parsed).map((a) => parseInt(a));
};

export const firstStar = (input: string) => {
  const parsed = setup(input);

  return Math.max(...parsed);
};

export const secondStar = (input: string) => {
  const parsed = setup(input);
  let total = 0;
  const topThree = parsed.sort(function (a, b) {
    return a - b;
  }).reverse().slice(0, 3);

  topThree.forEach((a) => total = total + a);
  return total;
};

console.log("first ⭐: ", firstStar(file));
console.log("second ⭐: ", secondStar(file));
