// 844. 比较含退格的字符串

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  var arr1 = S.split('')
  var arr2 = T.split('')

  var stack1 = []
  var stack2 = []

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === '#') {
      stack1.pop()
    } else {
      stack1.push(arr1[i])
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] === '#') {
      stack2.pop()
    } else {
      stack2.push(arr2[i])
    }
  }

  return stack1.join('') === stack2.join('')
}

// Run

var s = 'a##c'
var t = '#a#c'

backspaceCompare(s, t) // false

