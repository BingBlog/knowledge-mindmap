/**
 * @desc 通过实现一个createInstance（模拟New）操作，来检测对对象创建过程的理解
 * 
 */



// 问题分析

// new操作符做了这些事：
// 它创建了一个全新的对象。
// 它会被执行[[Prototype]]（也就是__proto__）链接。
// 它使this指向新创建的对象。。
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function() {
    console.log('walk');
}

var p = new Person('zhangsan', 30);

/**
 * p1 满足以下特性
 * 1、p1.constructor == Person
 * 2、p1._proto_ = Person.prototype
 * 
 */


/**
 * 
 * @param {*} originClass 原始类
 * @param {*} args 传给构造函数的参数
 */
function createInstance1(originClass, ...args) {
    // 创建一个对象
    var obj = {}
    
    // 并将该对象的 _proto_ 指向 originClass 的 prototype
    obj.__proto__ = originClass.prototype;

    // 将参数挂载到 obj 上
    originClass.apply(obj, args);
    return obj;
}

var p1 = createInstance1(Person, 'lisi', 31);
console.log(p1);
// 测试
console.log('p1.walk()');
p1.walk()
console.log('p1.constructor', p1.constructor);


/**
 * 考虑到 __proto__ 并不是标准属性
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
 * 
 * 文档中提到了两种替代方式，其中一种是 Object.create()，另一种是 setPrototypeOf
 * 
 * @param {*} originClass 
 * @param  {...any} args 
 * @returns 
 */
function createInstance2(originClass, ...args) {
    // 创建一个对象，并将该对象的 _proto_ 指向 originClass 的 prototype
    var obj = Object.create(originClass.prototype);
    
    // 将参数挂载到 obj 上
    originClass.apply(obj, args);
    return obj;
}

var p2 = createInstance2(Person, 'wangwu', 32);
console.log(p2);
console.log('p2.walk()');
p2.walk()
console.log('p2.constructor', p2.constructor);


/**
 * 使用 Object.setPrototypeOf
 * 
 * @param {*} originClass 
 * @param  {...any} args 
 * @returns 
 */
function createInstance3(originClass, ...args) {
    // 创建一个对象
    var obj = {};

    // 并将该对象的 _proto_ 指向 originClass 的 prototype
    Object.setPrototypeOf(obj, originClass.prototype);
    
    // 将参数挂载到 obj 上
    originClass.apply(obj, args);
    return obj;
}

var p3 = createInstance3(Person, 'zhao6', 33);
console.log(p3);
console.log('p3.walk()');
p3.walk()
console.log('p3.constructor', p3.constructor);


/**
 * 由于 ... 扩展符号的操作，兼容性并不好，我们可以通过处理 arguments
 * 
 * @param {*} originClass 
 * @returns 
 */
function createInstance4(originClass) {
    console.log('arguments', arguments);
    // 创建一个对象，并将该对象的 _proto_ 指向 originClass 的 prototype
    var obj = Object.create(originClass.prototype)
    
    // 处理参数，从第二个开始截取
    var newArgs = Array.prototype.slice.call(arguments, 1);
    console.log('newArgs', newArgs);

    // 将参数挂载到 obj 上
    originClass.apply(obj, newArgs);
    return obj;
}

var p4 = createInstance4(Person, 'qian6', 34);
console.log(p4);
console.log('p4.walk()');
p4.walk();
console.log('p4.constructor', p4.constructor);


/**
 * 到此，需要考虑一些边界条件，比如：
 * 1、如果用户传入的 originClass 为null等一些非对象属性会造成报错: 
 * // createInstance.js:139 Uncaught TypeError: Cannot read property 'prototype' of null
 * 2、如果传入的不是一个构造函数，比如这个函数不能执行 new:
 * 
 * @param {*} originClass 
 * @returns 
 */
function createInstance5(originClass) {
    if (originClass === null) {
        throw new TypeError(originClass + 'is not a constructor');
    }

    if (typeof originClass !== 'function' && typeof originClass !== 'object') {
        throw new TypeError(originClass + 'is not a constructor');
    }

    if (!originClass.prototype) {
        throw new TypeError(originClass + 'is not a constructor');
    }

    console.log('arguments', arguments);
    // 创建一个对象，并将该对象的 _proto_ 指向 originClass 的 prototype
    var obj = Object.create(originClass.prototype)
    
    // 处理参数，从第二个开始截取
    var newArgs = Array.prototype.slice.call(arguments, 1);
    console.log('newArgs', newArgs);

    // 将参数挂载到 obj 上
    var ret = originClass.apply(obj, newArgs);
    if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret;
    }
    return obj;
}

// var p5 = createInstance5(null);

// var p5 = createInstance5(1);

// var p5 = createInstance5(Object.create(null));

