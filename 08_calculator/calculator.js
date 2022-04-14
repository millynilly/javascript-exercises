const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((tot, a) => { return tot + a }, 0)
};

const multiply = function(arr) {
  return arr.reduce((tot, a) => { return tot * a }, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  if (n === 0) { return 1 }

  let sum = 1
  for (let i = 1; i <= n; i++) {
    sum *= i
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
