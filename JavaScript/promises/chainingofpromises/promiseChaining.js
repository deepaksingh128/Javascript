function download(url){
    console.log("Started downloading content from", url);
    return new Promise(function exec(res, rej){
        setTimeout(function p(){
        console.log("Completed downloading data in 5s");
        const content = "ABCDEF";
        res(content);
    }, 5000);
})
}

x = download("www.xyz.com");
x
.then(
    function fulfillHandler1(value){
        console.log("content downloaded is1", value);
        return "New promise string"; // if not returned anything, by default : undefined , would have been returned
                                     // returning will make this chained promise as fullfilled
    },
    function rejectHandler1(value){
        console.log("rejected with", value);
    }
)
.then(
    function newFulfillHandler(value){
        console.log("value from chained then promise:", value);
    }
)