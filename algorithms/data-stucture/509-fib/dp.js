
/**
 * 1 1 2 3 5 8 13
 * 
 * @param {int} n 
 */
function fib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    var pre = 1;
    var current = 1;
    while (n-- >= 3) {
        var sum = current + pre;
        pre = current;
        current = sum;
    }
    return current;
}

console.log(fib(1));

console.log(fib(2));

console.log(fib(3));

console.log(fib(4));