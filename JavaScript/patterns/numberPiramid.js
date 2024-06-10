function pattern(n){
    for(let row=1; row <= n; row++){
        let str = "";

        // spaces
        for(let sp=1; sp<=n-row; sp++){
            str += " ";
        }
        // numbers
        for(let num=1; num<=row; num++){
            str += num;
        }
        // numbers
        for(let num2=row-1; num2 >= 1; num2--){
            str += num2;
        }

        console.log(str);
    }
}

pattern(4);