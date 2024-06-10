// Note: play with this code in browser console console for better understanding:-

function process(){
    let i=0;
    let j = [1,2,3];
    let k = 10;

    function innerProcess(){
        i+=1;
        console.log(j);
        return i;
    }
    return innerProcess;
}

let res = process(); // innerProcess will only remember i and j
                     // inside closure property , it will not remember
                     // k variable

obj = {func : res};

console.log(res);

console.log("First time:", res());
console.log("second time:", res());
console.log("third time:", res());

console.log(obj);