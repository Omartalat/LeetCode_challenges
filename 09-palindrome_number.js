/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    const numForward = x.toString();
    const numBackword = numForward.split("").reverse().join("");

    const len = x % 2 === 1 ? Math.trunc(numForward.length) : numBackword.length / 2


    for (let i = 0; i < len; i++) {
        if (numForward[i] !== numBackword[i]) {
            return false
        }
    }

    return true
};