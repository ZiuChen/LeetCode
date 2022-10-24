/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const cMap: {
    [key: string]: string[]
  } = {}

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i] // 原字符串
    const strArray = str.split('') // 数组字符串
    // 根据ASCII码排序
    strArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    const sortStr = strArray.join('') // 排序后的字符串
    if (Object.keys(cMap).includes(sortStr)) {
      // 不同的异位词排序后的值是相同的 以此值为key 查表
      // 找到了 证明之前创建过数组 插入
      cMap[sortStr].push(str)
    } else {
      // 未找到 是一个新的单词 创建数组
      cMap[sortStr] = [str]
    }
  }

  return Object.keys(cMap).map((key) => cMap[key])
}
// @lc code=end

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// console.log(groupAnagrams(['']))
// console.log(groupAnagrams(['a']))
