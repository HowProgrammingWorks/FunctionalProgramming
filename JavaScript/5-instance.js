'use strict';

// Closure context instead of object context

// Imperative

const marcus = {
  name: 'Marcus Aurelius',
  born: 121,
  get era() {
    return this.born < 0 ? 'BC' : 'AD';
  },
  toString() {
    return `${this.name} was born in ${this.born} ${this.era}`;
  },
};

console.log(`${marcus}`);

// Functional

const era = year => (year < 0 ? 'BC' : 'AD');
const person = (name, born) => () => `${name} was born in ${born} ${era(born)}`;

const marcus2 = person('Marcus Aurelius', 121, 'Roma');

console.log(marcus2());
