function higherOrderFun(x, fn){
    for(let i=0; i<x; i++){
        console.log(i);
    }
    fn(x*x);
}

fun(10, function (num){      // anonymous callback function
    console.log(num);
});