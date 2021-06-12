/**
 * 采用递归的方式，对list进行反转
 * 
 * @param {*} list 形如 [1, 2, 3, 4, 5] 的数组
 * 
 * 子问题： swap(low, high) 和 reverse(list, low + 1, high - 1)
 * 结束：low == high
 */
function reverse(list) {
    doReverse(list, 0, list.length - 1);
    return list;

    function doReverse(list, low, high) {

        // 奇数个 [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1] : low = 2 high = 2
        // 偶数个 [1, 2, 3, 4]    -> [4, 3, 2, 1]    : low = 2 high = 1
        if (low <= high) {
            return;
        }
        swap(list, low, high);
        doReverse(list, low + 1, high - 1);
    }

    function swap(list, low, high) {
        let temp = list[low];
        list[low] = list[high];
        list[high] = temp;
    }
}

let list1 = [1, 2, 3, 4, 5];
console.log(reverse(list1));


let list2 = [1, 2, 3, 4, 5, 6];
console.log(reverse(list2));

