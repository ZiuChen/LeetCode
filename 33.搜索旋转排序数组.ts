/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // 二分法
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    // >>1 移位运算符 右移1位
    // 除2后向下取整: (0+3)/2 = 1.5 => 1
    // 为什么不写成 mid = (left+right)/2 ,因为考虑到left+right的溢出边界情况
    let mid = (start + end) >> 1

    if (nums[mid] === target) {
      // 当前mid值对应的num与target相等 返回
      return mid
    }

    // 如果中间值小于右边值 则右半段有序 左半段包含无序值 对右半段执行二分法
    if (nums[mid] < nums[end]) {
      // 如果target在mid与end之间
      if (nums[mid] < target && target <= nums[end]) {
        // 在二者之间 start右移
        start = mid + 1
      } else {
        // 在另一半里 end左移
        end = mid - 1
      }
    } else {
      // 左半段有序 右半段包含无序值 对左半段执行二分法
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }

  // 未找到 返回-1
  return -1
}
// @lc code=end
