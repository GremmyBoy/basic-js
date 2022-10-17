const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let sum = 0;
  let Newsum = 0;
  n = String(n);
  let newString = n.split('');
  let newNumber = newString.map((el) => Number(el));
  console.log(newNumber);
  for(i=0; i<newNumber.length; i++){
      sum += newNumber[i];
      if (sum >= 10){
          sum = String(sum);
          let newStringSum = sum.split('');
          let newNumberSum = newStringSum.map((el) => Number(el));
          Newsum = newNumberSum[0] + newNumberSum[1];
          return Newsum;
      }
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
