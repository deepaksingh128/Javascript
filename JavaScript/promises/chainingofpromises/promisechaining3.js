Promise.resolve("foo")
.then(function fh1(value){
    return Promise.resolve(value+"bar");
})
.then(function fh2(value){

    setTimeout(function exec(){
        value += "baz";
        console.log(value);
        return 10;         // note
    }, 1);
    // Note : since we are not returning anything
    // By default undefined will be returned.

    // return value;  (if not)
})
.then(function fh3(value){
    console.log("from fh3 :", value);
})
