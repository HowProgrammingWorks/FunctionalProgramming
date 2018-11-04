'use strict';

// Single argument instead of multiple

// Imperative

const max = (a, b) => {
  if (a > b) return a;
  else return b;
};
console.log(max(3, 5));

// Functional

const maxc = a => b => (a > b ? a : b);
console.log(maxc(3)(5));
