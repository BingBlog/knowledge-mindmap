/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
<<<<<<< HEAD
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
=======
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
>>>>>>> 471349fec71310d1030b77056688f958f5e80705
