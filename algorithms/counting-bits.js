/**
 * @param {number} n
 * @return {number[]}
 */

// 0 => 0 =>  [0]
// 1 => 1 =>  [1] => [0, 1]                        2的0次方
// 2 => 10 => [1] => [0, 1 ,1]                     2的1次方
// 3 => 11 => [2] => [0, 1, 1, 2]                  2的1次方 + 1
// 4 => 100 => [1] => [0, 1, 1, 2, 1]              2的2次方
// 5 => 101 => [2] => [0, 1, 1, 2, 1, 2]           2的2次方 + 1
// 6 => 110 => [2] => [0, 1, 1, 2, 1, 2, 1]        2的2次方 + 2
// 7 => 111 => [3] => [0, 1, 1, 2, 1, 2, 1, 3]     2的2次方 + 3
// 8 => 1000 => [1] => [0, 1, 1, 2, 1, 2, 1, 3]    2的3次方

// n n % 2的j次方 + (n - n )

var countBits = function (n) {
    let cache = {
        0: 0,
        1: 1
    };

    let cachePow = {};

    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push()
    }

    function numbersOfOne(n) {
        if (cache[n]) {
            return cache[n];
        }

        let pow = getPow(n);
        return 1 + numbersOfOne(n % Math.pow(2, pow));

    }

    function getPow(n) {
        if (cachePow[n]) {
            return cachePow[n];
        }
        let pow = 0;
        while (n < Math.pow(2, pow)) {
            pow += 1;
        }
        cachePow[n] = pow;
        return pow; // 9
    }

};
