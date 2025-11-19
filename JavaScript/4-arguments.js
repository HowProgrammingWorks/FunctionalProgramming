'use strict';

// Currying & Partial Application
// Single argument instead of multiple

// Imperative: Multiple arguments, cannot partially apply

const max = (a, b) => {
  if (a > b) return a;
  else return b;
};

console.log(max(3, 5));

// Functional: Currying enables partial application and composition

const compare = (a) => (b) => (a > b ? a : b);
console.log(compare(3)(5));

// Partial application - create specialized functions

const maxWith5 = compare(5);
console.log('maxWith5(3):', maxWith5(3));
console.log('maxWith5(7):', maxWith5(7));

// Compose curried functions

const min = (a) => (b) => (a < b ? a : b);
const clamp = (minVal) => (maxVal) => (val) =>
  compare(minVal)(min(maxVal)(val));

const clamp0to100 = clamp(0)(100);
console.log('clamp0to100(150):', clamp0to100(150));
console.log('clamp0to100(-10):', clamp0to100(-10));
console.log('clamp0to100(50):', clamp0to100(50));
