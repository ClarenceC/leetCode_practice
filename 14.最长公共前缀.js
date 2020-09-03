// 14.最长公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */

 var longestCommonPrefix = function(strs) {
   let result = [], col = [], preValue, diff = false
   if (strs.length === 0) { return '' }
   for (let i = 0; i < strs[0].length; i++) {
     if (diff) break
     for (let j = 0; j < strs.length; j++) {
       col.push(strs[j][i])
     }
     for (let k = 0; k < col.length; k++) {
       if (!preValue) {
         preValue = col[k]
       } else {
         if (preValue !== col[k]) {
           diff = true
           break
         }
       }
     }
     if (!diff) {
       result.push(col[0])
     }
     col = []
     preValue = null
   }
   return result.join('')
 }

 // Run

 longestCommonPrefix(["flower","flow","flight"]) // "fl"


 // 优化实现方案

 var longestCommonPrefix = function(strs) {
   if (strs === null || strs.length === 0) return ''
   let prevs = strs[0]
   for(let i = 1; i < strs.length; i++) {
     let j = 0
     for (; j < prevs.length && j < strs[i].length; j++) {
       if(prevs.charAt(j) !== strs.charAt(j)) break
     }
     prevs = prevs.subString(0, j)
     if (prevs === "") return ""
   }
   return prevs
 }