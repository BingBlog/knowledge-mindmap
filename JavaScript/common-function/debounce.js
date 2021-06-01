/**
 * 
 * @param {Function} fn 
 * @param {number} dlay 
 */
function debounce(fn, delay) {
    var timer = null;
    var context = this;
    return function() {
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    }
}



function say(message) {
    console.log(message);
}

var debouncedSay = debounce(say, 20);

debouncedSay('1');
debouncedSay('2');

setTimeout(function() {
    debouncedSay('3');
    setTimeout(function() {
        debouncedSay('4');

        setTimeout(function() {
            debouncedSay('5');
            setTimeout(function() {
                debouncedSay('6');
            }, 21);
        }, 11);
    }, 11)
}, 11)


