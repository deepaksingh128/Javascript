console.log(name);
let name = "Deepak";           // using let keyword : error will be thrown by above statement ,
                                // cannot access before declaration

function fun(){
    console.log(name);
}

fun();
console.log(name);