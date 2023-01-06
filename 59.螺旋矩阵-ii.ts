/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  // 按边循环填充 保持左闭右开原则
  const res = new Array(n).fill(0).map((i) => new Array(n)) // 二维数组 保存最终结果
  let startX = 0 // 每循环一圈的起始位置 X
  let startY = 0 // 每循环一圈的起始位置 Y
  let loop = Math.floor(n / 2) // 每个圈循环几次
  let mid = Math.floor(n / 2) // 矩阵的中间位置
  let count = 1 // 更新填充数字
  let offset = 1 // 每一条边遍历的长度 每次循环右边界收缩一位

  while (loop--) {
    let row = startX
    let col = startY
    // 上行从左到右（左闭右开）
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++
    }
    // 右列从上到下（左闭右开）
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++
    }
    // 下行从右到左（左闭右开）
    for (; col > startY; col--) {
      res[row][col] = count++
    }
    // 左列做下到上（左闭右开）
    for (; row > startX; row--) {
      res[row][col] = count++
    }

    // 更新起始位置
    startX++
    startY++

    // 更新offset
    offset += 2
  }

  // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
  if (n % 2 === 1) {
    res[mid][mid] = count
  }

  return res
}
// @lc code=end

console.log(generateMatrix(3))
console.log(generateMatrix(1))
