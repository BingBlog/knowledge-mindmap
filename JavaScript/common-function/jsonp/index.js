/**
 * @param {Object} options
 * @param {string} options.url
 * @param {string} options.params
 * @param {string} options.callbackKey
 * @param {Function} options.success
 */

let callbackId = 0;
function jsonp(options) {
    let script = document.createElement('script');
    let url = options.url;
    if (options.params) {
        let params = encodeURIComponent(options.params);
        url = `${url}?${params}`;
    }

    window[`${options.callbackKey + callbackId}`] = (data) => {
        options.success(data);
    };

    callbackId++;

    script.addEventListener('load', () => {
        delete window[`${options.callbackKey + callbackId}`];
        script.remove();
        script = null;
    });

    script.addEventListener('error', () => {

    });

    script.src = url;
    document.body.append(script);
}

jsonp({
    url: 'http://127.0.0.1:8887/jsonp/json.js',
    param: {},
    callbackKey: 'jsonCallback',
    success: (data) => {
        console.log('success', data);
    }
});
