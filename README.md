# Leetcode 解题笔记

## 数组

### 2. 二分查找

- 定义左、右指针`left`和`right`
- 用`while`循环，检查`while(left <= right)`是否成立
- 每次计算`mid`值，当`target`位于左/右两侧时更新`left`和`right`的值
- 当`target`恰好等于`mid`即返回

#### 解题细节

关键在于`while(left <= right)`
- `target`是定义在`[left, right]`左闭右闭的区间内
- 当`left == target`时仍然是有效范围，`target`仍然可能存在于该范围内

在每轮循环求`mid`时，我第一次是这样写的：

```ts
const mid = Math.floor((left + right) / 2)
```

这里存在一个隐患，如果`left + right`是一个特别大的数，可能会发生溢出，可以修改代码，避免溢出：

```ts
const mid = Math.floor(left + (right - left) / 2)
// 也可以使用位运算 右移一位
const mid = left + ((right - left) >> 1)
```

#### 正确答案

```ts
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    console.log(left, right, mid)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      // target在左侧
      right = mid - 1 // mid自身肯定可以排除掉
    } else {
      // target在右侧
      left = mid + 1
    }
  }
  return -1
}
```