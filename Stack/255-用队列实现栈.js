// 用列表实现栈
var MyStack = function() {
  this.data = []
}

MyStack.prototype.push = function(x) {
  this.data.push(x)
}

MyStack.prototype.pop = function() {
  var last, tempData = []
  for (var i = 0; i < this.data.length; i++) {
    if (i == this.data.length - 1) {
      last = this.data[i]
    } else {
      tempData.push(this.data[i])
    }
  }
  this.data = tempData
  return last
}

MyStack.prototype.top = function() {
  return this.data[this.data.length - 1]
}

MyStack.prototype.empty = function() {
  return this.data.length === 0
}


// Run

var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.top() // 2
obj.pop()
obj.empty() // false