function upperTriangle(n){
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

function lowerTriangle(n){
    for(let row=1; row<=n-1; row++){
        let str = "";

        // spaces
        for(let sp=1; sp<=row; sp++){
            str += " ";
        }
        // stars
        for(let st=1; st<=2*(n-row)-1; st++){
            str += "*";
        }

        console.log(str);
    }
}

upperTriangle(4);
lowerTriangle(4);
