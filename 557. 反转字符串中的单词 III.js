// 557. 反转字符串中的单词 III

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var queue = s.split(' ')
  if (queue.length === 0) { return queue }
  for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i].split('').reverse().join('')
  }
  return queue.join(' ')
};

// Run
reverseWords("Let's take LeetCode contest")  // "s'teL ekat edoCteeL tsetnoc"