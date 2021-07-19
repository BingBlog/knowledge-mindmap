/**
 * 实现 Promise.all
 * 
 * https://github.com/lgwebdream/FE-Interview/issues/30
 * 
 * 分析：
 * 1、函数的作用为：
 * （1）、接受以数组形式提供的一系列promise对象；
 * （2）、对所有的 promise 调用 then()；
 * （3）、返回一个新的promise；
 * （4）、如果参数中 promise有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败promise的结果
 * 
 */


Promise.myAll = function (promises) {
    return new Promise((resolse, reject) => {
        let list = [];
        let successCount = 0;
        let hasError = false;
        let total = promises.length;
        for (let i = 0; i < total; i++) {
            let promise = promises[i];
            promise.then((res) => {
                list[i] = res;
                successCount++;
                if (successCount == total) {
                    resolse(list);
                }
            }).catch((error) => {
                if (!hasError) {
                    reject(error);
                    hasError = true;
                }
            })
        }
    });
}