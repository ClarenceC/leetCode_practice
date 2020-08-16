// 9. 回文数

var isPalindrome = function(x) {
  var xStr = x + ''
  return xStr === xStr.split('').reverse().join('')
}

// Run
isPalindrome(-121) // false

