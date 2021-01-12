## 剑指 Offer 40.最小的k个数

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) =>  a - b)
  return arr.slice(0, k)
}
```

构建最大顶堆
```js
// 堆化
let heapify = (arr, k, i) => {
  while (true) {
    let maxIndex = i
    if (2 * i <= k && arr[2 * i] > arr[i]) {
      maxIndex = 2 * i
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] > arr[maxIndex]) {
      maxIndex = 2 * i + 1
    }
    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
      i = maxIndex
    } else {
      break
    }
  }
}
// 建栈,从后往前，自上而下式建大顶堆
let buildHeap = (arr, k) => {
  if (k == 1) return
  for (let i = Math.floor(k/2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}
let getLeastNumbers = function(arr, k) {
  let heap = []
  let i = 0
  while (i < k) {
    heap.push(arr[i++])
  }
  // 构建大顶堆
  buildHeap(heap, k)

  for (let i = k; i < arr.length; i++) {
    if (heap[1] > arr[i]) {
      heap[1] = arr[i]
      heapify(heap, k, 1)
    }
  }
  // 删除第一个元素
  heap.shift()
  return heap
}
```

计算排序解法
```js
let countingSort = (arr, maxValue, k) => {
  // 用最大值建桶
  let bucket = new Array(maxValue + 1)
  let sortedIndex = 0
  let arrLen = arr.length
  bucketLen = maxValue + 1

  // 装桶
  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  let res = []
  // 出桶，只出 k 个数
  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j]-- > 0 && sortedIndex < k) {
      res[sortedIndex++] = j
    }
    if (sortedIndex === k) {
      break
    }
  }
  return res
}
let getLeastNumbers = function(arr, k) {
  return countingSort(arr, 10000, k)
}
```