// var versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
// // 要求从小到大排序，注意'1.45'比'1.5'大
// function sortVersion(versions) {
//   // TODO
// }
// // => ['1.5','1.45.0','3.3.3.3.3.3','6']


function sortVersion(versions) {
    return versions.map(item => item.split('.'))
                .sort((a, b) => compare(a, b))
                .map(item => item.join('.'));

    function compare(a = [], b = []) {
        let minLength = a.length < b.length ? a.length : b.length; 

        for(let i = 0; i < minLength; i++) {
            if (a[i] > b[i]) {
                return 1;
            }
            return -1;
        }
    }
}

let res1 = sortVersion(["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"]);

console.log(res1);