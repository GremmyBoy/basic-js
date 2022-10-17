const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let emailArr = email.split('');
  let count = 0;
  let newArr = [];
  for(i=0; i<emailArr.length; i++){
    count++
    if(emailArr[i] === '@' && emailArr[i+1] !== '.'){
       emailArr.splice(0, count);
    }
  }
  // console.log(newArr.join(''));
  return emailArr.join('');
}

module.exports = {
  getEmailDomain
};
