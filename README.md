# Leetcode 解题笔记

## 时间复杂度

![time-complexity-examples.png](https://adrianmejia.com/images/time-complexity-examples.png)

- `O(1)`: 常数复杂度，比如计算两次即可得出最终结论
- `O(logn)`: 对数复杂度，最常见的是二分查找
- `O(n)`: 线性复杂度，一般为一个 for 循环，但半个或者两个 for 循环也视作 O(n)
- `O(n^2)`: 一般为嵌套的 for 循环，如冒泡排序

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

### 27. 移除元素

- 双指针法：定义快指针/慢指针
- 快指针：负责向后搜索值不为`val`的新数组
- 慢指针：负责记录新数组的长度

#### 正确答案

```ts
function removeElement(nums: number[], val: number): number {
  let slowIndex = 0 // 慢指针 代表新数组的长度

  // 快指针 向后搜索不包含val的目标数组
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      slowIndex++
    }
  }

  return slowIndex
}
```

### 977. 有序数组的平方

- 双指针法：定义左指针/右指针
- 负数的平方可能会大于右边的最大值
- 由于经过平方的数一定是大于0的，所以最大值要么是最左边的、要么是最右边的
- 定义三个指针`i j k`分别指向原数组左端、原数组右端、新数组右端
- 检查`nums[i] nums[j]`的平方大小并赋值到新数组右端`res[k]`

#### 正确答案

```ts
function sortedSquares(nums: number[]): number[] {
  const len = nums.length
  const res = new Array(len).fill(0)

  // 双指针
  let i = 0 // 左指针
  let j = len - 1 // 右指针
  let k = len - 1 // 新数组末尾指针

  while (i <= j) {
    const leftVal = Math.pow(nums[i], 2)
    const rightVal = Math.pow(nums[j], 2)

    if (leftVal > rightVal) {
      // 左边值更大
      res[k--] = leftVal
      i++ // 左指针右移
    } else {
      res[k--] = rightVal
      j-- // 右指针左移
    }
  }

  return res
}
```

## 相关题目


