/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  var arr = s.split(''), result = []
  for (let i = 0; i < arr.length; i++) {
      result[indices[i]] = arr[i]
  }
  return result.join('')
};

// Run

var s = 'codeleet', indices = [4, 5, 6, 7, 0, 2, 1, 3]

restoreString(s, indices) //  leetcode