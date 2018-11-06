'use strict';

// Map object instead of key iteration

// Imperative

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

// Functional

const inst = (prev, prop, val) => ({ ...prev, [prop]: val });

const omap = (obj, fn) => Object.keys(obj)
  .reduce((prev, key) => inst(prev, ...fn(key, obj[key])), {});

const marcus3 = {
  firstName: 'Marcus',
  middleName: 'Aurelius',
  lastName: 'Antoninus',
};

const marcus4 = omap(marcus3, (key, val) => [
  key.toLowerCase().replace('name', ''),
  val.toUpperCase()
]);

console.log(marcus4);
