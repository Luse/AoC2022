import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
  determineOutcome,
  determinePredictedOutcome,
  firstStar,
  secondStar,
} from "./index.ts";

const input = `A Y
B X
C Z`;

Deno.test("first star", () => {
  const when = firstStar(input);
  assertEquals(when, 15);
});

Deno.test("determineOutcome", () => {
  const input1 = "A Y";
  const input2 = "B X";
  const input3 = "C Z";

  const when1 = determineOutcome(input1);
  const when2 = determineOutcome(input2);
  const when3 = determineOutcome(input3);
  assertEquals(when1, 8);
  assertEquals(when2, 1);
  assertEquals(when3, 6);
});

Deno.test("first star", () => {
  const when = secondStar(input);
  assertEquals(when, 12);
});

Deno.test("determineOutcome", () => {
  const input1 = "A Y";
  const input2 = "B X";
  const input3 = "C Z";

  const when1 = determinePredictedOutcome(input1);
  const when2 = determinePredictedOutcome(input2);
  const when3 = determinePredictedOutcome(input3);
  assertEquals(when1, 4);
  assertEquals(when2, 1);
  assertEquals(when3, 7);
});
