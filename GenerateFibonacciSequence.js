/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    function fibonaci(x){
        const output = [0,1];
        for(let i=2;i<=x;i++){
            output[i]=output[i-1]+output[i-2];
        }
        return output[x];
    }
    let callCount = 0;
    while(true){
        yield fibonaci(callCount);
        callCount++;
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */