let obj = {
    toString(){
        // by default it returns [object Object] , string type
        return "98";
    },

    valueOf(){
        // by default it returns same object
        return 10;
    }
};

console.log(obj.toString());
console.log(obj.valueOf());