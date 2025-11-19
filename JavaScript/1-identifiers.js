'use strict';

// Pure Functions & Immutability
// Arguments instead of mutable variables assignment

const { PI, sqrt } = Math;
const square = (x) => x * x;

// Imperative: Mutating objects, hidden dependencies

const truncatedConeVolume = ({ height, r1, r2 }) => {
  const k = PI / 3;
  const sr1 = square(r1);
  const sr2 = square(r2);
  return k * height * (sr1 + r1 * r2 + sr2);
};

const truncatedConeArea = ({ height, r1, r2 }) => {
  const sr1 = square(r1);
  const sr2 = square(r2);
  const l = sqrt(square(height) + square(r2 - r1));
  return PI * (sr1 + sr2 + l * (r1 + r2));
};

{
  const cone = { height: 7, r1: 10, r2: 15 };
  cone.v = truncatedConeVolume(cone);
  cone.s = truncatedConeArea(cone);
  console.dir(cone);
}

// Functional
// Pure functions, immutability, referential transparency

const volume = (height, r1, r2) =>
  ((PI * height) / 3) * (square(r1) + r1 * r2 + square(r2));

const area = (height, r1, r2) =>
  PI *
  (square(r1) +
    square(r2) +
    sqrt(square(height) + square(r2 - r1)) * (r1 + r2));

const createCone = (height, r1, r2) => ({
  height,
  r1,
  r2,
  volume: volume(height, r1, r2),
  area: area(height, r1, r2),
});

const calcCone = ({ height, r1, r2 }) => createCone(height, r1, r2);

{
  const cone1 = createCone(7, 10, 15);
  const cone2 = calcCone(cone1);
  console.dir({ cone1, cone2 });
}
