/**
 * 
 * @param {Function} fn 
 * @param {number} duration 
 * @return {Function} 
 */
function throttle(fn, duration) {
    var lastExcuteTime = undefined;
    var contex = this;
    return function() {
        var now = Date.now();
        if (!lastExcuteTime) {
            fn.apply(contex, arguments);
            lastExcuteTime = now;
        }

        if ((now - lastExcuteTime) > duration) {
            fn.apply(contex, arguments);
            lastExcuteTime = now;
        }
        return;
    }
}


function say(message) {
    console.log(message);
}

var throttledSay = throttle(say, 20);

throttledSay('1');
throttledSay('2');

setTimeout(function() {
    throttledSay('3');
    setTimeout(function() {
        throttledSay('4');

        setTimeout(function() {
            throttledSay('5');
            setTimeout(function() {
                throttledSay('6');
            }, 11);
        }, 11);
    }, 11)
}, 11)