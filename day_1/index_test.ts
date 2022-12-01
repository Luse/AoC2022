import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { countCalories } from "./index.ts";

Deno.test("should work", () => {
  const input = `1
2
3

2
3
4

`;
  const when = countCalories(input);
  assertEquals(when, "9");
});
