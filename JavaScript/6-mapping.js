'use strict';

// Higher-Order Functions & Point-Free Style
// Map object instead of key iteration

// Imperative: Manual iteration, mutation, imperative transformation

const marcus1 = {
  firstName: 'Marcus',
  middleName: 'Aurelius',
  lastName: 'Antoninus',
};

const marcus2 = {};

for (const key in marcus1) {
  const prop = key.toLowerCase().replace('name', '');
  const value = marcus1[key].toUpperCase();
  marcus2[prop] = value;
}
console.log(marcus2);

// Functional: Higher-order functions, immutability, composition

const inst = (prev, prop, val) => ({ ...prev, [prop]: val });

const omap = (obj, fn) =>
  Object.keys(obj).reduce((prev, key) => inst(prev, ...fn(key, obj[key])), {});

const marcus3 = {
  firstName: 'Marcus',
  middleName: 'Aurelius',
  lastName: 'Antoninus',
};

const marcus4 = omap(marcus3, (key, val) => [
  key.toLowerCase().replace('name', ''),
  val.toUpperCase(),
]);

console.log(marcus4);

// Enhanced: Point-free style with function composition

const transformKey = (key) => key.toLowerCase().replace('name', '');
const transformValue = (val) => val.toUpperCase();
const transformEntry = (key, val) => [transformKey(key), transformValue(val)];

const marcus5 = omap(marcus3, transformEntry);
console.log(marcus5);

// Function composition for reusable transformations

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const objToUpper = (obj) => omap(obj, (key, val) => [key, val.toUpperCase()]);

const objKeysToLower = (obj) =>
  omap(obj, (key, val) => [key.toLowerCase().replace('name', ''), val]);

const transformPerson = pipe(objToUpper, objKeysToLower);
console.log(transformPerson(marcus3));
