/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let cache = [];
    let length = nums.length;
    for (let i = 0; i <= length; i++) {
        cache[nums[i]] = nums[i];
    }

    let result = [];

    for(let i = 1; i <= length; i++) {
        if (cache[i] !== i) {
            result.push(i);
        }
    }

    return result;
};


let input1 = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(input1));