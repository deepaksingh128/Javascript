// Note : resolve function is only there inside the promise constructor
//  So , to resolve a value inside Promise constructor
//  we always use resolve , But to resolve these chained promises we can 
// use return statement or return another promise object

Promise.resolve("foo")
.then(function fh1(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            string += "bar";
            resolve(string);
        }, 10000);
    });
})
.then(function fh2(value){
    
    setTimeout(function exec(){
        value += "baz";
        console.log(value);
    }, 1);

    return value;  // it will resolve the promise , 
             //with value property as value , and it will passed to next .then as parameter
})
.then(function fh3(value){
    console.log("from fh3 :", value);
})
