/**
 * 用递归的方式，求list元素的和
 * 
 * @param {Array} list 为形如 [1, 2, 3, 4, 5]的数组
 * 
 * 分析：以[1, 2, 3, 4, 5]为例子
 * 减而治之
 * 子问题：list的和可以拆分为 sum([1, 2, 3, 4]) + 5
 * 递归的结束：当list的元素只有一个时，和为list[0] 。
 * 
 */
function sumA(list) {
    let n = list.length;
    return add(list, n);


    /**
     * 求list中前k个元素的和
     * @param {*} list 
     * @param {*} k
     * @return {int} 相加后的值
     */
    function add(list, k) {
        // 如果n为1
        if (k === 1) {
            return list[0];
        }

        // 将前k个元素的和同最后一个元素进行相加
        return add(list, k - 1) + list[k - 1];
    }
}

let list = [1, 2, 3, 4, 5];

console.log(sumA(list));


let list1 = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

console.log(sumA(list1));


/**
 * 分析：以[1, 2, 3, 4, 5, 6]为例子
 * 分而治之
 * 子问题：sum([1, 2, 3, 4, 5, 6]) = sum([1, 2, 3]) + sum([4, 5, 6])
 *        sum(low + high) = sum(low, middle) + sum(middle, high)
 * 
 * 结束：sum(low, high) 其中的 
 */
function sumB(list) {

    // 这里需要注意，不取上界元素
    return add(list, 0, list.length);

    /**
     * 不包含上界元素
     * 
     * @param {*} list 
     * @param {*} low 
     * @param {*} high 
     */
    function add (list, low, high) {
        console.log(low, high);
        if (high - low <= 1) {
            console.log('resolve', list[low]);
            return list[low];
        }

        let middle = (low + high) >> 1;
        console.log('middle', middle);

        return add(list, low, middle) + add(list, middle, high);
    }
}

let listB1 = [1, 2, 3, 4, 5];

console.log(sumB(listB1));


let listB2 = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

console.log(sumB(listB2));