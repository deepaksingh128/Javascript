function isEvenOrOdd(num){
    if(num % 2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

let x = 1;
let y = 2;
let z = 3;

console.log(isEvenOrOdd(x));

console.log(isEvenOrOdd(y));

console.log(isEvenOrOdd(z));

for(let i=1; i<=50; i++){
    console.log(i, "is", isEvenOrOdd(i));
}