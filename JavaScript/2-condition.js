'use strict';

// Conditional expression instead of Conditional statement

const person = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
};

// Imperative

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

{
  const era = year => (year < 0 ? 'BC' : 'AD');
  const { name, born } = person;
  const output = `${name} was born in ${born} ${era(born)}`;
  console.dir(output);
}
