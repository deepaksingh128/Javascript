function download(url){
    return new Promise(function exec(resolve, reject){
        console.log("Starting to download data from", url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
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

function doAfterReceiving(value){

    let future = iter.next(value);
    console.log("future is", future);
    if(future.done) return;
    future.value.then(doAfterReceiving);
}


// Note : below syntax is better then .then() chainning syntax 

function* steps(){
    const downloadedData = yield download("www.xyz.com");
    console.log("Data downloaded is", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("file written is", fileWritten);
    const uploadResponse = yield uploadData(fileWritten, "www.drive.google.com");
    console.log("upload response is", uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);