import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
  explcitlyWriteRange,
  findAnyOverlappingPairs,
  findOverlappingPairs,
  firstStar,
  secondStar,
} from "./index.ts";

Deno.test("first star", () => {
  const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  const when = firstStar(input);
  assertEquals(when, 2);
});
Deno.test("second star", () => {
const input = `2-4,6-8
  2-3,4-5
  5-7,7-9
  2-8,3-7
  6-6,4-6
  2-6,4-8`;
  const when = secondStar(input);
  assertEquals(when, 4);
});
Deno.test("write whole range", () => {
  const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  const when = explcitlyWriteRange(input);
  assertArrayIncludes(when, [
    [
      "02,03,04",
      "06,07,08",
    ],
    [
      "02,03",
      "04,05",
    ],
    [
      "05,06,07",
      "07,08,09",
    ],
    [
      "02,03,04,05,06,07,08",
      "03,04,05,06,07",
    ],
    [
      "06",
      "04,05,06",
    ],
    [
      "02,03,04,05,06",
      "04,05,06,07,08",
    ],
  ]);
});
Deno.test("find overlaped pairs", () => {
  const input = [
    [
      "2,3,4",
      "6,7,8",
    ],
    [
      "2,3",
      "4,5",
    ],
    [
      "5,6,7",
      "7,8,9",
    ],
    [
      "2,3,4,5,6,7,8",
      "3,4,5,6,7",
    ],
    [
      "6",
      "4,5,6",
    ],
    [
      "2,3,4,5,6",
      "4,5,6,7,8",
    ],
  ];
  const when = findOverlappingPairs(input);
  assertEquals(when, {
    totalAmountOfOverlaps: 2,
  });
});
Deno.test("find overlaped pairs", () => {
  const input = [
    [
      "02,03,04",
      "06,07,08",
    ],
    [
      "02,03",
      "04,05",
    ],
    [
      "05,06,07",
      "07,08,09",
    ],
    [
      "02,03,04,05,06,07,08",
      "03,04,05,06,07",
    ],
    [
      "06",
      "04,05,06",
    ],
    [
      "02,03,04,05,06",
      "04,05,06,07,08",
    ],
  ];
  const when = findAnyOverlappingPairs(input);
  assertEquals(when, {
    totalAmountOfOverlaps: 4,
  });
});
