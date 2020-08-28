/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var map = {}
  for (let i = 0; i < moves.length; i++) {
      if (map[moves.charAt(i).toUpperCase()]) {
          map[moves.charAt(i).toUpperCase()] += 1
      } else {
          map[moves.charAt(i).toUpperCase()] = 1
      }
  }
  if (map['U'] === map['D'] && map['L'] === map['R']) {
      return true
  } else {
      return false
  }
};

judgeCircle("UD") // true

judgeCircle("LL") // false