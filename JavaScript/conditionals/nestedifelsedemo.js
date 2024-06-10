let isUserPrime = true;
let isUserDiscovery = false;
let isUserAccorn = true;

if(isUserPrime){
    
    if(isUserDiscovery){
        if(isUserAccorn){
            console.log("Enjoy all accorn, prime and discovery content");
        }else{
            console.log("Enjoy both prime and discovery");
        }
    }else if(isUserAccorn){
        console.log("Enjoy both prime and accorn");
    }else{
        console.log("Enjoy prime content");
    }
}else{
    console.log("please buy a subscription to enjoy content");
}