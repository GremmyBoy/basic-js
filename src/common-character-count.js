const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let newS1 = s1.split('');
  let newS2 = s2.split('');
  console.log(newS2);
   for(i=0; i<newS1.length; i++){
    for(j=0; j<newS2.length; j++){
      if(newS1[i] === newS2[j]){
        newS2.splice(j, 1);
        count++
        break
      }
    }
   }
   return count;
}

module.exports = {
  getCommonCharacterCount
};
