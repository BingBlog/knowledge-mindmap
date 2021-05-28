/**
 * @desc 通过实现一个Promise，来检测对异步的理解
 * @require 异步调用、微任务处理、链式调用
 * 
 * 
 * @param {*} fn 
 */

function MyPromise(fn) {
    // 只能被new 调用，不能直接调用
    if (!(this instanceof Promise)) {
        throw new TypeError('Promises must be constructed via new');
    }

    // 参数必须为function
    if (typeof fn !== 'function') {
        throw new TypeError('not a function');
    }
    
    // pending fulfilled rejected
    this._state = 'pending';
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    // 构造resolve方法
    var resolve = function(value) {
        if (this._state === 'pending') {
            this._state = 'fulfilled';
            this._value = value;
            // 因为一个实例可以被then多次，所以需要遍历执行
            this.onResolveCallbacks.forEach()
        }
    }

    // 构造reject方法

    // 执行传入的方法，并传入所需参数
    fn(resolve, reject);
}


// 原型方法
MyPromise.prototype.then = function(onResolve, onReject) {
    if (this._state === '') {

    }
}

MyPromise.prototype['catch'] = function(onReject) {

}

MyPromise.prototype['finally'] = function(onFinish) {

}

// 静态方法
MyPromise.race = function() {
    
}

MyPromise.all = function() {

}

MyPromise.resolve = function() {

}

MyPromise.reject = function() {

}

MyPromise.allSetted = function() {

}


// 测试Demo

var p = new MyPromise((resolve, reject) => {
    setTimeout(function() {
        resolve('成功')
    }, 1000);
});

p.then(function(result) {
    console.log(result);
});

p.catch(function(reason) {
    console.log(reason);
});

p.finally(function(reason) {
    console.log(reason);
});