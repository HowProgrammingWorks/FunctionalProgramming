'use strict';

// Imperative: Mutable state, class-based, method chaining

class Adder {
  constructor(initial) {
    this.value = initial;
  }

  add(x) {
    this.value += x;
    return this;
  }

  valueOf() {
    return this.value;
  }
}

const sum1 = new Adder(1).add(9).add(1).add(7);
console.log('Sum:', +sum1);

// Functional: Immutable function composition

const adder = (initial) =>
  Object.assign((value) => adder(initial + value), {
    valueOf: () => initial,
    map: (f) => f(initial),
    toString: () => String(initial),
  });

const sum2 = adder(1)(9)(1)(7);
console.log('Sum:', +sum2);
sum2.map(console.log);

// Enhanced functional methods with composition

const add = (initial) => ({
  add: (value) => add(initial + value),
  valueOf: () => initial,
  map: (f) => f(initial),
  toString: () => String(initial),
});

const sum3 = add(1).add(9).add(1).add(7);
console.log('Sum:', +sum3);
console.log('String:', String(sum3));
