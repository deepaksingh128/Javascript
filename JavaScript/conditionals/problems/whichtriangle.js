let a = 5;
let b = 7;
let c = 5;

if(a == b && b == c){
    console.log("equilateral triangle");
}else if(a == b || b == c || c == a){
    console.log("isosceles triangle");
}else{
    console.log("scalene triangle");
}