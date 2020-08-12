// 682 棒球比赛

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var total = 0, current, stack = []
  while(ops.length!==0) {
      current = ops.shift()
      
      if (current == '+' || current == 'D' || current == 'C') {
          if (current == '+') {
              if (stack.length >= 2) {
                  var score = stack[stack.length-1] + stack[stack.length-2]
                  total += score
                  stack.push(score)
              }
          }
          if (current == 'D') {
              if(stack.length !== 0) {
                  var score = stack[stack.length-1] * 2
                  total += score
                  stack.push(score)
              }
          }
          if (current == 'C') {
              var temp = stack.pop()
              total -= temp
          }
      } else {
          if (current % 1 == 0) {
              total += +current
              stack.push(+current)
          } else {
              console.log('print error')
              break
          }
      }
  }
  return total
};

//Run

calPoints(['5', '2', 'C', 'D', '+']) // 30
