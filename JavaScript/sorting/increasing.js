// Using comparator function 
let arr = [1,10,9,100,1000,11,12,13,14,2,3];
arr.sort(function (a,b){
    return a-b;
});

console.log(arr);