function fun(){
    console.log(y);     // undefined , no error due to hoisting , fun scope
    var y = 2;          // hoisting
}

fun();
// console.log(y);              // not accesseble