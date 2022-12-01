import {
  assertEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { firstStar, secondStar } from "./index.ts";

Deno.test("first star", () => {
  const input = `1
2
3

2
3
4

`;
  const when = firstStar(input);
  assertEquals(when, 9);
});
Deno.test("second star", () => {
  const input = `1
2
3

2
3
4

5
6
7

8
9
10

`;
  const when = secondStar(input);
  assertEquals(when, 54);
});
