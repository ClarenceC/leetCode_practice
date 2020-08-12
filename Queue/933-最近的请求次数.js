// 最近的请求次数

var RecentCounter = function() {
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  var min = t - 3000
  if (this.queue.length == 0) {
    this.queue.push(t)
  } else {
    var len = this.queue.length, i = 0
    while(i < len) {
      if (this.queue[0] < min) {
        this.queue.shift()
      }
      i++
    }
    this.queue.push(t)
  }
  var otherQueue = this.queue.filter(item => item <= t)
  return otherQueue.length
}

// Run

var obj = new RecentCounter()
obj.ping(1) // 1
obj.ping(100) // 2
obj.ping(3001) // 3
obj.ping(3002) // 3