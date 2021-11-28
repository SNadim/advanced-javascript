function generate (type) {
    if(type === "plus") {
        return (a, b) => a+b;
    } else if(type === 'minus') {
        return (a, b) => a-b;
    } else if(type === 'multiply') {
        return (a, b) => a*b;
    } else {
        return (a, b) => a/b;
    }
}

const x = generate("minus");
console.log(x(4,6));