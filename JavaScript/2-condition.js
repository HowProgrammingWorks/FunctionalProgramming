'use strict';

// Declarative Style & Pure Functions
// Conditional expression instead of Conditional statement

const person = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
};

// Imperative
// Step-by-step instructions, mutable variables

{
  let output = `${person.born} `;
  if (person.born < 0) {
    output += 'BC';
  } else {
    output += 'AD';
  }
  output = `${person.name} was born in ${output}`;
  console.dir(output);
}

// Functional
// Declarative expressions, pure functions

{
  const era = (year) => (year < 0 ? 'BC' : 'AD');
  const formatBirthYear = (year) => `${year} ${era(year)}`;
  const formatPersonInfo = (name, born) =>
    `${name} was born in ${formatBirthYear(born)}`;
  const output = formatPersonInfo(person.name, person.born);
  console.dir(output);
}
