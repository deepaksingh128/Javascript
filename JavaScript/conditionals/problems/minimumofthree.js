var x = 6;
var y = 1;
var z = 2;

if(x < y && x < z){
    console.log(x, "is minimum");
}else if(y < x && y < z){
    console.log(y,"is minimum");
}else{
    console.log(z,"is minimum");
}