/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [1, 0, 2, 3, 0, 4, 0, 5]
var moveZeroes = function(nums) {
    let count = 0;
    let length = nums.length;

    for (let i = 0; i < length - count; i++) {
        if (nums[i] === 0) {
            let temp = nums[length - 1 - count];
            nums[length - 1 - count] = 0;
            nums[i] = temp;
            count++;
        }
    }
};

let arr = [0,1,0,3,12];
moveZeroes(arr);