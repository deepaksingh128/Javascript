// for parallel downloading we can use below syntax

function download(url, time){
    return new Promise(function exec(resolve, reject){
        console.log("Starting to download data from ", url);
        setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            
            if(time > 1000){
                reject("error");
            } else{
                resolve(content);   
            }
            // resolve(content);
        }, time);
    });   
}

const p1 = download("www.abc1.com ", 5000);
const p2 = download("www.abc2.com ", 1000);
const p3 = download("www.abc3.com ", 3000);

Promise.all([p1, p2, p3]).then(function fulfillmentHandler(values){
    console.log(values);    // this handler will be executed only after all
})                         // the promises will be resolved                          

