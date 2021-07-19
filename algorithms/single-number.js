/**
 * @param {number[]} nums
 * @return {number}
 *
 * [4,1,2,1,2]
 */
var singleNumber = function (nums) {
    const cache = new Set();
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (cache.has(current)) {
            cache.delete(current);
        }
        else {
            cache.add(current);
        }
    }
    for (item of cache) {
        return item;
    }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
