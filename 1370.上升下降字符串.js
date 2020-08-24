// 1370上午下降字符串

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  var map = {}
  var arr = s.split('')
  var result = []
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
      map[arr[i]] += 1 
    } else {
      map[arr[i]] = 1
    }
  }

  var mapKey = Object.keys(map).sort()
  while(mapKey.length !== 0) {
    for (let j = 0; j < mapKey.length; j++) {
      if (map[mapKey[j]] > 0) {
        result.push(mapKey[j])
        map[mapKey[j]] -= 1
      } else {
        delete map[mapKey[j]]
      }
    }
    for (let k = mapKey.length - 1; k >= 0; k--) {
      if (map[mapKey[k]] > 0) {
        result.push(mapKey[k])
        map[mapKey[k]] -= 1
      } else {
        delete map[mapKey[k]]
      }
    }
    mapKey = Object.keys(map).sort()
  }
  return result.join('')
};

// Run

sortString("aaaabbbbcccc") // abccbaabccba