/**
 * curry的一个常见的demo：
 * 
 */

function add(a, b) {
    return a + b;
}

// var curryAdd = curry(add);

// curryAdd(1)(2);

/**
 * 上面的demo说明了curry做了以下事情：
 * 1、调用curryAdd(1)时，会存下第一个参数，然后返回一个函数；
 * 2、返回的函数，如果为curryAdd1，可以接受后续的参数；
 * 3、调用 curryAdd1(2)时，返回最终的值；
 * 
 * 根据以上的分析，我们可以先写出第一个版本
 */

function curry(fn) {
    return function(a) {
        return function(b) {
            return a + b;
        }
    }
}

var curryAdd = curry(add);
console.log(curryAdd(1)(2));




/**
 * 上面的方法，如果参数过多，就比较麻烦了
 * 
 */

function addInfinite(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(addInfinite(1, 2, 3, 4, 5));


function curry1(fn, length) {
    var args = [];
    return function() {
        // console.log('arguments', arguments);
        args = args.concat(Array.prototype.slice.call(arguments));
        // console.log('args', args);
        if (args.length === length) {
            return fn.apply(null, args);
        }
        return arguments.callee;
    }
}

var curryAddInfinite = curry1(addInfinite, 5);
console.log('curryAddInfinite(1)(2)(3)(4)(5)', curryAddInfinite(1)(2)(3)(4)(5));


var curryAddInfinite1 = curry1(addInfinite, 5);
console.log('curryAddInfinite1(1, 2, 3)(4, 5)', curryAddInfinite1(1, 2, 3)(4, 5));

/**
 * 但是如上的写法，需要传入函数的长度，可以通过fn.length来获取原始函数的参数长度。
 */

function curry2(fn, length) {
    var args = [];
    var length = fn.length;
    return function() {
        console.log('arguments', arguments);
        args = args.concat(Array.prototype.slice.call(arguments));
        console.log('args', args);
        if (args.length === length) {
            return fn.apply(null, args);
        }
        return arguments.callee;
    }
}

var curryAddInfinite2 = curry1(addInfinite, 5);
console.log('curryAddInfinite2(1)(2)(3)(4)(5)', curryAddInfinite2(1)(2)(3)(4)(5));

// 但是对于以这种，没有声明参数的函数来说，就需要声明函数长度
function addInfinite_() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce((sum, item) => sum + item, 0);
}

// 更简洁的写法
var curry = fn =>
    judge = (...args) =>
        args.length === fn.length
            ? fn(...args)
            : (arg) => judge(...args, arg)