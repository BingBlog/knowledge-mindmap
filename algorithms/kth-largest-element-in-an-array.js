/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const sorted = nums.sort(function (a, b) {
        return a - b > 0 ? 1 : -1;
    });

    return sorted[nums.length - k];
};

let arr1 = [1, 2, -3, 5, 6];
console.log(findKthLargest(arr1, 2));
