/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, node?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = node === undefined ? null : node
  }
}

// @lc code=start
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head)
  let cur = dummy
  // 下一个节点不为null
  while (cur.next !== null) {
    // 下一个节点的值匹配
    if (cur.next.val === val) {
      // 将下一个节点删除
      cur.next = cur.next.next
    } else {
      // 否则更新cur值 继续向下检查
      cur = cur.next
    }
  }
  return dummy.next
}
// @lc code=end

function linknode(arr: number[]) {
  let head = new ListNode(arr[0])
  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return head
}

function print(head: ListNode | null) {
  const res: number[] = []
  let cur = head
  while (cur) {
    res.push(cur.val)
    cur = cur.next
  }
  return res
}

console.log(removeElements(linknode([1, 2, 6, 3, 4, 5, 6]), 6))
console.log(removeElements(linknode([]), 1))
console.log(removeElements(linknode([7, 7, 7, 7]), 7))
