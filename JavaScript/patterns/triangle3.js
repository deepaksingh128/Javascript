function triangle3(n){
    for(let row=1; row<=n; row++){
        let str = "";
        // spaces
        for(let sp=1; sp<=n-row; sp++){
            str += " ";
        }
        // stars
        for(let st=1; st<=2*row-1; st++){
            str += "*";
        }

        console.log(str);
    }
}

triangle3(5);