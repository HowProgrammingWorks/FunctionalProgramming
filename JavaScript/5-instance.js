'use strict';

// Closure Context & Immutability

// Imperative: Mutable state, hidden state, side effects

const marcus1 = {
  name: 'Marcus Aurelius',
  born: 121,

  upperName() {
    this.name = this.name.toUpperCase();
  },

  get era() {
    return this.born < 0 ? 'BC' : 'AD';
  },

  toString() {
    return `${this.name} was born in ${this.born} ${this.era} in ${this.city}`;
  },
};

marcus1.name += ' Antoninus';
marcus1.city = 'Roma';
marcus1.position = 'emperor';
marcus1.upperName();
console.log(`Era of ${marcus1.name} birth is ${marcus1.era}`);
console.log(`${marcus1}`);
const keys = Object.keys(marcus1);
console.log('Fields:', keys.join(', '));

// Functional: Immutable data, closure context, no hidden state

const era = (year) => (year < 0 ? 'BC' : 'AD');

const person = (name, born, city) => {
  const _era = era(born);
  const _name = name.toUpperCase();
  const toString = () => `${_name} was born in ${born} ${_era} in ${city}`;
  return { toString };
};

const marcus2 = person('Marcus Aurelius Antoninus', 121, 'Roma');
console.log(`${marcus2}`);
