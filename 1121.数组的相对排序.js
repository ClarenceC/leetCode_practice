// 1121.数组的相对排序

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  var result = [],  otherArr = [], value
  var map = new Map(arr2.map((item) => [item, 0]))
  for (var i = 0; i < arr1.length; i++) {
      if (map.has(arr1[i])) {
          value = map.get(arr1[i])
          map.set(arr1[i], ++value)
      } else {
          otherArr.push(arr1[i])
      }
  }
  for (let [key, value] of map) {
      if (value > 1) {
          while(value > 0) {
              result.push(key)
              value--
          }
      } else {
          result.push(key)
      }
  }
  return result.concat(otherArr.sort((a, b) => a - b))
};

// Run

var arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]


relativeSortArray(arr1, arr2)   // [2,2,2,1,4,3,3,9,6,7,19]