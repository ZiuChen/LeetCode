/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const getLength = (list: ListNode | null) => {
    // 获得链表长度
    let length = 0
    while (list) {
      list = list.next
      length++
    }
    return length
  }
  // 创建虚拟头节点 指向链表头节点
  const dummy = new ListNode(0, head)
  const length = getLength(head)
  let p = dummy // 头指针
  // 从1开始遍历(跳过dummy节点)
  for (let i = 1; i < length - n + 1; i++) {
    // 不断后移指针 将指针指向目标节点的前节点
    p = p.next!
  }
  p.next = p.next!.next
  return dummy.next
}
// @lc code=end

// 遍历一次 遍历时入栈 弹出n次后的栈顶即为目标节点的前节点
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  const stack: ListNode[] = []
  const dummy = new ListNode(0, head)
  let p = dummy // 头节点指针
  while (p) {
    stack.push(p) // 当前头节点入栈
    p = p.next! // 头节点后移
  }
  for (let i = 0; i < n; i++) {
    // 弹出n个元素 栈顶节点即为待删除节点的前节点
    stack.pop()
  }
  const prev = stack[stack.length - 1] // 获取栈顶元素
  prev.next = prev.next!.next
  return dummy.next
}
