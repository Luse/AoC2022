import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
  findCharValue,
  findCommonIteminArray,
  findDuplicateLetters,
  firstStar,
  secondStar,
  splitIntoGroups,
  splitString,
} from "./index.ts";

Deno.test(
  { name: "test input", permissions: { read: false } },
  () => {
    const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    const when = firstStar(input);
    assertEquals(when, 157);
  },
);
Deno.test("should split string into two parts", () => {
  const input1 = "vJrwpWtwJgWrhcsFMMfFFhFp";
  const input2 = "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL";
  const input3 = "PmmdzqPrVvPwwTWBwg";

  const when1 = splitString(input1);
  const when2 = splitString(input2);
  const when3 = splitString(input3);
  assertArrayIncludes(when1, ["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
  assertArrayIncludes(when2, ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"]);
  assertArrayIncludes(when3, ["PmmdzqPrV", "vPwwTWBwg"]);
});

Deno.test("should find duplicate letters", () => {
  const input1 = "vJrwpWtwJgWrhcsFMMfFFhFp";
  const input2 = "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL";
  const input3 = "PmmdzqPrVvPwwTWBwg";
  const input4 = "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn";
  const when1 = findDuplicateLetters(splitString(input1));
  const when2 = findDuplicateLetters(splitString(input2));
  const when3 = findDuplicateLetters(splitString(input3));
  const when4 = findDuplicateLetters(splitString(input4));
  assertEquals(when1, "p");
  assertEquals(when2, "L");
  assertEquals(when3, "P");
  assertEquals(when4, "v");
});
Deno.test("should character value", () => {
  const input1 = "p";
  const input2 = "L";
  const input3 = "P";

  const when1 = findCharValue(input1);
  const when2 = findCharValue(input2);
  const when3 = findCharValue(input3);
  assertEquals(when1, 16);
  assertEquals(when2, 38);
  assertEquals(when3, 42);
});
Deno.test("split string into groups", () => {
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

  const when = splitIntoGroups(input);

  assertArrayIncludes(when, [[
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ], [
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ]]);
});
Deno.test("split string into groups", () => {
  const input = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
  ];

  const when = findCommonIteminArray(input);

  assertEquals(when, "r");
});

Deno.test("should calculate badge values", () => {
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const when = secondStar(input);

assertEquals(when, 70);
});
