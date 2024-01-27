/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var y =x.toString().split('');
    var reversedArray = [];
    for(let i=y.length-1;i>=0;i--){
        reversedArray.push(y[i]);
    }
    if(y === reversedArray){return true;}
    else return false;
};