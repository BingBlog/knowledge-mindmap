/**
 * 将 1234567 转换为 1.234.567
 */

// 浏览器中
function numberWithComma(number) {
    return (11111111111).toLocaleString().replace(/,/g, '.');
}

console.log(numberWithComma(1234567));


// 使用正则表达式
function numberWithCommaReg(number) {
    return number.toString().replace(/\B(?=([\d]{3})+(?!\d))/g, '.')
}
