// Tasks: (Only use promises): dummy functions
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function download(url, cb){
    console.log("Inside download function");
    setTimeout(function (){
        console.log("Download completed");
        const data = "ABCDEF";
        cb(data);
    }, 5000);
}

function writeFile(data, cb){
    console.log("Inside writeFile function");
    setTimeout(function (){
        console.log("Write completed");
        const fileName = "new.txt";
        cb(fileName);
    }, 5000);
}

function uploadFile(fileName, newUrl, cb){
    console.log("Inside uploadFile function");
}