'use strict';

// Recursion calls instead of for loops

const numbers = [2, 7, -1, -5, 8];

// Imperative

for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];
  console.log(`Item ${i} is ${n}`);
}
console.log();

// Loop function

const loop = (min, max, fn) => {
  for (let i = min; i < max; i++) fn(i);
};

loop(0, numbers.length, i => {
  const n = numbers[i];
  console.log(`Item ${i} is ${n}`);
});

console.log();

// Recursion

const iterate = (arr, fn, i = 0) => {
  if (i === arr.length) return;
  fn(arr[i], i);
  iterate(arr, fn, ++i);
};

iterate(numbers, (n, i) => {
  console.log(`Item ${i} is ${n}`);
});

console.log();

// forEach

numbers.forEach((n, i) => {
  console.log(`Item ${i} is ${n}`);
});
