/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  //递归终止 前向节点都已经被分隔完 只剩最末节点的null 则直接返回另一个节点 继续分割
  if (list1 === null) {
    return list2
  } else if (list2 === null) {
    return list1
  } else if (list1.val < list2.val) {
    // 当前节点谁小，就让这个较小的节点的next和另一个链表继续递归合并
    // 分隔成合并list1.next, list2的子问题
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}
// @lc code=end
