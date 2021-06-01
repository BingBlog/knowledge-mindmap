/**
 * 会创建一个新函数。
 * 当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
 * 之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
 */

// 实现参考：https://github.com/mqyqingfeng/Blog/issues/12

//  Syntax
//  bind(thisArg)
//  bind(thisArg, arg1)
//  bind(thisArg, arg1, arg2)
//  bind(thisArg, arg1, ... , argN)

function greeting(firstName, lastName) {
    console.log(`${this.content}:${firstName} ${lastName}`);
    this.firstName = firstName;
    this.lastName = lastName;
}

var message = {
    content: 'hi'
};

var sayHi = greeting.bind(message);
sayHi('zhang', 'san');


/**
 * 
 * @param {*} obj 
 * @return function
 */
Function.prototype.bind1 = function bind1(obj) {
    // 将调用者，也就是原始的函数存起来
    var originFunction = this;

    // 处理 bind 时接受的参数
    console.log(arguments);
    var bindArgs = Array.prototype.slice.call(arguments, 1);

    // 返回的是一个函数，函数中的 this 是 obj
    return function () {
        console.log(arguments);
        var args = Array.prototype.slice.call(arguments);
        return originFunction.apply(obj, bindArgs.concat(args));
    }
}

var message1 = {
    content: '你好'
};

var sayHi1 = greeting.bind1(message1, 'li');
sayHi1('si');