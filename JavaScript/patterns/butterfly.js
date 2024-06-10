function upper(n){
    for(let row=1; row<=(n-1)/2; row++){
        let str = "";
        let leftStars = row;
        for(let i=1; i<=leftStars; i++){
            str += "*";
        }
        let spaces = n - 2*row;
        for(let j=1; j <= spaces; j+=1){
            str += " ";
        }
        let rightStars = row;
        for(let k=1; k <= rightStars; k += 1){
            str += "*";
        }
        console.log(str);
    }
}

function middle(n){
    let str = "";
    for(let i=1; i<=n; i++){
        str += "*";
    }
    console.log(str);
}

function lower(n){
    for(let row=1; row <= (n-1)/2; row += 1){
        let str = "";
        let leftStars = ((n-1)/2) - row + 1;
        for(let i=1; i<=leftStars; i+=1){
            str += "*";
        }
        let spaces = 2*row-1;
        for(let j=1; j<=spaces; j+=1){
            str += " ";
        }
        let rightStars = ((n-1)/2) - row + 1;
        for(let k=1; k<=rightStars; k += 1){
            str += "*";
        }
        console.log(str);
    }
}

upper(5);
middle(5);
lower(5);