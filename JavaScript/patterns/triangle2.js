function reversetriangle(n){
    for(let row=1; row<=n; row++){
        let str = "";
        // spaces
        for(let sp=1; sp<=n-row; sp++){
            str += " ";
        }
        // star
        for(let st=1; st<=row; st++){
            str += "*";
        }

        console.log(str);
    }
}

reversetriangle(4);
reversetriangle(6);