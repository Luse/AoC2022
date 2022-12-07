import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { firstStar, secondStar } from "./index.ts";

const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

Deno.test("first star", () => {
  const when = firstStar(input);
  assertEquals(when, 95437);
});
Deno.test("second star", () => {
  const input = `123`;
  const when = secondStar(input);
  assertEquals(when, "bar");
});
