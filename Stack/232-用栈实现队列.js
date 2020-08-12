// 用栈实现队列

var MyQueue = function() {
  this.stack = []
}

MyQueue.prototype.push = function(x) {
  this.stack.push(x)
}

MyQueue.prototype.pop = function() {
  var top, arr = []
  while(this.stack.length !== 1) {
    arr.push(this.stack.pop())
  }
  top = this.stack.pop()
  while(arr.length !== 0) {
    this.stack.push(arr.pop())
  }
  return top
}

MyQueue.prototype.empty = function() {
  return this.stack.length === 0
}

// Run
var queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.peek()  // 返回首部的元素 1
queue.pop() // 1
queue.empty() // false