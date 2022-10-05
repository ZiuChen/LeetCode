/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
type TcMap = {
  [key: string]: string
}
function isValid(s: string): boolean {
  const len = s.length
  const stack: string[] = []
  if (len % 2 !== 0) return false
  const cMap: TcMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let i = 0; i < len; i++) {
    if (cMap[s[i]]) {
      // 是开始符号
      stack.push(s[i])
    } else {
      // 是结尾符号
      if (cMap[stack[stack.length - 1]] === s[i]) {
        // 结尾符号能匹配上栈顶的开始符号
        stack.pop() // 开始符号出栈
      } else {
        // 匹配不上 非有效字符串
        return false
      }
    }
  }
  // 遍历结束 空栈则为有效字符串
  return stack.length === 0 ? true : false
}
// @lc code=end
