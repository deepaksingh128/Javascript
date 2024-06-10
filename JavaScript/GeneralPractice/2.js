function download(url){
    return new Promise(function executer(resolve){
        setTimeout(function exec(){
            const content = "ABCDEF";
            resolve(content);
        });
    });
}

function writeFile(content){
    return new Promise(function executer(resolve){
        setTimeout(function exec(){
            const fileName = "new.txt";
            resolve(fileName);
        });
    });
}

function uploadFile(newUrl){
    return new Promise(function executer(resolve){
        resolve("Success");
    })
}

download("www.xyz.com")
.then(function (content){
    console.log("Downloaded data is :", content);
    return writeFile(content);
})
.then(function write(fileName){
    console.log("Written in file :", fileName);
    return uploadFile(fileName);
})
.then(function upload(status){
    console.log("Uploaded with :", status);
})