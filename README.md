# Leetcode 解题笔记

## 时间复杂度

![time-complexity-examples.png](https://adrianmejia.com/images/time-complexity-examples.png)

- `O(1)`: 常数复杂度，比如计算两次即可得出最终结论
- `O(logn)`: 对数复杂度，最常见的是二分查找
- `O(n)`: 线性复杂度，一般为一个 for 循环，但半个或者两个 for 循环也视作 O(n)
- `O(n^2)`: 一般为嵌套的 for 循环，如冒泡排序

## 数组

### 704. 二分查找

#### 题目描述

给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

示例 1:

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

示例 2:

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

#### 解题思路

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

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)

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

#### 题目描述

给你一个数组 `nums` 和一个值 `val`，你需要 **原地** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **原地** 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

#### 解题思路

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

#### 题目描述

给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 每个数字的平方 组成的新数组，要求也按 **非递减顺序** 排序。

示例 1：

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

示例 2：

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

#### 解题思路

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

### 209.长度最小的子数组

#### 题目描述

#### 暴力解法

双for暴力解法，遍历所有子串并保留满足条件的最小子串长度

时间复杂度O(n^2)：

- n是数组长度 需要遍历每个下标作为子序列的开始下标
- 对于每个开始下标 还需要遍历其后面的下标得到长度最小的子数组

```ts
function minSubArrayLen(target: number, nums: number[]): number {
  // 双for暴力解法
  let res = Infinity // 最终结果 初值目的是后续被更小的数赋值
  let sum = 0 //
  let subLen = 0
  // i: 子序列起点 j: 子序列终点
  for (let i = 0; i < nums.length; i++) {
    // 开始外层循环 重置sum
    sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j] // 子序列求和
      if (sum >= target) {
        subLen = j - i + 1 // 当前子序列长度
        res = res < subLen ? res : subLen // 取更小的长度
        break // 跳出当前内层循环
      }
    }
  }
  // 若res未被赋值则返回0
  return res === Infinity ? 0 : res
}
```

#### 滑动窗口

可以通过滑动窗口的方法降低时间复杂度（O(n^2) => O(n)）。滑动窗口本质是双指针，只不过解法更像是一个窗口的移动，用滑动窗口描述更贴切。

双for嵌套的时间复杂度是O(n^2)，而滑动窗口方法只需要一次循环，在这一次循环中需要完成以下工作：

- 窗口后置指针后移
- 计算是否满足条件(sum <= target)
- 若不满足 则直接让**窗口前置指针后移**（这是与双for本质的不同 减少了很多从头再来的重复操作）

时间复杂度O(n)，其中n是数组长度，左右指针最多各移动n次：2n

```ts
function minSubArrayLen(target: number, nums: number[]): number {
  // 滑动窗口 O(n^2) => O(n)
  let res = Infinity // 最终结果
  let i = 0 // 滑动窗口起始位置
  let sum = 0 // 当前子序列之和
  let subLen = 0 // 当前子序列长度

  // 只遍历一次
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    // 当满足条件时
    while (sum >= target) {
      subLen = j - i + 1 // 求当前子序列长度
      res = res < subLen ? res : subLen // 比较并更新较短的子序列长度
      sum -= nums[i++] // 滑动窗口起始位置向后移动 同时减掉前一个位置的数: (sum-=nums[i]; i++;)
    }
  }

  return res === Infinity ? 0 : res
}
```


## 相关题目

### 35. 搜索插入位置

#### 题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

示例 1:

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

示例 2:

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

示例 3:

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```

#### 解题思路

- 排序树组+无重复元素+O(logn) 考虑使用二分法
- 定义两个指针 指向左右两边
- 使用`while(left <= right)`循环 每次循环求`mid`
- 结果分为四种情况：
  - 如果找到了: 直接返回`mid`
  - 如果没找到:
    - 目标值在所有元素之前 [0, -1]
    - 目标值插入数组中的位置 [left, right]
    - 目标值在所有元素之后 [left, right]
  - 结束最后一次循环后，`left = right + 1`
  - 结果返回`left`或`right - 1`皆可

#### 正确答案

```ts
function searchInsert(nums: number[], target: number): number {
  // 1.排序数组 2.无重复元素 3.Ologn 考虑使用二分法
  const len = nums.length

  let left = 0
  let right = len - 1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2) // 防止溢出

    if (target === nums[mid]) {
      // 找到目标值
      return mid
    } else if (target > nums[mid]) {
      // 在右侧
      left = mid + 1
    } else {
      // 在左侧
      right = mid - 1
    }
  }

  // 未找到目标值
  return left
}
```

### 34. 在排序数组中查找元素的第一个和最后一个位置

#### 题目描述

给你一个按照非递减顺序排列的整数数组 `nums`，和一个目标值 `target`。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

你必须设计并实现时间复杂度为 `O(log n)` 的算法解决此问题。

示例 1：
```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

示例 2：
```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

示例 3：
```
输入：nums = [], target = 0
输出：[-1,-1]
```

#### 解题思路

- 符合使用二分法的条件，用二分法找到：
  - `leftIndex` 第一个等于 `target` 的位置
  - `rightIndex` 第一个大于 `target` 的位置-1
- 两种逻辑可以复用 根据不同 `lower` 返回不同的值

#### 正确答案

```ts
function binarySearch(nums: number[], target: number, lower: boolean) {
  let left = 0
  let right = nums.length - 1
  let ans = -1 // 如果从未找到 则直接fallback -1

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      // 找到了target 更新ans
      ans = mid

      if (lower) {
        // lower == true 查找第一个大于等于 target 的下标 向左找
        right = mid - 1
      } else {
        // lower == false 查找第一个大于 target 的下标 向右找
        left = mid + 1
      }
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return ans
}
function searchRange(nums: number[], target: number): number[] {
  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false)

  // 检查合法性 & 数组中是否包含target
  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex]
  }
  return [-1, -1]
}
```
