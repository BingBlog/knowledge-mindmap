/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let length = nums.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            count++;
        }
        else {
            if (count > 0) {
                nums[i - count] = nums[i];
            }
        }
    }

    for (let i = 0; i < count; i++) {
        nums[length - count + i] = 0;
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));


// [0,1,0,3,12] => [1,3,12,0,0]
