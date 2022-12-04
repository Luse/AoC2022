const fetchFile = async (): Promise<string> => (
  await Deno.readTextFile("./input.txt")
);

export const explcitlyWriteRange = (range: string): Array<Array<string>> => {
  const sections = range.split(/\r?\n/);
  const returnArr: string[][] = [];
  sections.forEach((_pairs) => {
    if (_pairs === "") return;
    const currentPair: string[] = [];

    _pairs.split(",").forEach((pair) => {
      const localPair: string[] = [];
      const [start, end] = pair.split("-");
      for (let i = Number(start); i <= Number(end); i++) {
        if (i.toString().length === 1) {
          localPair.push(`0${i}`);
        } else {
          localPair.push(i.toString());
        }
      }
      currentPair.push(localPair.join(","));
    });
    returnArr.push(currentPair);
  });

  return returnArr;
};

type totalOverlapObj = {
  totalAmountOfOverlaps: number;
};
export const findOverlappingPairs = (
  ranges: Array<Array<string>>,
): totalOverlapObj => {
  const returnObj: totalOverlapObj = {
    totalAmountOfOverlaps: 0,
  };
  ranges.forEach((range) => {
    const first = range[0];
    const second = range[1];
    if (first.includes(second) || second.includes(first)) {
      returnObj.totalAmountOfOverlaps++;
    }
  });

  return returnObj;
};

export const findAnyOverlappingPairs = (
  ranges: Array<Array<string>>,
): totalOverlapObj => {
  const returnObj: totalOverlapObj = {
    totalAmountOfOverlaps: 0,
  };
  ranges.forEach((range) => {
    const first = range[0].split(",");
    const second = range[1].split(",");
    const includes = first.some((firstNum) => (second.includes(firstNum)));
    if (includes) {
      returnObj.totalAmountOfOverlaps++;
    }
  });
  return returnObj;
};

export const firstStar = (file: string): number => {
  const ranges = explcitlyWriteRange(file);
  const overlapedRanges = findOverlappingPairs(ranges);
  return overlapedRanges.totalAmountOfOverlaps;
};

export const secondStar = (file: string): number => {
  const ranges = explcitlyWriteRange(file);
  const overlapedRanges = findAnyOverlappingPairs(ranges);
  return overlapedRanges.totalAmountOfOverlaps;
};

console.log("first ⭐: ", firstStar(await fetchFile()));
console.log("second ⭐: ", secondStar(await fetchFile()));
