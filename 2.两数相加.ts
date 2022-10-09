/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// @lc code=start

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let pre = new ListNode(0) // 初始化虚拟头节点
  let cur = pre // 头节点指针
  let carry = 0
  while (l1 !== null || l2 !== null) {
    // 当前l1或l2节点有值 继续执行加法
    let p1 = l1 === null ? 0 : l1.val
    let p2 = l2 === null ? 0 : l2.val
    let sum = p1 + p2 + carry // 作和 加上前一位的进位

    carry = parseInt(sum / 10 + '') // 保存进位
    sum = sum % 10 // 取余数
    cur.next = new ListNode(sum) // 下一个节点的值
    cur = cur.next // 头节点指针后移

    l1 = l1 === null ? l1 : l1.next
    l2 = l2 === null ? l2 : l2.next
  }
  if (carry === 1) {
    // 有进位 下一节点值为1
    cur.next = new ListNode(carry)
  }
  return pre.next
}
// @lc code=end
