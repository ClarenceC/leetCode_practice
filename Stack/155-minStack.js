var MinStack = function() {
  this.data = []
}

// 入栈
MinStack.prototype.push = function(x) {
  this.data.push(x)
}

// 出栈
MinStack.prototype.pop = function() {
  this.data.pop()
}

// 
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1]
}

MinStack.prototype.getMin = function() {
  let minValue = this.data[this.data.length-1]
  for (var i = 0, len = this.data.length;  i < len; i++) {
    if (this.data[i] < minValue) {
      minValue = this.data[i]
    }
  }
  return minValue
}

// Run

var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
minStack.getMin() // -3
minStack.pop()
minStack.top()
minStack.getMin() //  -2