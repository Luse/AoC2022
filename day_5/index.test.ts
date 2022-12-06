import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { extractInitalStacks, firstStar, secondStar } from "./index.ts";

const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

Deno.test("first star", () => {
  const input = `123`;
  const when = firstStar(input);
  assertEquals(when, "foo");
});
Deno.test("second star", () => {
  const input = `123`;
  const when = secondStar(input);
  assertEquals(when, "bar");
});

Deno.test("extract inital stacks", () => {
  const when = extractInitalStacks(input);
  const expected = [
    ["-", "[N]", "[Z]"],
    ["[D]", "[C]", "[M]"],
    ["-", "-", "[P]"],
  ];
  assertEquals(when, expected);
});
