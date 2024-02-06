// const arr=[1,2,3,4];
// const compose = arr.reduceRight(function(sum,curr){
//         return sum+curr;
//     },0);


// console.log(compose);


// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
var compose = function(arr) {
    if(arr.length === 0){return function(x){
        return x;
    }}
    return function(x){
        let result =x;
        for(let i=arr.length-1;i>=0;i--){
            result = arr[i](result);
        }
        return result;
    }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(10)); // 9
 