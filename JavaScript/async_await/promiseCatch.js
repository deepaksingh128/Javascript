// Note :- The other and better way of handeling rejections or errors inside promises is using catch 
//         at last only once and no need to write rejection handlers also

// Also , here if any of promise is rejected , then none of the below chained 
// promises will be executed and it will directly go to catch

// Also , finally will always be executed whether error came or not

function download(url){
    return new Promise(function exec(resolve, reject){
        console.log("Starting to download data from", url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            // resolve(content);
            reject(content);
        }, 6000);
    });
}

function writeFile(data){
    return new Promise(function exec(resolve, reject){
        console.log("Started writing a file with", data);
        setTimeout(function write(){
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    });
}

function uploadData(file, url){
    return new Promise(function exec(resolve, reject){
        console.log("Started uploading", file, "on", url);
        setTimeout(function upload(){
            console.log("upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 3000);
    });
}

download("www.xyz.com")
.then(
    function processDownload(value){
        console.log("downloading done with following value", value);
        return writeFile(value);
    }
)
.then(
    function processWrite(value){
        console.log("data written in the file with name", value);
        return uploadData(value, "www.upload.com");
    }
)
.then(
    function processUpload(value){
        console.log("we have uploaded with", value);
    }
)
.catch(function f(err){
    console.log("catching error ", err);
})
.finally(function final() {
    consolelog("Executing finally");
});