function download(url){
    return new Promise(function exec(resolve, reject){
        console.log("Starting to download data from", url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        }, 1000);
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

// Note:- below syntax is same to generator function syntax

async function steps(){    // replaced * , by async keyword
    // const downloadedData = await 10;   // Also ,we can write like this
    const downloadedData = await download("www.xyz.com"); // replaced yield with await
    console.log("Data downloaded is", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("file written is", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("upload response is", uploadResponse);
    return uploadResponse;
}


steps().then((value) => console.log("we have completed steps with", value));
console.log("outside");
for(let i=0; i < 10000000000; i++){

}

setTimeout(function f(){console.log("timer done")}, 4000);
console.log("for loop done");

// Note : Here we are not required to call iter.next() like thing again
//        and again to resume the function , JS will take care of it
//        same as yield , when await comes control will come out from the 
//        function and when call stack becomes empty and np global code
//        code left it resumes back automatically