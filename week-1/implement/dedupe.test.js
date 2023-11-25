const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

test("Given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toStrictEqual([]);
  });
  test("Given an array with no duplication, it returns a copy of the original array", () => {
    expect(dedupe([7,8,6])).toStrictEqual([7,8,6]);
  });
test("Given an array with strings, it should remove duplicate values", () => {
    expect(dedupe([`@`, `b`, `g`, `@`, `r`, `g`])).toStrictEqual([`@`,`b`, `g`, 'r']);
  });

  test("Given an array with numbers, it should remove duplicate values", () => {
    expect(dedupe([8, 0, 1, 0, 4, 3, 8])).toStrictEqual([8, 0, 1, 4, 3]);
  });

 
 