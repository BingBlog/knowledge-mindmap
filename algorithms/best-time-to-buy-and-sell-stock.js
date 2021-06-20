/**
 * @param {number[]} prices
 * @return {number}
 *
 * [7,1,5,3,6,4]
 * 动态规划: 第i天股票的最大收益，如果比第i - 1 天股票的收益大，则i天卖出
 */
var maxProfit = function (prices) {
    let max = 0;
    // 第i天之前的，最低价格
    let preMinPrice = prices[0];
    let length = prices.length;
    for (let i = 1; i < length; i++) {
        let currentPrice = prices[i];
        let profit = currentPrice - preMinPrice;
        if (profit > max) {
            max = profit;
        }

        if (currentPrice < preMinPrice) {
            preMinPrice = currentPrice;
        }
    }
    return max;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));
