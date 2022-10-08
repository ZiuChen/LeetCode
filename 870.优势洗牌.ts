/*
 * @lc app=leetcode.cn id=870 lang=typescript
 *
 * [870] 优势洗牌
 *
 * 思路: nums1原地排序后遍历其中元素 与nums2排序后对应位置的元素比较大小 若更大 则覆盖nums2原位置的元素 否则找到当前nums2的最大值并覆盖
 */

// @lc code=start
function advantageCount(nums1: number[], nums2: number[]): number[] {
  const len = nums1.length // 总个数
  const nums2Index: number[] = [] // nums2排序后的索引值
  nums2.map((n, i) => nums2Index.push(i)) // 为nums2Index赋初值
  nums1.sort((a, b) => a - b) // 对nums1原地排序
  nums2Index.sort((a, b) => nums2[a] - nums2[b]) // 对nums2Index原地排序
  let p1 = 0 // 头指针
  let p2 = len - 1 // 尾指针 始终指向nums2中最大值对应的索引
  for (let n of nums1) {
    // 遍历排序后的nums1元素
    // 新nums1是根据nums2的顺序确定的
    if (n > nums2[nums2Index[p1]]) {
      // 有优势 则直接覆盖掉nums2对应位置的值
      nums2[nums2Index[p1]] = n
      p1++ // 头指针后移
    } else {
      // 无优势 直接覆盖掉nums2中最大值
      nums2[nums2Index[p2]] = n
      p2-- // 尾指针前移
    }
  }
  return nums2
}
// @lc code=end
