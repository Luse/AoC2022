import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import {
  findIndexOfFirstNonReapatingCharakter,
  findIndexOfFirstOfFourteenNonReapatingCharakters,
  firstStar,
  secondStar,
} from "./index.ts";

Deno.test("first star", () => {
  const input = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
  const when = firstStar(input);
  assertEquals(when, 5);
});
Deno.test("second star", () => {
  const input = `123`;
  const when = secondStar(input);
  assertEquals(when, "bar");
});

Deno.test("should find first charakter where the four preciding charakters are non-repeating 1", () => {
  const input1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
  const when1 = findIndexOfFirstNonReapatingCharakter(input1);

  assertEquals(when1, 5);
});
Deno.test("should find first charakter where the four preciding charakters are non-repeating 2", () => {
  const input2 = "nppdvjthqldpwncqszvftbrmjlhg";
  const when2 = findIndexOfFirstNonReapatingCharakter(input2);

  assertEquals(when2, 6);
});
Deno.test("should find first charakter where the four preciding charakters are non-repeating 3", () => {
  const input3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
  const when3 = findIndexOfFirstNonReapatingCharakter(input3);

  assertEquals(when3, 10);
});
Deno.test("should find first charakter where the four preciding charakters are non-repeating 4", () => {
  const input4 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
  const when4 = findIndexOfFirstNonReapatingCharakter(input4);
  assertEquals(when4, 11);
});
Deno.test("should find first charakter where the fourteen preciding charakters are non-repeating 1", () => {
  const input1 = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
  const when1 = findIndexOfFirstOfFourteenNonReapatingCharakters(input1);

  assertEquals(when1, 19);
});
Deno.test("should find first charakter where the fourteen preciding charakters are non-repeating 2", () => {
  const input2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
  const when2 = findIndexOfFirstOfFourteenNonReapatingCharakters(input2);

  assertEquals(when2, 23);
});
Deno.test("should find first charakter where the fourteen preciding charakters are non-repeating 3", () => {
  const input3 = "nppdvjthqldpwncqszvftbrmjlhg";
  const when3 = findIndexOfFirstOfFourteenNonReapatingCharakters(input3);

  assertEquals(when3, 23);
});
Deno.test("should find first charakter where the fourteen preciding charakters are non-repeating 4", () => {
  const input4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
  const when4 = findIndexOfFirstOfFourteenNonReapatingCharakters(input4);
  assertEquals(when4, 29);
});
Deno.test("should find first charakter where the fourteen preciding charakters are non-repeating 5", () => {
  const input5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
  const when4 = findIndexOfFirstOfFourteenNonReapatingCharakters(input5);
  assertEquals(when4, 26);
});
