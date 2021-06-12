
/**
 * 1 1 2 3 5 8 13
 * 
 * @param {int} n 
 */
function fib(n) {
    let cache = {
        0: 0,
        1: 1,
        2: 1
    };
    
    return fibWithCache(n);

    function fibWithCache(n) {
        if (cache[n]) {
            return cache[n];
        }
        let result = fibWithCache(n - 1) + fibWithCache(n - 2);
        cache[n] = result;
        return result;
    }
}


console.log(fib(5));

console.log(fib(30));