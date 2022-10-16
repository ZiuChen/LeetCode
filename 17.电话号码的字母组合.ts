/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
interface ICMap {
  [key: string]: string
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []
  const cMap: ICMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  const res: string[] = []
  for (let i = 0; i < digits.length; i++) {
    const c = digits[i]
    const str = cMap[c]
    if (res.length === 0) {
      // 当前res为空 证明未执行过插入组合
      for (let j = 0; j < str.length; j++) {
        // 将cMap所有对应值拆开插入
        res.push(str[j])
      }
    } else {
      const temp: string[] = []
      for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < res.length; k++) {
          // 创建临时新数组 生成新组合
          temp.push(res[k] + str[j])
        }
      }
      // 将生成的新组合替换掉之前位置的字符串组合
      res.splice(0, res.length, ...temp)
    }
  }

  return res
}
// @lc code=end

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
