function Product(n, p, d){
    this.name = n;
    this.price = p;
    this.description = d;

    function display() {
        console.log(this);
    }

    return this;
}

const p = new Product("bag", 100, "cool bag");
const p1 = Product("bag", 100, "cool bag"); // not using new keyword
                 // for This case lexical scoping is used to resolve this
                 // and global object is assigned by these values
console.log(p);
console.log(p1);