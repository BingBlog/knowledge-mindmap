/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let cache = {};
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (cache[nums[i]] === undefined) {
            cache[nums[i]] = 1;
        }
        else {
            cache[nums[i]] += 1;
        }
    }
    // console.log('cache', cache);
    let sorted = Object.keys(cache).sort(function (a, b) {
        return cache[a] - cache[b] < 0 ? 1 : -1;
    });

    // console.log('sorted', sorted);
    let sortedLength = sorted.length;
    return sorted.slice(0, k);

};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
