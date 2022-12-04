import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { firstStar, secondStar } from "./index.ts";

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
