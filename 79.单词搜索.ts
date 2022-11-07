/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  // 定义 上下左右 四个方向
  const border = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const row = board.length
  const col = board[0].length
  const used: boolean[][] = [] // 标记哪些字母已经被使用过了

  for (let i = 0; i < row; i++) {
    used.push(new Array(col).fill(false))
  }

  // 空行 直接返回
  if (!col) return false

  // 回溯算法 在board中找words中的字符
  const backTracking = (
    i: number,
    j: number,
    used: boolean[][],
    board: string[][],
    word: string
  ) => {
    // 所有字符已被截取完毕 证明已经找到
    if (!word.length) {
      return true
    }

    // 分别选择上下左右四个方向的字符 尝试四次
    for (let p = 0; p < border.length; p++) {
      const curi = i + border[p][0] // 左右方向
      const curj = j + border[p][1] // 上下方向

      // 检查边界条件是否符合
      // 检查是否匹配上了word[0]
      if (curi >= 0 && curi < row && curj >= 0 && curj < col && board[curi][curj] == word[0]) {
        // 匹配上了word[0]
        // 已经使用过了 跳过
        if (used[curi][curj] == true) {
          continue
        }

        // 未使用过 先标记为已使用
        used[curi][curj] = true

        // 查找下一个字符 (将word[0]截取掉)
        const status = backTracking(curi, curj, used, board, word.substring(1))

        // 找到了 返回true
        if (status) return true
        // 未找到 回溯
        else used[curi][curj] = false
      }
    }

    // 遍历完了都未匹配上 返回false
    return false
  }

  // 遍历board中所有字母
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 找到了第一个字符
      if (board[i][j] == word[0]) {
        // 标记为已使用
        used[i][j] = true

        // 进入回溯
        const status = backTracking(i, j, used, board, word.substring(1))

        // 回溯结束 找到了返回true 或 重置状态
        if (status) return true
        else used[i][j] = false
      }
    }
  }

  return false
}
// @lc code=end

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCB'
  )
)
