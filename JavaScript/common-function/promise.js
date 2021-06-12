/**
 * @desc 通过实现一个Promise，来检测对异步的理解
 * @require 异步调用、微任务处理、链式调用
 * 
 * 
 * @param {*} executor 
 */

function MyPromise(executor) {
    // 只能被new 调用，不能直接调用
    if (!(this instanceof MyPromise)) {
        throw new Error('Promises must be constructed via new');
    }

    // 参数必须为function
    if (typeof executor !== 'function') {
        throw new Error('not a function');
    }
    
    // pending fulfilled rejected
    this.status = 'pending';
    this.reason = undefined;
    this.value = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = []
;
    // 构造resolve方法
    var resolve = function(value) {
        if (this.status === 'pending') {
            this.status = 'fullfilled';
            this.value = value;
            // 因为一个实例可以被then多次，所以需要遍历执行
            this.onResolveCallbacks.forEach((function(resolve) {
                resolve(this.value);
            }).bind(this));
        }
    }

    // 构造reject方法
    var reject = function(reason) {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.reason = reason;
            this.onRejectCallbacks.forEach((function(reject) {
                reject(this.reason);
            }).bind(this));
        }
    }

    // 执行传入的方法，并传入所需参数
    try {
        executor(resolve.bind(this), reject.bind(this));
    }
    catch(error) {
        reject(error);
    }
    
}


// 原型方法
MyPromise.prototype.then = function(onResolve, onReject) {
    return new MyPromise((resolve, reject) => {
        var self = this;
        // then() 执行时，已经成功处理了
        if (this.status === 'fullfilled') {
            var x = onResolve(self.value);
            resolve(x);
        }

        

        // then() 执行时，已经失败处理了
        if (this.status === 'rejected') {
            var x = onReject(self.reason);
            reject(x);
        }

        // then() 执行时，还未处理，此时没有value，也没有reason，所以不能直接调用，需要将回调函数先存起来
        if (this.status === 'pending') {
            var resolve = function() {
                var x = onResolve(this.value);
                resolve(x);
            }

            var reject = function() {
                var x = onReject(this.reason);
                reject(x);
            }
            // then可能会被调用多次，每调用一起，就需要增加一次回调
            onResolve && self.onResolveCallbacks.push(resolve.bind(self));
            onReject && self.onRejectCallbacks.push(reject.bind(self));
        }
    });
}

MyPromise.prototype['catch'] = function(onReject) {
    return this.then(null, onReject);
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
    var random = Math.random();
    if (random > 0.5) {
        resolve('成功:' + random);
    }
    else {
        reject('失败:' + random);
    }
    
});

var p1 = p.then(function(result) {
    console.log(result);
    return '成功了';
}, function(reason) {
    console.log(reason);
    return '失败了';
});

console.log(p1);


var p2 = p1.then(function(result) {
    console.log(result);
    return '成功了了';
}, function(reason) {
    console.log(reason);
    return '失败了了';
})

var p3 = p2.then(function(result) {
    console.log(result);
}, function(reason) {
    console.log(reason);
});

// p.catch(function(reason) {
//     console.log(reason);
// });

// p.finally(function(reason) {
//     console.log(reason);
// });