function isprime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
let num = 20;
console.log(isprime(23));