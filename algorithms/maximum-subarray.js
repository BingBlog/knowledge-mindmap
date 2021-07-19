/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let length = nums.length;
    let max = nums[0];
    let pre = nums[0];
    for (let i = 1; i < length; i++) {
        if (pre < 0) {
            max = nums[i];
            pre = nums[i];
        }
        else {
            let current = nums[i] + pre;
            max = current > max ? current : max;
            pre = nums[i] + pre;
        }
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
