// TODO: import things from other modules here
import * as math from './math.js';
import { setOutput } from './output.js';
import { input } from './input.js';
import { getRandomNumber } from './random.js';

const handleCalculate = (event) => {
  const operator = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
    exponentiate: '**',
  };

  const { calculate } = event.target.dataset;
  const a = parseInt(input.a.value, 10);
  const b = parseInt(input.b.value, 10);
  setOutput({
    a,
    b,
    operator: operator[calculate],
    result: math[calculate]?.(a, b),
  });
};

const handleRandom = (event) => {
  const { randomForInput } = event.target.dataset;
  input[randomForInput].value = getRandomNumber(1, 6);
};

document.querySelectorAll('[data-calculate]').forEach((buttonCalculate) => {
  buttonCalculate.addEventListener('click', handleCalculate);
});

document.querySelectorAll('[data-random-for-input]').forEach((buttonRandom) => {
  buttonRandom.addEventListener('click', handleRandom);
});
