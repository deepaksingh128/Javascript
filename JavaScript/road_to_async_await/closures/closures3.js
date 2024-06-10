// Note: play with this code inside browser console

function process(){
    let i = 0;

    function innerProcess1(){
        i += 1;
        return i;
    }
    function innerProcess2(){
        i += 1;
        return i;
    }

    return {innerProcess1, innerProcess2};
}

let y = process();
y.innerProcess1();    // i will be updated to 1 , in innerProcess2() as well , 
                      // both have access of same memory location

console.log(y);