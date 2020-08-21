/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  var sortArr = A.sort((a, b) => b - a)
  for (var i = 0; i < sortArr.length; i++) {
      if(sortArr[i] < sortArr[i+1] + sortArr[i+2]) {
          return sortArr[i] + sortArr[i+1] + sortArr[i+2]
      }
  }
  return 0
};

//Run
largestPerimeter([2, 1, 2]) // 5

largestPerimeter([1, 2, 1]) // 0