/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cache = {};

    let length = nums.length;
    for (let i = 0; i < length; i++) {
        let current = nums[i];
        if (!cache[current]) {
            cache[current] = 1;
        }
        else {
            cache[current] += 1;
        }

        if (cache[current] > length / 2) {
            return current;
        }
    }

};