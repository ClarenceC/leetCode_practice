// 7.整数反转

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var xStr = x.toPrecision().split(''), signal = '', result
  if (xStr[0] === '-') {
      signal = xStr.shift()
  }
  result = Number(signal + xStr.reverse().join(''))
  if (result > (Math.pow(2, 31) - 1) || result < (Math.pow(-2, 31))) {
      return 0
  }
  return result
};

// Run

reverse(123)  // 321

reverse(-123)  // -321