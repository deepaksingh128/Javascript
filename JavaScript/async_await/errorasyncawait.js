// Note : Handling errors in async await is easier and readable by using
//        try and catch blocks

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

async function steps(){
    try{
        console.log("Starting steps");
        const downloadedData = await download("www.xyz.com");
        return downloadedData;
    } catch(error){
        console.log("we have handled the error", error);
    } finally{
        console.log("Ending");
    }
}

steps();