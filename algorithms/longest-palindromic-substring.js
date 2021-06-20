/**
 * 最长回文子串 abcdcbe -> bcdcb
 */



// 动态规划的思路：一个串是否是回文，可以拆解为其两头字符是否相等，如果相等，则取决于其去掉两头元素后的子元素是否相等
// 状态转义方程：可以表达为 dp[i][j] = (dp[i] === d[j]) && dp[i + 1][j - 1]
// 当子串小于两个字符时，则此时str[i...j]的长度为2或者为3时，不需要检查子串是否为回文串。
// 则 (j - 1) - (i + 1) + 1 < 2  => j - i < 3时，不需要继续

function longestPalindromicSubstring(s) {
    // 记录当前最长的值
    let maxLenth = 1;
    // 记录当前最长串的其实下标
    let currentStartIndex = 0;

    // 状态存储
    let dp = [];
    // 初始化 i = j 时的状态值

    let length = s.length;

    if (length < 2) {
        return true;
    }

    for (let i = 0; i < length; i++) {
        if (dp[i] === undefined) {
            dp[i] = [];
        }
        dp[i][i] = true;
    }

    for (let j = 1; j < length; j++) {
        for (i = 0; i < j; i++) {
            // 如果两头不相等，则必然不为回文串
            if (s.charCodeAt(i) !== s.charCodeAt(j)) {
                dp[i][j] = false;
            }
            // 如果两头相等
            else {
                // 如果子串区间不够（子串长度为1或者为0），则不用比较子串，当前串为回文串，如aba, bb
                if (j - i < 3) {
                    dp[i][j] = true;
                }
                // 如果子串区间足够，需要判断子串，由于是从下向上转义的，所以 dp[i + 1][j - 1] 已经计算并存储了
                else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            if (dp[i][j] && (j - i + 1) > maxLenth) {
                maxLenth = j - i + 1;
                currentStartIndex = i;
            }
        }
    }
    return s.slice(currentStartIndex, currentStartIndex + maxLenth);
}

console.log(longestPalindromicSubstring('abcdcbe'));
