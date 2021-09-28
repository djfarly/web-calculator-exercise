const output = {
  a: document.querySelector('#output-a'),
  b: document.querySelector('#output-b'),
  operator: document.querySelector('#output-operator'),
  result: document.querySelector('#output-result'),
};

export const setOutput = ({ a = 0, b = 0, operator = '+', result = 0 }) => {
  output.a.innerHTML = a;
  output.b.innerHTML = b;
  output.operator.innerHTML = operator;
  output.result.innerHTML = Math.round(result * 1e4) / 1e4;
};
