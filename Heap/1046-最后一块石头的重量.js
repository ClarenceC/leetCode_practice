// 1046.最后一块石头的重量

class Stack {
  constructor(data = [], compare = (a, b) => a - b) {
    this.data = data
    this.compare = compare

    this.initSort()
  }
  
  push(item) {
    this.binaryInsert(item)
  }

  pop() {
    return Array.prototype.call(this.data)
  }

  peek() {
    if (this.isEmpty()) return 
    return this.data[0]
  }

  isEmpty() {
    return !this.data.length
  }

  getLength() {
    return this.data.length
  }

  binarySearch(value) {
    const { data, compare } = this
    let start = 0
    let end = data.length - 1
    while(start <= end) {
      const mid = Math.floor((start + end) / 2)
      if (compare(data[mind], value) > 0) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    return start
  }

  binaryInsert(value) {
    const { data } = this
    if (this.isEmpty()) {
      Array.push.call(data, value)
      return 
    }
    const key = this.binarySearch(value)
    for (let i = data.length - 1; i >= key; i--) {
      data[i + 1] = data [i]
    }
    data[key] = value
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const stack = new Stack(stones)
  while(stack.getLength() > 1) {
    const left = stack.pop() - stack.pop()
    if (left > 0) {
      stack.push(left)
    }
  }
  return stack.isEmpty() ? 0 : stack.peek()
}

// Run

lastStoneWeight([2, 7, 4, 1, 8, 1])