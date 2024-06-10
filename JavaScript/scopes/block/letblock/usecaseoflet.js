function fun(){
    for(var i = 1; i < 10; i++){
        // do something
    }
    console.log(i);  // i is accesseble here also, therefore better to use let
}

function gun(x, y){
    if(x < y){
        var temp = x;
        // let temp = x;
        x = y;
        y = x;
    }
    // temp is accesseble here also, so better to use let
    return y - x;
}

fun();