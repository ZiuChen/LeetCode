/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const RomaMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let pre = 0 // 记录上一次的值: 如果第二次的大小比上次的大 则说明是做减法的特殊情况
  let res = 0 // 累加结果
  for (let i = 0; i < s.length; i++) {
    const r = s[i]
    const d = RomaMap[r]
    if (d > pre && i > 0) {
      res -= pre // 减去上次的值
      res += RomaMap[s[i - 1] + s[i]] // 找到组合值加上
    } else {
      res += d
    }
    pre = d // 记录上次的值
  }
  return res
}
// @lc code=end
