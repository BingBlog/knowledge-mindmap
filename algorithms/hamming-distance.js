/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    debugger;
    let binaryX = x.toString(2);
    let binaryY = y.toString(2);
    let lengthX = binaryX.length;
    let lengthY = binaryY.length;
    let diffCount = 0;
    while (lengthX > 0 || lengthY > 0) {
        let xCode = binaryX.charAt(lengthX - 1) || '0';
        let yCode = binaryY.charAt(lengthY - 1) || '0';
        if (xCode !== yCode) {
            diffCount++;
        }
        lengthX--;
        lengthY--;
    }
    return diffCount;
};

console.log(hammingDistance(1, 4));

// 001
// 100