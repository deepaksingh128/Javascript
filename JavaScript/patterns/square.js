function square(n){
    for(let row=1; row<=n; row++){
        let str = "";
        for(let col=1; col<=n; col++){
            str += "*";
        }
        console.log(str);
    }
}

square(5);
square(7);
square(10);

