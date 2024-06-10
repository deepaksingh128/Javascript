// Note :- this is the one way of handeling the errors, it become difficult
//         to write rejection hander in every case and then throw error manually ,
//         therefore it is better to use catch .

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
    },
    function rejectDownload(value){
        console.log("Download rejected ", value);
        throw value;
    }
)
.then(
    function processWrite(value){
        console.log("data written in the file with name", value);
        return uploadData(value, "www.upload.com");
    },
    function rejectWrite(value){
        console.log("write reject ", value);
        throw value;
    }
)
.then(
    function processUpload(value){
        console.log("we have uploaded with", value);
    },
    function rejectUpload(value){
        console.log("upload reject ", value);
        // throw value; // no need
    }
);