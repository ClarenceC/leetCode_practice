// 242.有效的字母异位词

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const arr1 = s.split('')
  const arr2 = t.split('')
  let matchIndex
  if (arr1.length !== arr2.length) { return false }
  for (let i = 0; i < arr1.length; i++) {
      matchIndex = arr2.findIndex(item => item === arr1[i])
      if (matchIndex < 0) {
          break
      } else {
          arr2.splice(matchIndex, 1)
      }
  }
  if (arr2.length === 0) {
      return true
  } else {
      return false
  }
};

// Run

var s = 'anagram', t = 'nagaram'
isAnagram(s, t) // true
var s = 'rat', t = 'car'
isAnagram(s, t) // false