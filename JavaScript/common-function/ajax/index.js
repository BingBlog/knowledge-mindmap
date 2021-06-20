/**
 * 第一个版本，原始版本
 *
 * @param {Object} options
 * @param {string} options.method
 * @param {string} options.url
 * @param {Object} options.param append to url
 * @param {Object} options.data post body
 * @param {Object} options.headers
 * @param {Function} options.success
 * @param {Function} options.fail
 * @param {Function} options.finally
 */
function ajax(options) {
    let xhr = new XMLHttpRequest();
    let url = `${options.url}`;
    if (options.param) {
        url = `${url}?${encodeURIComponent(options.param)}`;
    }
    xhr.open(options.method, url);

    xhr.overrideMimeType("application/json");
    xhr.responseType = 'json';

    options.headers && Object.keys(options.headers).map(key => {
        xhr.setRequestHeader(key, options.headers[key]);
    });

    xhr.addEventListener('load', res => {
        // console.log('res', res);
        console.log('xhr', xhr);
        console.log('response', xhr.response);
    });

    xhr.addEventListener('error', res => {
        // console.log('res', res);
        console.log('xhr', xhr);
    });

    xhr.addEventListener('timeout', res => {
        // console.log('res', res);
        console.log('xhr', xhr);
    });

    xhr.addEventListener('abort', res => {
        // console.log('res', res);
        console.log('xhr', xhr);
    });

    xhr.addEventListener('progress', res => {
        // console.log('res', res);
        console.log('xhr', xhr);
    });



    xhr.send();
}

ajax({
    method: 'get',
    url: 'http://127.0.0.1:8887/ajax/index.json',
});
