// In callback, we do not have control of our callback in our hands , it is in the control of function to which we are passing 
// our callback. The controls like when our callback is called , where it is called, how many times it will be called
// whether it is called or not

function download(url, cb){
    console.log("Started downloading from url", url);
    setTimeout(function exec(){
        console.log("Completed downloading after 5s");
        const content = "ABCDEF";
        cb(content);
        cb(content);
    }, 5000);
}

download("www.xyz.com", function processDownload(data){
    console.log("downloaded data is", data);
});