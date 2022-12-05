import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
  executeInstructions,
  extractInitalStack,
  extractInstructions,
  firstStar,
  secondStar,
  translateInstructionsToMoves,
} from "./index.ts";

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

Deno.test("draw inital stack", () => {
  const when = extractInitalStack(input);
  assertArrayIncludes(when, [["-", "[D]", "-"], ["[N]", "[C]", "-"], [
    "[Z]",
    "[M]",
    "[P]",
  ]]);
});

Deno.test("extract instructions", () => {
  const when = extractInstructions(input);
  assertArrayIncludes(when, [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ]);
});

Deno.test("translate instructions", () => {
  const input = [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ];
  const when = translateInstructionsToMoves(input);
  assertArrayIncludes(when, [
    { amount: 1, from: 2, to: 1 },
    { amount: 3, from: 1, to: 3 },
    { amount: 2, from: 2, to: 1 },
    { amount: 1, from: 1, to: 2 },
  ]);
});

Deno.test("execute moves accoring to instructions", () => {
  const initalStack = extractInitalStack(input);
  const moves = [{ amount: 1, from: 2, to: 1 }];
  const when = executeInstructions(initalStack, moves);
  assertArrayIncludes(when, [["[D]", "-", "-"], ["[N]", "[C]", "-"], [
    "[Z]",
    "[M]",
    "[P]",
  ]]);
});
Deno.test("execute moves accoring to more complex instructions", () => {
  const initalStack = extractInitalStack(input);
  const moves = [{ amount: 1, from: 2, to: 1 }, { amount: 3, from: 1, to: 3 }];
  const when = executeInstructions(initalStack, moves);
  assertArrayIncludes(when, [["-", "-", "[Z]"], ["-", "-", "[N]"], [
    "-",
    "[M]",
    "[P]",
  ], ["-", "[M]", "[P]"]]);
});
