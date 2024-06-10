function download(url){
    console.log("started downloading content from", url);
    return new Promise(function exec(resolve, reject){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            resolve(content);
        }, 5000);
    })
}

x = download("www.xyz.com");
x
.then(function fulfillHandler1(value){
    console.log("Content downloaded is 1", value);
    return "New promise string";
}, function rejectHandler1(value){
    console.log("rejected with", value);
})
.then(function fulfillHandler2(value){            // chaining
    console.log("Content downloaded is 2", value);      // if we had not returned anything, then by default : undefined
});