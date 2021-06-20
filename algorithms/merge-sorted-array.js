/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < m || j < n) {
        if (i === m) {
            res = res.concat(nums2.slice(j));
            break;
        }
        else if (j === n) {
            res = res.concat(nums1.slice(i, m));
            break;
        }
        else {
            if (nums1[i] < nums2[j]) {
                res.push(nums1[i]);
                if (i < m) {
                    i++;
                }
            }
            else {
                res.push(nums2[j]);
                if (j < n) {
                    j++;
                }
            }
        }
    }

    let resLength = res.length;
    for (let i = 0; i < resLength; i++) {
        nums1[i] = res[i];
    }
};
let nums1 = [1, 2, 4, 5, 6, 0];
merge(nums1, 5, [3], 1);
console.log(nums1);
