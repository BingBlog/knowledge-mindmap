/**
 * 第 1 题：
 * 
 * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，
 * 然后写一个 myClear，停止上面的 mySetInterVal
 * 
 * https://github.com/lgwebdream/FE-Interview/issues/7
 */

/**
 * 
 * @param {*} fn 
 * @param {*} a 
 * @param {*} b 
 * @return {TimerId} 
 */
function mySetInterVal(fn, a, b) {
    let count = 0;
    let timer = {};
    timer.id = delay();
    return timer;
    
    function delay() {
        return setTimeout(() => {
            fn();
            count++;
            timer.id = delay();
        }, a + count * b);
    }

}

function myClear(timer) {
    clearTimeout(timer.id);
}


const startTime = Date.now();
let timer = mySetInterVal(() => {
    const nowTime = Date.now();
    console.log('didi:' + (nowTime - startTime));
}, 2000, 1000);


setTimeout(() => {
    myClear(timer);
}, 10000);
