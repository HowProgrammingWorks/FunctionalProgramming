'use strict';

// Higher-Order Functions & Recursion
// Recursion calls instead of for loops

const numbers = [2, 7, -1, -5, 8];

// Imperative: Manual index management, mutation

for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];
  console.log(`Item ${i} is ${n}`);
}
console.log();

// Higher-order function with callback

const loop = (min, max, fn) => {
  for (let i = min; i < max; i++) fn(i);
};

loop(0, numbers.length, (i) => {
  const n = numbers[i];
  console.log(`Item ${i} is ${n}`);
});

console.log();

// Recursion, higher-order functions

const iterate = (arr, fn, i = 0) => {
  if (i >= arr.length) return null;
  fn(arr[i], i);
  return iterate(arr, fn, i + 1);
};

iterate(numbers, (n, i) => {
  console.log(`Item ${i} is ${n}`);
});

console.log();

// Built-in higher-order function

const formatItem = (n, i) => `Item ${i} is ${n}`;
numbers.forEach((n, i) => {
  console.log(formatItem(n, i));
});
