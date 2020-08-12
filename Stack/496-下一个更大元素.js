// 下一个更大元素

var nextGreaterElement = function(nums1, nums2) {
  var result = [], current, index
  while(nums1.length !==0) {
      current = nums1.pop()
      index = nums2.findIndex(item => item === current)
      if (index !==  -1) {
          for (var i = index, len = nums2.length; i < len; i++) {
              if (nums2[i] > current) {
                  result.push(nums2[i])
                  break
              } else {
                  if (i === nums2.length - 1) {
                      result.push(-1)
                  }
              }
          }
      } else {
          result.push(-1)
      }
  }
  return result.reverse()
};


// Run

nextGreaterElement(
  [4, 1, 2],
  [1, 3, 4, 2]
)

//  [-1, 3, -1]