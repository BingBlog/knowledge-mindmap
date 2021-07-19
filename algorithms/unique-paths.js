/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     let dp = [];
//     dp[1] = [];
//     dp[1][1] = 0;
//     for (let i = 2; i <= m; i++) {
//         dp[i] = [];
//         dp[i][1] = 1;
//     }

//     for (let i = 2; i <= n; i++) {
//         dp[1][i] = 1;
//     }

//     return getPath(m, n);


//     function getPath(m, n) {
//         if (dp[m] && dp[m][n]) {
//             return dp[m][n];
//         }

//         let result = getPath(m - 1, n) + getPath(m, n - 1);
//         if (dp[m] === undefined) {
//             dp[m] = [];
//         }
//         dp[m][n] = result;
//         return result;
//     }
// };


// console.log(uniquePaths(3, 7));


var uniquePathsA = function (m, n) {
    let dp = [];
    dp[1] = [];
    for (let i = 1; i <= m; i++) {
        dp[i] = [];
        dp[i][1] = 1;
    }

    for (let i = 1; i <= n; i++) {
        dp[1][i] = 1;
    }

    let i = 2;
    let j = 2;
    for (let i = 2; i <= m; i++) {
        for (let j = 2; j <= n; j++) {
            if (dp[i] === undefined) {
                dp[i] = [];
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m][n];
}

console.log(uniquePathsA(3, 7));

console.log(uniquePathsA(1, 1));

console.log(uniquePathsA(2, 2));
